import React, { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../../RootStackParamList';
import {
  Button,
  Container,
  Content,
  Icon,
  Text,
  View,
  H1,
  Spinner,
} from 'native-base';
import { RouteProp } from '@react-navigation/native';
import useUser from '../../../utils/useUser';
import navigateToHome from '../../../utils/useHome';
import showSuccess from '../../../utils/showSuccess';
import { LargeIcon } from '../../icons/Icons';

interface IHomePage {
  navigation: StackNavigationProp<RootStackParamList, 'Start'>;
  route: RouteProp<RootStackParamList, 'Start'>;
}

const StartPage: React.FC<IHomePage> = ({ navigation, route }) => {
  const { user, loading, logout } = useUser();

  useEffect(() => {
    route.params?.createdDoctor && showSuccess('Sucesso: Médico Criado');
    route.params?.createdCompany && showSuccess('Sucesso: Empresa Criada');
  }, [route]);

  useEffect(() => {
    if (route.params?.logout) {
      logout();
    } else {
      user && navigateToHome(user, navigation);
    }
  }, [loading, route]);

  return (
    <Container>
      <Content padder>
        <View style={{ alignItems: 'center' }}>
          <H1>Bem vindo ao GrabMD!</H1>
          <Text style={{ marginTop: 8, textAlign: 'center' }}>
            Faça login ou cadastre-se para usar
          </Text>
        </View>
        {loading && <Spinner />}
        <LargeIcon />
        <View>
          <Button
            success
            large
            iconLeft
            disabled={loading}
            style={{ marginTop: 40, alignSelf: 'center' }}
            onPress={() => navigation.navigate('Login')}>
            <Icon type="FontAwesome" name="sign-in" />
            <Text>Fazer Login</Text>
          </Button>
          <Button
            success
            large
            bordered
            iconLeft
            disabled={loading}
            style={{ marginTop: 12, alignSelf: 'center' }}
            onPress={() => navigation.navigate('Register')}>
            <Icon type="FontAwesome" name="user-plus" />
            <Text>Criar Conta</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default StartPage;
