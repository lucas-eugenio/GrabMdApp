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
import { MaskService } from 'react-native-masked-text';

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

  const FormItem = (
    name: string,
    setState: (text: string) => void,
    isCnpj?: boolean,
  ): React.ReactElement => (
    <View>
      <Item floatingLabel style={{ marginTop: 24 }}>
        <Label style={{ color: Colors.success, fontWeight: '600' }}>
          {name}
        </Label>
        {isCnpj ? (
          <Input
            value={cnpj}
            onChangeText={(text) => {
              setState(MaskService.toMask('cnpj', text));
            }}
          />
        ) : (
          <Input
            autoCapitalize="none"
            onChangeText={(text) => setState(text)}
          />
        )}
      </Item>
    </View>
  );

  return (
    <View>
      <Form>
        {FormItem('CNPJ', setCnpj, true)}
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

export default SignInCompanyForm;
