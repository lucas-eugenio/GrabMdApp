import React, { useState } from 'react';
import { Button, Form, Icon, Input, Spinner, Text, View } from 'native-base';
import { FormItem, FormItemWithoutInput } from '../form-items/FormItems';
import { MaskedInput } from '../form-items/Inputs';

interface ISignInManagerForm {
  loading: boolean;
  onSignInManager: (form: IForm) => void;
}

export interface IForm {
  cpf: string;
  password: string;
}

const SignInManagerForm: React.FC<ISignInManagerForm> = ({
  loading,
  onSignInManager,
}) => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateButton = (): void => {
    onSignInManager({ cpf, password });
  };

  return (
    <View>
      <Form>
        {FormItemWithoutInput('CPF:', MaskedInput(cpf, 'cpf', setCpf))}
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

export default SignInManagerForm;
