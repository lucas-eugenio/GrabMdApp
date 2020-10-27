import React, { useState } from 'react';
import { Container, Content, Text, View, H1 } from 'native-base';
import CreateCompanyForm, { IForm } from '../../create-forms/CreateCompanyForm';
import CreateCompany, {
  Result,
} from '../../../graphql/mutations/CreateCompany';
import { FetchResult, useMutation } from '@apollo/client';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../../RootStackParamList';
import showError from '../../../utils/showError';

interface ICreateDoctorPage {
  navigation: StackNavigationProp<RootStackParamList, 'Register'>;
}

const CreateCompanyPage: React.FC<ICreateDoctorPage> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [createCompany] = useMutation(CreateCompany);

  const handleCreateCompany = (form: IForm): void => {
    setLoading(true);
    const { name, email, cnpj, password } = form;
    const hasError = validateForm(name, email, cnpj, password);
    if (!hasError) {
      createCompany({ variables: { name, email, cnpj, password } })
        .then((result: FetchResult<Result>) => {
          const errors = result.data?.createCompany.errors;
          if (errors) {
            showError(`Erro: ${errors}`);
            setLoading(false);
          } else {
            navigation.navigate('Start', { createdCompany: true });
          }
        })
        .catch(() => {
          showError('Erro: Por favor, confirme os dados');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const validateForm = (
    name: string,
    email: string,
    cnpj: string,
    password: string,
  ): boolean => {
    return (
      validateField(name, 'o nome') ||
      validateField(email, 'o email') ||
      validateField(cnpj, 'o CNPJ') ||
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
            Preencha as informações da empresa
          </Text>
          <Text style={{ marginTop: 20, fontWeight: '600' }}>
            Todas as informações são obrigatórias
          </Text>
        </View>
        <CreateCompanyForm
          loading={loading}
          onCreateCompany={handleCreateCompany}
        />
      </Content>
    </Container>
  );
};

export default CreateCompanyPage;
