import React, { useState } from 'react';
import { Container, Content, View, Text, H1 } from 'native-base';
import CreateDoctorForm, { IForm } from '../../create-forms/CreateDoctorForm';
import CreateDoctor, { Result } from '../../../graphql/mutations/CreateDoctor';
import { FetchResult, useMutation } from '@apollo/client';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../../RootStackParamList';
import showError from '../../../utils/showError';

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
        .then((result: FetchResult<Result>) => {
          const errors = result.data?.createDoctor.errors;
          if (errors) {
            showError(`Erro: ${errors}`);
            setLoading(false);
          } else {
            navigation.navigate('Start', { createdDoctor: true });
          }
        })
        .catch(() => {
          showError('Erro: Por favor, confirme seus dados');
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
        <CreateDoctorForm
          loading={loading}
          onCreateDoctor={handleCreateDoctor}
        />
      </Content>
    </Container>
  );
};

export default CreateDoctorPage;
