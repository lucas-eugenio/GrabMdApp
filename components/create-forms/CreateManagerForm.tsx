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

type IFormFields = 'name' | 'email' | 'cpf' | 'password';

const CreateManagerForm: React.FC<ICreateManagerForm> = ({
  loading,
  onCreateManager,
}) => {
  const [cpf, setCpf] = useState('');

  const form = {
    name: '',
    email: '',
    cpf: '',
    password: '',
  };

  const handleCreateButton = (): void => {
    onCreateManager(form);
  };

  const FormItem = (name: string, field: IFormFields): React.ReactElement => (
    <View>
      <Item floatingLabel style={{ marginTop: 24 }}>
        <Label style={{ color: Colors.success, fontWeight: '600' }}>
          {name}
        </Label>
        {field === 'cpf' ? (
          <Input
            value={cpf}
            onChangeText={(text) => {
              form.cpf = MaskService.toMask('cpf', text);
              setCpf(MaskService.toMask('cpf', text));
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
        {FormItem('Nome Completo', 'name')}
        {FormItem('Email', 'email')}
        {FormItem('CPF', 'cpf')}
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

export default CreateManagerForm;
