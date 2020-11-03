import React, { useEffect, useState } from 'react';
import { Spinner, View } from 'native-base';
import Pagination from '../pagination/Pagination';
import useUser from '../../utils/useUser';
import { useQuery } from '@apollo/client';
import showError from '../../utils/showError';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import MyCandidatures, { Result } from '../../graphql/queries/MyCandidatures';
import CandidatureCard from './CandidatureCard';
import EmptyAndError from '../empty-and-error/EmptyAndError';

interface IMyCandidaturesList {
  doRefetch: boolean;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const MyCandidaturesList: React.FC<IMyCandidaturesList> = ({
  doRefetch,
  navigation,
}) => {
  const [page, setPage] = useState(1);

  const token = useUser().user?.token;

  const { data, loading, error, refetch } = useQuery<Result>(MyCandidatures, {
    variables: { token, page },
  });

  useEffect(() => {
    refetch();
  }, [doRefetch]);

  const errors = data?.myCandidatures.errors;
  errors && showError(`Erro: ${errors}`);

  const candidatures = data?.myCandidatures.candidatures;

  const hasCandidature = candidatures && candidatures.length > 0;
  const showPagination = hasCandidature && !error && !errors;
  const hasError = !!error || !!errors;

  return (
    <View>
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        {hasCandidature ? (
          <View>
            {candidatures?.map((candidature) => {
              const handleShowDetails = (): void => {
                navigation.navigate('CandidatureDetails', { candidature });
              };
              return (
                <CandidatureCard
                  key={candidature.id}
                  candidature={candidature}
                  onShowDetails={handleShowDetails}
                />
              );
            })}
          </View>
        ) : (
          <EmptyAndError
            isLoading={loading}
            hasError={hasError}
            emptyMessage={'Você ainda não se Inscreveu para um Plantão!'}
          />
        )}
      </View>
      {loading && <Spinner />}
      {showPagination && (
        <Pagination
          page={page}
          pageCount={data?.myCandidatures.pagination.pageCount || 1}
          onPageChange={setPage}
          disabled={loading}
        />
      )}
    </View>
  );
};

export default MyCandidaturesList;
