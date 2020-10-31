import React, { useState } from 'react';
import { Button, Form, Icon, Spinner, Text, View } from 'native-base';
import { FormItem, FormItemWithoutInput } from '../form-items/FormItems';
import { MaskedInput } from '../form-items/Inputs';

interface ISignInCompanyForm {
  loading: boolean;
  onSignInCompany: (form: IForm) => void;
}

export interface IForm {
  cnpj: string;
  password: string;
}

const SignInCompanyForm: React.FC<ISignInCompanyForm> = ({
  loading,
  onSignInCompany,
}) => {
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateButton = (): void => {
    onSignInCompany({ cnpj, password });
  };

  return (
    <View>
      <Form>
        {FormItemWithoutInput('CNPJ:', MaskedInput(cnpj, 'cnpj', setCnpj))}
        {FormItem('Senha:', setPassword)}
      </Form>
      <View style={{ marginTop: 40, alignSelf: 'center' }}>
        {loading && <Spinner />}
        <Button
          success
          large
          iconLeft
          disabled={loading}
          onPress={handleCreateButton}>
          <Icon type="FontAwesome" name="sign-in" />
          <Text>Entrar</Text>
        </Button>
      </View>
    </View>
  );
};

export default SignInCompanyForm;
