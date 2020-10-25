import React from 'react';
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
  onSignInDoctor: (form: IForm) => void;
}

export interface IForm {
  crm: string;
  password: string;
}

type IFormFields = 'crm' | 'password';

const SignInDoctorForm: React.FC<ICreateDoctorForm> = ({
  loading,
  onSignInDoctor,
}) => {
  const form = {
    crm: '',
    password: '',
  };

  const handleCreateButton = (): void => {
    onSignInDoctor(form);
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
          <Icon type="FontAwesome" name="sign-in" />
          <Text>Entrar</Text>
        </Button>
      </View>
    </View>
  );
};

export default SignInDoctorForm;
