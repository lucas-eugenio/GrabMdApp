import React, { useEffect, useState } from 'react';
import { Spinner, View } from 'native-base';
import Pagination from '../pagination/Pagination';
import useUser from '../../utils/useUser';
import { useQuery } from '@apollo/client';
import showError from '../../utils/showError';
import FindJourneys, {
  Result,
  Variables,
} from '../../graphql/queries/FindJourneys';
import JourneyCard from './JourneyCard';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { IForm } from '../filter-forms/FilterJouneysForm';
import EmptyAndError from '../empty-and-error/EmptyAndError';

interface IJourneysList {
  doRefetch: boolean;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  filter: IForm;
}

const FindJourneysList: React.FC<IJourneysList> = ({
  doRefetch,
  navigation,
  filter,
}) => {
  const [page, setPage] = useState(1);

  const token = useUser().user?.token;

  const variables: Variables = { token, page };

  if (!!filter) {
    const {
      startDate,
      endDate,
      endPaymentDate,
      wage,
      address,
      paymentMethod,
      providesPpe,
      hireEntity,
    } = filter;
    variables.startDate = startDate;
    variables.endDate = endDate;
    variables.endPaymentDate = endPaymentDate;
    variables.wage = wage;
    variables.address = address;
    variables.paymentMethod = paymentMethod;
    variables.providesPpe = providesPpe;
    variables.hireEntity = hireEntity;
  }

  const { data, loading, error, refetch } = useQuery<Result>(FindJourneys, {
    variables,
  });

  useEffect(() => {
    refetch();
  }, [doRefetch]);

  const errors = data?.findJourneys.errors;
  errors && showError(`Erro: ${errors}`);

  const journeys = data?.findJourneys.journeys;

  const hasJourneys = journeys && journeys.length > 0;
  const showPagination = hasJourneys && !error && !errors;
  const hasError = !!error || !!errors;

  return (
    <View>
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        {hasJourneys ? (
          <View>
            {journeys?.map((journey) => {
              const handleShowDetails = (): void => {
                navigation.navigate('CreateCandidature', { journey: journey });
              };

              const handleShowCompanyDetails = (): void => {
                navigation.navigate('CompanyProfile', {
                  companyId: journey.company.id,
                });
              };

              return (
                <JourneyCard
                  key={journey.id}
                  journey={journey}
                  onShowDetails={handleShowDetails}
                  onShowCompanyDetails={handleShowCompanyDetails}
                />
              );
            })}
          </View>
        ) : (
          <EmptyAndError
            isLoading={loading}
            hasError={hasError}
            emptyMessage="Não existe Plantão para esses filtros!"
          />
        )}
      </View>
      {loading && <Spinner />}
      {showPagination && (
        <Pagination
          page={page}
          pageCount={data?.findJourneys.pagination.pageCount || 1}
          onPageChange={setPage}
          disabled={loading}
        />
      )}
    </View>
  );
};

export default FindJourneysList;
