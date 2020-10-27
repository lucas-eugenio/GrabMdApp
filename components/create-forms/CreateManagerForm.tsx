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

  const FormItem = (
    name: string,
    setState: (text: string) => void,
    isCpf?: boolean,
  ): React.ReactElement => (
    <View>
      <Item floatingLabel style={{ marginTop: 24 }}>
        <Label style={{ color: Colors.success, fontWeight: '600' }}>
          {name}
        </Label>
        {isCpf ? (
          <Input
            value={cpf}
            onChangeText={(text) => {
              setState(MaskService.toMask('cpf', text));
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
        {FormItem('Nome Completo', setName)}
        {FormItem('Email', setEmail)}
        {FormItem('CPF', setCpf, true)}
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
          <Icon type="FontAwesome" name="save" />
          <Text>Criar</Text>
        </Button>
      </View>
    </View>
  );
};

export default CreateManagerForm;
