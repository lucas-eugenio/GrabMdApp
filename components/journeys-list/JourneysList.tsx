import React, { useEffect, useState } from 'react';
import { Card, CardItem, Spinner, Text, View } from 'native-base';
import Pagination from '../pagination/Pagination';
import useUser from '../../utils/useUser';
import { useQuery } from '@apollo/client';
import showError from '../../utils/showError';
import Colors from '../../Colors';
import MyJourneys, { Result } from '../../graphql/queries/MyJourneys';
import JourneyCard from './JourneyCard';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

interface IJourneysList {
  doRefetch: boolean;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const JourneysList: React.FC<IJourneysList> = ({ doRefetch, navigation }) => {
  const [page, setPage] = useState(1);

  const token = useUser().user?.token;

  const { data, loading, error, refetch } = useQuery<Result>(MyJourneys, {
    variables: { token, page },
  });

  useEffect(() => {
    refetch();
  }, [doRefetch]);

  const errors = data?.myJourneys.errors;
  errors && showError(`Erro: ${errors}`);

  const journeys = data?.myJourneys.journeys;

  const hasJourneys = journeys && journeys.length > 0;
  const showPagination = hasJourneys && !error && !errors;
  const hasError = error || errors;

  return (
    <View>
      <View style={{ marginTop: 30, marginBottom: 30 }}>
        {hasJourneys ? (
          <View>
            {journeys?.map((journey) => {
              const handleShowDetails = (): void => {
                navigation.navigate('JourneyDetails', { journey });
              };

              return (
                <JourneyCard
                  key={journey.id}
                  journey={journey}
                  onShowDetails={handleShowDetails}
                />
              );
            })}
          </View>
        ) : (
          <Card>
            <CardItem style={{ justifyContent: 'center' }}>
              {!loading && (
                <View>
                  {hasError ? (
                    <Text
                      style={{
                        color: Colors.danger,
                        fontWeight: '600',
                      }}>
                      Ops! Algo deu errado.
                    </Text>
                  ) : (
                    <Text
                      style={{
                        color: Colors.success,
                        fontWeight: '600',
                      }}>
                      Sua Empresa ainda não tem um Plantão!
                    </Text>
                  )}
                </View>
              )}
            </CardItem>
          </Card>
        )}
      </View>
      {loading && <Spinner />}
      {showPagination && (
        <Pagination
          page={page}
          pageCount={data?.myJourneys.pagination.pageCount || 1}
          onPageChange={setPage}
          disabled={loading}
        />
      )}
    </View>
  );
};

export default JourneysList;
