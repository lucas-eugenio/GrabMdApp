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
import DoctorProfile, {
  Result,
  Variables,
} from '../../graphql/queries/DoctorProfile';

interface IDoctorDetailsForm {
  doctorId: string;
}

const DoctorDetailsForm: React.FC<IDoctorDetailsForm> = ({ doctorId }) => {
  const token = useUser().user?.token;

  const { data, loading, error } = useQuery<Result, Variables>(DoctorProfile, {
    variables: { token, doctorId },
  });

  const errors = data?.doctorProfile.errors;
  errors && showError(`Erro: ${errors}`);

  const doctor = data?.doctorProfile.doctor;
  const hasError = !!error || !!errors;

  return (
    <View>
      <Form>
        {loading && <Spinner />}
        {!!doctor && (
          <Fragment>
            {ReadOnlyFormItem('Nome', doctor.name)}
            {ReadOnlyFormItem('CRM:', doctor.crm)}
            {ReadOnlyFormItem('Email:', doctor.email)}
            {ReadOnlyFormItem('Telefone:', doctor.phone)}
            {ReadOnlyTextAreaFormItem('Formação Acadêmica:', doctor.formation)}
            {ReadOnlyTextAreaFormItem(
              'Experiências Profissionais:',
              doctor.experiences,
            )}
          </Fragment>
        )}
        {hasError && <EmptyAndError isLoading={loading} hasError={true} />}
      </Form>
    </View>
  );
};

export default DoctorDetailsForm;
