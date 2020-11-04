import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../../RootStackParamList';
import { Button, Container, Content, Icon, Text, View, H1 } from 'native-base';
import { LargeIcon } from '../../icons/Icons';

interface ILoginPage {
  navigation: StackNavigationProp<RootStackParamList, 'Register'>;
}

const LoginPage: React.FC<ILoginPage> = ({ navigation }) => {
  return (
    <Container>
      <Content padder>
        <View style={{ alignItems: 'center' }}>
          <H1>Bem vindo ao GrabMD!</H1>
          <Text style={{ marginTop: 8, textAlign: 'center' }}>
            Você é um Médico, representa uma Empresa ou um Gestor de Vagas?
          </Text>
        </View>
        <LargeIcon />
        <View>
          <Button
            success
            large
            iconLeft
            style={{ marginTop: 40, alignSelf: 'center' }}
            onPress={() => navigation.navigate('SignInDoctor')}>
            <Icon type="FontAwesome" name="user-md" />
            <Text>Autenticar Médico</Text>
          </Button>
          <Button
            light
            large
            bordered
            iconLeft
            style={{ marginTop: 12, alignSelf: 'center' }}
            onPress={() => navigation.navigate('SignInManager')}>
            <Icon type="FontAwesome5" name="id-card-alt" />
            <Text>Autenticar Gestor</Text>
          </Button>
          <Button
            success
            large
            bordered
            iconLeft
            style={{ marginTop: 12, alignSelf: 'center' }}
            onPress={() => navigation.navigate('SignInCompany')}>
            <Icon type="FontAwesome5" name="hospital" />
            <Text>Autenticar Empresa</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default LoginPage;
