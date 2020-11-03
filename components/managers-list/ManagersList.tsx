import React, { useEffect, useState } from 'react';
import { Spinner, View } from 'native-base';
import ManagerCard from './ManagerCard';
import Pagination from '../pagination/Pagination';
import useUser from '../../utils/useUser';
import { useQuery } from '@apollo/client';
import MyManagers, { Result } from '../../graphql/queries/MyManagers';
import showError from '../../utils/showError';
import EmptyAndError from '../empty-and-error/EmptyAndError';

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
  const hasError = !!error || !!errors;

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
          <EmptyAndError
            isLoading={loading}
            hasError={hasError}
            emptyMessage="Sua Empresa ainda não tem um Gestor!"
          />
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
