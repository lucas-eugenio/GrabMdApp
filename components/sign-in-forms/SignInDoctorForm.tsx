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

  const FormItem = (
    name: string,
    setState: (text: string) => void,
  ): React.ReactElement => (
    <View>
      <Item floatingLabel style={{ marginTop: 24 }}>
        <Label style={{ color: Colors.success, fontWeight: '600' }}>
          {name}
        </Label>
        <Input autoCapitalize="none" onChangeText={(text) => setState(text)} />
      </Item>
    </View>
  );

  return (
    <View>
      <Form>
        {FormItem('CRM', setCrm)}
        {FormItem('Senha', setPassword)}
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
