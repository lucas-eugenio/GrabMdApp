import React, { useState } from 'react';
import { Button, Form, Icon, Spinner, Text, View } from 'native-base';
import { FormItem, FormItemWithoutInput } from '../form-items/FormItems';
import { MaskedInput } from '../form-items/Inputs';

interface ICreateManagerForm {
  loading: boolean;
  onCreateManager: (form: IForm) => void;
}

export interface IForm {
  name: string;
  email: string;
  cpf: string;
  password: string;
}

const CreateManagerForm: React.FC<ICreateManagerForm> = ({
  loading,
  onCreateManager,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateButton = (): void => {
    onCreateManager({ name, email, cpf, password });
  };

  return (
    <View>
      <Form>
        {FormItem('Nome Completo:', setName)}
        {FormItem('Email:', setEmail)}
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
          <Icon type="FontAwesome" name="save" />
          <Text>Criar</Text>
        </Button>
      </View>
    </View>
  );
};

export default CreateManagerForm;
