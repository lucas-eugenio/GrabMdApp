import React, { useState } from 'react';
import { Container, Content, View, Text, H1 } from 'native-base';
import { FetchResult, useMutation } from '@apollo/client';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../../RootStackParamList';
import useUser, { User } from '../../../utils/useUser';
import navigateToHome from '../../../utils/useHome';
import showError from '../../../utils/showError';
import SignInManagerForm, {
  IForm,
} from '../../sign-in-forms/SignInManagerForm';
import SignInManager, {
  Result,
} from '../../../graphql/mutations/SignInManager';

interface ISignInManagerPage {
  navigation: StackNavigationProp<RootStackParamList, 'Register'>;
}

const SignInManagerPage: React.FC<ISignInManagerPage> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [sigInCompany] = useMutation(SignInManager);
  const { saveUser } = useUser();

  const handleSignInManager = (form: IForm): void => {
    setLoading(true);
    const { cpf, password } = form;
    const hasError = validateForm(cpf, password);
    if (!hasError) {
      sigInCompany({ variables: { cpf, password } })
        .then((result: FetchResult<Result>) => {
          const errors = result.data?.signInManager.errors;
          const token = result.data?.signInManager.token || '';
          if (errors) {
            showError(`Erro: ${errors}`);
            setLoading(false);
          } else {
            const user: User = { token, type: 'Manager' };
            saveUser(user);
            navigateToHome(user, navigation);
          }
        })
        .catch((error) => {
          showError('Erro: Ops, algo deu errado!');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const validateForm = (cpf: string, password: string): boolean => {
    return validateField(cpf, 'o CPF') || validateField(password, 'a Senha');
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
          <H1>Bem vindo ao GrabMD!</H1>
          <Text style={{ marginTop: 8, textAlign: 'center' }}>
            Preencha suas informações pessoais
          </Text>
          <Text style={{ marginTop: 20, fontWeight: '600' }}>
            Todas as informações são obrigatórias
          </Text>
        </View>
        <SignInManagerForm
          loading={loading}
          onSignInManager={handleSignInManager}
        />
      </Content>
    </Container>
  );
};

export default SignInManagerPage;
