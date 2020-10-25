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

type IFormFields = 'name' | 'email' | 'cnpj' | 'password';

const CreateCompanyForm: React.FC<ICreateCompanyForm> = ({
  loading,
  onCreateCompany,
}) => {
  const [cnpj, setCnpj] = useState('');

  const form = {
    name: '',
    email: '',
    cnpj: '',
    password: '',
  };

  const handleCreateButton = (): void => {
    onCreateCompany(form);
  };

  const FormItem = (name: string, field: IFormFields): React.ReactElement => (
    <View>
      <Item floatingLabel style={{ marginTop: 24 }}>
        <Label style={{ color: Colors.success, fontWeight: '600' }}>
          {name}
        </Label>
        {field === 'cnpj' ? (
          <Input
            value={cnpj}
            onChangeText={(text) => {
              form.cnpj = MaskService.toMask('cnpj', text);
              setCnpj(MaskService.toMask('cnpj', text));
            }}
          />
        ) : (
          <Input
            autoCapitalize="none"
            onChangeText={(text) => (form[field] = text)}
          />
        )}
      </Item>
    </View>
  );

  return (
    <View>
      <Form>
        {FormItem('Nome Fantasia', 'name')}
        {FormItem('Email', 'email')}
        {FormItem('CNPJ', 'cnpj')}
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

export default CreateCompanyForm;
