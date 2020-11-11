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
import UpdateCompanyProfile, {
  Result as URes,
  Variables as UVar,
} from '../../graphql/mutations/UpdateCompanyProfile';
import showSuccess from '../../utils/showSuccess';

const MyCompanyDetailsForm: React.FC = () => {
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');

  const token = useUser().user?.token;

  const { data, loading, error, refetch } = useQuery<Result, Variables>(
    MyProfile,
    { variables: { token } },
  );

  useEffect(() => {
    setAddress(data?.myProfile.company?.address || '');
    setDescription(data?.myProfile.company?.description || '');
    setPhone(data?.myProfile.company?.phone || '');
  }, [data]);

  const errors = data?.myProfile.errors;
  errors && showError(`Erro: ${errors}`);

  const company = data?.myProfile.company;
  const hasError = !!error || !!errors;

  const [updateCompanyProfile] = useMutation<URes, UVar>(UpdateCompanyProfile);

  const handleSaveButton = () => {
    updateCompanyProfile({
      variables: { token, address, description, phone },
    })
      .then((result) => {
        const errors = result.data?.updateCompanyProfile.errors;
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
        {!!company && (
          <Fragment>
            {ReadOnlyFormItem('Nome', company.name)}
            {ReadOnlyFormItem('CNPJ:', company.cnpj)}
            {ReadOnlyFormItem('Email:', company.email)}
            {FormItemWithoutInput(
              'CEP:',
              MaskedInput(address, 'zip-code', setAddress),
            )}
            {FormItemWithoutInput(
              'Telefone:',
              MaskedInput(phone, 'cel-phone', setPhone),
            )}
            {TextAreaFormItem('Descrição:', description, setDescription)}
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

export default MyCompanyDetailsForm;
