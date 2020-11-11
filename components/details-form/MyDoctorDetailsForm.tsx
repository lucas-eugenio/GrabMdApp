import React, { Fragment, useEffect, useState } from 'react';
import { Button, Form, Icon, Spinner, Text, View } from 'native-base';
import {
  FormItemWithoutInput,
  ReadOnlyFormItem,
  TextAreaFormItem,
} from '../form-items/FormItems';
import useUser from '../../utils/useUser';
import { useMutation, useQuery } from '@apollo/client';
import MyProfile, { Result, Variables } from '../../graphql/queries/MyProfile';
import showError from '../../utils/showError';
import EmptyAndError from '../empty-and-error/EmptyAndError';
import { MaskedInput } from '../form-items/Inputs';
import UpdateDoctorProfile, {
  Result as URes,
  Variables as UVar,
} from '../../graphql/mutations/UpdateDoctorProfile';
import showSuccess from '../../utils/showSuccess';

const MyDoctorDetailsForm: React.FC = () => {
  const [formation, setFormation] = useState('');
  const [experiences, setExperiences] = useState('');
  const [phone, setPhone] = useState('');

  const token = useUser().user?.token;

  const { data, loading, error, refetch } = useQuery<Result, Variables>(
    MyProfile,
    { variables: { token } },
  );

  useEffect(() => {
    setFormation(data?.myProfile.doctor?.formation || '');
    setExperiences(data?.myProfile.doctor?.experiences || '');
    setPhone(data?.myProfile.doctor?.phone || '');
  }, [data]);

  const errors = data?.myProfile.errors;
  errors && showError(`Erro: ${errors}`);

  const doctor = data?.myProfile.doctor;
  const hasError = !!error || !!errors;

  const [updateCompanyProfile] = useMutation<URes, UVar>(UpdateDoctorProfile);

  const handleSaveButton = () => {
    updateCompanyProfile({
      variables: { token, formation, experiences, phone },
    })
      .then((result) => {
        const errors = result.data?.updateDoctorProfile.errors;
        if (!!errors) {
          showError(`Erro: ${errors}`);
        } else {
          showSuccess('Sucesso: Perfil Atualizado');
          refetch();
        }
      })
      .catch(() => {
        showError('Ops, Algo deu Errado!');
      });
  };

  return (
    <View>
      <Form>
        {loading && <Spinner />}
        {!!doctor && (
          <Fragment>
            {ReadOnlyFormItem('Nome', doctor.name)}
            {ReadOnlyFormItem('CRM:', doctor.crm)}
            {ReadOnlyFormItem('Email:', doctor.email)}
            {FormItemWithoutInput(
              'Telefone:',
              MaskedInput(phone, 'cel-phone', setPhone),
            )}
            {TextAreaFormItem('Formação Acadêmica:', formation, setFormation)}
            {TextAreaFormItem(
              'Experiências Profissionais:',
              experiences,
              setExperiences,
            )}
            <View style={{ marginTop: 40, alignSelf: 'center' }}>
              {loading && <Spinner />}
              <Button
                success
                large
                iconLeft
                disabled={loading}
                onPress={handleSaveButton}>
                <Icon type="FontAwesome" name="save" />
                <Text>Salvar</Text>
              </Button>
            </View>
          </Fragment>
        )}
        {hasError && <EmptyAndError isLoading={loading} hasError={true} />}
      </Form>
    </View>
  );
};

export default MyDoctorDetailsForm;
