import React, { useState } from 'react';
import { Container, Content, View, Toast, Text } from 'native-base';
import { BodyText, H1 } from '../typography/Typography';
import CreateDoctorForm, { IForm } from '../create-forms/CreateDoctorForm';
import CreateDoctor from '../../graphql/mutations/CreateDoctor.gql';
import { useMutation } from '@apollo/client';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../RootStackParamList';

interface ICreateDoctorPage {
  navigation: StackNavigationProp<RootStackParamList, 'Register'>;
}

const CreateDoctorPage: React.FC<ICreateDoctorPage> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [createDoctor] = useMutation(CreateDoctor);

  const handleCreateDoctor = (form: IForm): void => {
    setLoading(true);
    const { name, email, crm, password } = form;
    const hasError = validateForm(name, email, crm, password);
    if (!hasError) {
      createDoctor({ variables: { name, email, crm, password } })
        .then(() => {
          navigation.navigate('Home', { createdDoctor: true });
        })
        .catch(() => {
          Toast.show({
            text: 'Erro: Por favor, confirme seus dados',
            type: 'danger',
          });
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const validateForm = (
    name: string,
    email: string,
    crm: string,
    password: string,
  ): boolean => {
    return (
      validateField(name, 'o nome') ||
      validateField(email, 'o email') ||
      validateField(crm, 'o CRM') ||
      validateField(password, 'a Senha')
    );
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
          <BodyText>Preencha suas informações pessoais.</BodyText>
          <Text style={{ marginTop: 20, fontSize: 14 }}>
            Todas as informações são obrigatórias!
          </Text>
        </View>
        <CreateDoctorForm
          loading={loading}
          onCreateDoctor={handleCreateDoctor}
        />
      </Content>
    </Container>
  );
};

export default CreateDoctorPage;
