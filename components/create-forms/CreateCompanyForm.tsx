import React, { useState } from 'react';
import { Button, Form, Icon, Spinner, Text, View } from 'native-base';
import { FormItem, FormItemWithoutInput } from '../form-items/FormItems';
import { MaskedInput } from '../form-items/Inputs';

interface ICreateCompanyForm {
  loading: boolean;
  onCreateCompany: (form: IForm) => void;
}

export interface IForm {
  name: string;
  email: string;
  cnpj: string;
  password: string;
}

const CreateCompanyForm: React.FC<ICreateCompanyForm> = ({
  loading,
  onCreateCompany,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateButton = (): void => {
    onCreateCompany({ name, email, cnpj, password });
  };

  return (
    <View>
      <Form>
        {FormItem('Nome Fantasia:', setName)}
        {FormItem('Email:', setEmail)}
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
          <Icon type="FontAwesome" name="save" />
          <Text>Criar</Text>
        </Button>
      </View>
    </View>
  );
};

export default CreateCompanyForm;
