import React, { useState } from 'react';
import { Spinner, View } from 'native-base';
import Pagination from '../pagination/Pagination';
import useUser from '../../utils/useUser';
import { useMutation, useQuery } from '@apollo/client';
import showError from '../../utils/showError';
import JourneyCandidatureCard from './JourneyCandidatureCard';
import EmptyAndError from '../empty-and-error/EmptyAndError';
import JourneyCandidatures, {
  Result,
  Variables,
} from '../../graphql/queries/JourneyCandidatures';
import AcceptCandidature, {
  Result as URes,
  Variables as UVar,
} from '../../graphql/mutations/AcceptCandidature';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

interface IJourneyCandidaturesList {
  journeyId: string;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const JourneyCandidaturesList: React.FC<IJourneyCandidaturesList> = ({
  journeyId,
  navigation,
}) => {
  const [page, setPage] = useState(1);

  const token = useUser().user?.token;

  const { data, loading, error } = useQuery<Result, Variables>(
    JourneyCandidatures,
    {
      variables: { token, page, journeyId },
    },
  );

  const [acceptCandidature] = useMutation<URes, UVar>(AcceptCandidature);

  const errors = data?.journeyCandidatures.errors;
  errors && showError(`Erro: ${errors}`);

  const candidatures = data?.journeyCandidatures.candidatures;

  const hasCandidature = candidatures && candidatures.length > 0;
  const showPagination = hasCandidature && !error && !errors;
  const hasError = !!error || !!errors;

  return (
    <View>
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        {hasCandidature ? (
          <View>
            {candidatures?.map((candidature) => {
              const handleAcceptCandidature = (): void => {
                acceptCandidature({
                  variables: { token, candidatureId: candidature.id },
                })
                  .then((result) => {
                    const errors = result.data?.acceptCandidature.errors;
                    if (!!errors) {
                      showError(`Erro: ${errors}`);
                    } else {
                      navigation.navigate('JourneysList', {
                        acceptedJourney: true,
                      });
                    }
                  })
                  .catch(() => {
                    showError('Erro: Ops, Algo deu Errado!');
                  });
              };

              const handleShowMoreInfo = (): void => {
                navigation.navigate('DoctorProfile', {
                  doctorId: candidature.doctor.id,
                });
              };

              return (
                <JourneyCandidatureCard
                  key={candidature.id}
                  candidature={candidature}
                  onAcceptCandidature={handleAcceptCandidature}
                  onShowMoreInfo={handleShowMoreInfo}
                />
              );
            })}
          </View>
        ) : (
          <EmptyAndError
            isLoading={loading}
            hasError={hasError}
            emptyMessage={'Esse Plantão ainda não têm Inscrições!'}
          />
        )}
      </View>
      {loading && <Spinner />}
      {showPagination && (
        <Pagination
          page={page}
          pageCount={data?.journeyCandidatures.pagination.pageCount || 1}
          onPageChange={setPage}
          disabled={loading}
        />
      )}
    </View>
  );
};

export default JourneyCandidaturesList;
