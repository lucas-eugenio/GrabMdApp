import React, { useState } from 'react';
import { Button, Form, Icon, Spinner, Text, View } from 'native-base';
import { FormItem } from '../form-items/FormItems';

interface ICreateDoctorForm {
  loading: boolean;
  onCreateDoctor: (form: IForm) => void;
}

export interface IForm {
  name: string;
  email: string;
  crm: string;
  password: string;
}

const CreateDoctorForm: React.FC<ICreateDoctorForm> = ({
  loading,
  onCreateDoctor,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [crm, setCrm] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateButton = (): void => {
    onCreateDoctor({ name, email, crm, password });
  };

  return (
    <View>
      <Form>
        {FormItem('Nome Completo:', setName)}
        {FormItem('Email:', setEmail)}
        {FormItem('CRM:', setCrm)}
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

export default CreateDoctorForm;
