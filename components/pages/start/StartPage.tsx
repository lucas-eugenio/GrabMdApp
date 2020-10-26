import React, { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../../RootStackParamList';
import {
  Button,
  Container,
  Content,
  Icon,
  Text,
  Toast,
  View,
  H1,
  Spinner,
} from 'native-base';
import { RouteProp } from '@react-navigation/native';
import useUser from '../../../utils/useUser';
import navigateToHome from '../../../utils/useHome';

interface IHomePage {
  navigation: StackNavigationProp<RootStackParamList, 'Start'>;
  route: RouteProp<RootStackParamList, 'Start'>;
}

const StartPage: React.FC<IHomePage> = ({ navigation, route }) => {
  const { user, loading, logout } = useUser();

  const showToast = (text: string) => Toast.show({ text, type: 'success' });

  useEffect(() => {
    route.params?.createdDoctor && showToast('Sucesso: Médico Criado');
    route.params?.createdCompany && showToast('Sucesso: Empresa Criada');
  }, [route]);

  useEffect(() => {
    if (!route.params?.logout) {
      user && navigateToHome(user, navigation);
    } else {
      logout();
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
