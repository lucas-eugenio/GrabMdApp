import React, { useEffect, useState } from 'react';
import { Card, CardItem, Spinner, Text, View } from 'native-base';
import ManagerCard from './ManagerCard';
import Pagination from '../pagination/Pagination';
import useUser from '../../utils/useUser';
import { useQuery } from '@apollo/client';
import MyManagers, { Result } from '../../graphql/queries/MyManagers';
import showError from '../../utils/showError';
import Colors from '../../Colors';

interface IManagersList {
  doRefetch: boolean;
}

const ManagersList: React.FC<IManagersList> = ({ doRefetch }) => {
  const [page, setPage] = useState(1);

  const token = useUser().user?.token;

  const { data, loading, error, refetch } = useQuery<Result>(MyManagers, {
    variables: { token, page },
  });

  useEffect(() => {
    refetch();
  }, [doRefetch]);

  const errors = data?.myManagers.errors;
  errors && showError(`Erro: ${errors}`);

  const managers = data?.myManagers.managers;

  const hasManagers = managers && managers.length > 0;
  const showPagination = hasManagers && !error && !errors;
  const hasError = error || errors;

  return (
    <View>
      <View style={{ marginTop: 10, marginBottom: 30 }}>
        {hasManagers ? (
          <View>
            {managers?.map((manager) => (
              <ManagerCard
                key={manager.id}
                name={manager.name}
                email={manager.email}
                cpf={manager.cpf}
              />
            ))}
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
                      Sua Empresa ainda não tem um Gestor!
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
          pageCount={data?.myManagers.pagination.pageCount || 1}
          onPageChange={setPage}
          disabled={loading}
        />
      )}
    </View>
  );
};

export default ManagersList;
