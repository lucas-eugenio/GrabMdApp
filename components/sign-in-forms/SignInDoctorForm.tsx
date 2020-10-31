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
import { FormItem } from '../form-items/FormItems';

interface ISignInDoctorForm {
  loading: boolean;
  onSignInDoctor: (form: IForm) => void;
}

export interface IForm {
  crm: string;
  password: string;
}

const SignInDoctorForm: React.FC<ISignInDoctorForm> = ({
  loading,
  onSignInDoctor,
}) => {
  const [crm, setCrm] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateButton = (): void => {
    onSignInDoctor({ crm, password });
  };

  return (
    <View>
      <Form>
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
          <Icon type="FontAwesome" name="sign-in" />
          <Text>Entrar</Text>
        </Button>
      </View>
    </View>
  );
};

export default SignInDoctorForm;
