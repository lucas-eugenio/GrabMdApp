import React, { useState } from 'react';
import {
  Button,
  Form,
  Icon,
  Input,
  Item,
  Label,
  Spinner,
  Text,
  View,
} from 'native-base';
import Colors from '../../Colors';

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

type IFormFields = 'name' | 'email' | 'crm' | 'password';

const CreateDoctorForm: React.FC<ICreateDoctorForm> = ({
  loading,
  onCreateDoctor,
}) => {
  const [form] = useState<IForm>({
    name: '',
    email: '',
    crm: '',
    password: '',
  });

  const handleCreateButton = (): void => {
    onCreateDoctor(form);
  };

  const FormItem = (name: string, field: IFormFields): React.ReactElement => (
    <View>
      <Item floatingLabel style={{ marginTop: 24 }}>
        <Label style={{ color: Colors.success, fontWeight: '600' }}>
          {name}
        </Label>
        <Input
          autoCapitalize="none"
          onChangeText={(text) => (form[field] = text)}
        />
      </Item>
    </View>
  );

  return (
    <View>
      <Form>
        {FormItem('Nome Completo', 'name')}
        {FormItem('Email', 'email')}
        {FormItem('CRM', 'crm')}
        {FormItem('Senha', 'password')}
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
