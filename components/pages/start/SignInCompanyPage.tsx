import React, { useState } from 'react';
import { Container, Content, View, Toast, Text, H1 } from 'native-base';
import { useMutation } from '@apollo/client';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../../RootStackParamList';
import useUser, { User } from '../../../utils/useUser';
import navigateToHome from '../../../utils/useHome';
import SignInCompany, {
  Result,
} from '../../../graphql/mutations/SignInCompany';
import SignInCompanyForm, {
  IForm,
} from '../../sign-in-forms/SignInCompanyForm';

interface ISignInDoctorPage {
  navigation: StackNavigationProp<RootStackParamList, 'Register'>;
}

const SignInCompanyPage: React.FC<ISignInDoctorPage> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [sigInCompany] = useMutation(SignInCompany);
  const { saveUser } = useUser();

  const showError = (text: string) => Toast.show({ text, type: 'danger' });

  const handleSignInDoctor = (form: IForm): void => {
    setLoading(true);
    const { cnpj, password } = form;
    const hasError = validateForm(cnpj, password);
    if (!hasError) {
      sigInCompany({ variables: { cnpj, password } })
        .then((result) => {
          const { errors, token }: Result = result.data.signInCompany;
          if (errors) {
            showError(`Erro: ${errors}`);
            setLoading(false);
          } else {
            const user: User = { token, type: 'Company' };
            saveUser(user);
            navigateToHome(user, navigation);
          }
        })
        .catch((error) => {
          console.log(error);
          showError('Erro: Ops, algo deu errado!');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const validateForm = (cnpj: string, password: string): boolean => {
    console.log('CNPJ:', cnpj);
    return validateField(cnpj, 'o CNPJ') || validateField(password, 'a Senha');
  };

  const validateField = (field: string, message: string): boolean => {
    if (!field) {
      Toast.show({
        text: `Erro: Por favor, preencha ${message}`,
        type: 'danger',
      });
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
        <SignInCompanyForm
          loading={loading}
          onSignInCompany={handleSignInDoctor}
        />
      </Content>
    </Container>
  );
};

export default SignInCompanyPage;
