import React, { useState } from 'react';
import { Container, Content, View, Toast, Text, H1 } from 'native-base';
import { useMutation } from '@apollo/client';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../../RootStackParamList';
import SignInDoctorForm, { IForm } from '../../sign-in-forms/SignInDoctorForm';
import SignInDoctor from '../../../graphql/mutations/SignInDoctor';
import useToken from '../../../utils/useToken';

interface ISignInDoctorPage {
  navigation: StackNavigationProp<RootStackParamList, 'Register'>;
}

const SignInDoctorPage: React.FC<ISignInDoctorPage> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [sigInDoctor] = useMutation(SignInDoctor);
  const { saveToken } = useToken();

  const handleSignInDoctor = (form: IForm): void => {
    navigation.reset({ index: 0, routes: [{ name: 'DoctorHome' }] });
  };

  // const handleSignInDoctor = (form: IForm): void => {
  //   setLoading(true);
  //   const { crm, password } = form;
  //   const hasError = validateForm(crm, password);
  //   if (!hasError) {
  //     sigInDoctor({ variables: { crm, password } })
  //       .then((result) => {
  //         const { errors, token } = result.data.signInDoctor;
  //         if (errors) {
  //           Toast.show({
  //             text: `Erro: ${errors}`,
  //             type: 'danger',
  //           });
  //           setLoading(false);
  //         } else {
  //           saveToken(token);
  //           navigation.navigate('DoctorHomePage');
  //         }
  //       })
  //       .catch(() => {
  //         Toast.show({
  //           text: 'Erro: Por favor, confirme seus dados',
  //           type: 'danger',
  //         });
  //         setLoading(false);
  //       });
  //   } else {
  //     setLoading(false);
  //   }
  // };

  const validateForm = (crm: string, password: string): boolean => {
    return validateField(crm, 'o CRM') || validateField(password, 'a Senha');
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
        <SignInDoctorForm
          loading={loading}
          onSignInDoctor={handleSignInDoctor}
        />
      </Content>
    </Container>
  );
};

export default SignInDoctorPage;
