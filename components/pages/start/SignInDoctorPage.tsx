import React, { useState } from 'react';
import { Container, Content, View, Text, H1 } from 'native-base';
import { FetchResult, useMutation } from '@apollo/client';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../../RootStackParamList';
import SignInDoctorForm, { IForm } from '../../sign-in-forms/SignInDoctorForm';
import SignInDoctor, { Result } from '../../../graphql/mutations/SignInDoctor';
import useUser, { User } from '../../../utils/useUser';
import navigateToHome from '../../../utils/useHome';
import showError from '../../../utils/showError';

interface ISignInDoctorPage {
  navigation: StackNavigationProp<RootStackParamList, 'Register'>;
}

const SignInDoctorPage: React.FC<ISignInDoctorPage> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [sigInDoctor] = useMutation(SignInDoctor);
  const { saveUser } = useUser();

  const handleSignInDoctor = (form: IForm): void => {
    setLoading(true);
    const { crm, password } = form;
    const hasError = validateForm(crm, password);
    if (!hasError) {
      sigInDoctor({ variables: { crm, password } })
        .then((result: FetchResult<Result>) => {
          const errors = result.data?.signInDoctor.errors;
          const token = result.data?.signInDoctor.token || '';
          if (errors) {
            showError(`Erro: ${errors}`);
            setLoading(false);
          } else {
            const user: User = { token, type: 'Doctor' };
            saveUser(user);
            navigateToHome(user, navigation);
          }
        })
        .catch(() => {
          showError('Erro: Ops, algo deu errado!');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const validateForm = (crm: string, password: string): boolean => {
    return validateField(crm, 'o CRM') || validateField(password, 'a Senha');
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
            Preencha suas informações pessoais.
          </Text>
          <Text style={{ marginTop: 20, fontWeight: '600' }}>
            Todas as informações são obrigatórias
          </Text>
        </View>
        <SignInDoctorForm
          loading={loading}
          onSignInDoctor={handleSignInDoctor}
        />
      </Content>
    </Container>
  );
};

export default SignInDoctorPage;
