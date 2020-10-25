import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../RootStackParamList';
import { Button, Container, Content, Icon, Text, View, H1 } from 'native-base';

interface IRegisterPage {
  navigation: StackNavigationProp<RootStackParamList, 'Register'>;
}

const RegisterPage: React.FC<IRegisterPage> = ({ navigation }) => {
  return (
    <Container>
      <Content padder>
        <View style={{ alignItems: 'center' }}>
          <H1>Bem vindo ao GrabMD!</H1>
          <Text style={{ marginTop: 8, textAlign: 'center' }}>
            Você é um Médico ou representa uma Empresa?
          </Text>
        </View>
        <View>
          <Button
            success
            large
            iconLeft
            style={{ marginTop: 40, alignSelf: 'center' }}
            onPress={() => navigation.navigate('CreateDoctor')}>
            <Icon type="FontAwesome" name="user-md" />
            <Text>Cadastrar Médico</Text>
          </Button>
          <Button
            success
            large
            bordered
            iconLeft
            style={{ marginTop: 12, alignSelf: 'center' }}
            onPress={() => navigation.navigate('CreateCompany')}>
            <Icon type="FontAwesome5" name="hospital" />
            <Text>Cadastrar Empresa</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default RegisterPage;
