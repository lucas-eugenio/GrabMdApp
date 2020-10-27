import React, { useState } from 'react';
import { Container, Content, Text, View } from 'native-base';
import CreateManagerForm, { IForm } from '../../create-forms/CreateManagerForm';
import { FetchResult, useMutation } from '@apollo/client';
import CreateManager, {
  Result,
} from '../../../graphql/mutations/CreateManager';
import showError from '../../../utils/showError';
import useUser from '../../../utils/useUser';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../../RootStackParamList';

interface ICompanyCreateManagerPage {
  navigation: StackNavigationProp<RootStackParamList, 'ManagersList'>;
}

const CreateManagerPage: React.FC<ICompanyCreateManagerPage> = ({
  navigation,
}) => {
  const [loading, setLoading] = useState(false);

  const [createManager] = useMutation(CreateManager);

  const token = useUser().user?.token;

  const handleCreateManager = (form: IForm): void => {
    setLoading(true);
    const { name, email, cpf, password } = form;
    const hasError = validateForm(name, email, cpf, password);
    if (!hasError) {
      createManager({ variables: { token, name, email, cpf, password } })
        .then((result: FetchResult<Result>) => {
          const errors = result.data?.createManager.errors;
          if (errors) {
            showError(`Erro: ${errors}`);
            setLoading(false);
          } else {
            navigation.navigate('ManagersList', {
              createdManager: true,
            });
          }
        })
        .catch(() => {
          showError('Erro: Por favor, confirme os dados');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const validateForm = (
    name: string,
    email: string,
    cpf: string,
    password: string,
  ): boolean => {
    return (
      validateField(name, 'o nome') ||
      validateField(email, 'o email') ||
      validateField(cpf, 'o CPF') ||
      validateField(password, 'a Senha')
    );
  };

  const validateField = (field: string, message: string): boolean => {
    if (!field) {
      showError(`Erro: Por favor, preencha ${message}`);
      return true;
    }
    return false;
  };

  return (
    <Container>
      <Content padder>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ marginTop: 8, textAlign: 'center' }}>
            Preencha as informações do Gestor
          </Text>
          <Text style={{ marginTop: 20, fontWeight: '600' }}>
            Todas as informações são obrigatórias
          </Text>
        </View>
        <CreateManagerForm
          loading={loading}
          onCreateManager={handleCreateManager}
        />
      </Content>
    </Container>
  );
};

export default CreateManagerPage;
