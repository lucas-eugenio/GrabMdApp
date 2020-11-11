import React, { Fragment } from 'react';
import { Form, Spinner, View } from 'native-base';
import {
  ReadOnlyFormItem,
  ReadOnlyTextAreaFormItem,
} from '../form-items/FormItems';
import useUser from '../../utils/useUser';
import { useQuery } from '@apollo/client';
import showError from '../../utils/showError';
import EmptyAndError from '../empty-and-error/EmptyAndError';
import CompanyProfile, {
  Result,
  Variables,
} from '../../graphql/queries/CompanyProfile';

interface ICompanyDetailsForm {
  companyId: string;
}

const CompanyDetailsForm: React.FC<ICompanyDetailsForm> = ({ companyId }) => {
  const token = useUser().user?.token;

  const { data, loading, error } = useQuery<Result, Variables>(CompanyProfile, {
    variables: { token, companyId },
  });

  const errors = data?.companyProfile.errors;
  errors && showError(`Erro: ${errors}`);

  const company = data?.companyProfile.company;
  const hasError = !!error || !!errors;

  return (
    <View>
      <Form>
        {loading && <Spinner />}
        {!!company && (
          <Fragment>
            {ReadOnlyFormItem('Nome', company.name)}
            {ReadOnlyFormItem('CNPJ:', company.cnpj)}
            {ReadOnlyFormItem('Email:', company.email)}
            {ReadOnlyFormItem('CEP:', company.address)}
            {ReadOnlyFormItem('Telefone:', company.phone)}
            {ReadOnlyTextAreaFormItem('Descrição:', company.description)}
          </Fragment>
        )}
        {hasError && <EmptyAndError isLoading={loading} hasError={true} />}
      </Form>
    </View>
  );
};

export default CompanyDetailsForm;
