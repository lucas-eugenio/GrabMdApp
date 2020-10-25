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
} from 'native-base';
import { RouteProp } from '@react-navigation/native';
import useToken from '../../../utils/useToken';

interface IHomePage {
  navigation: StackNavigationProp<RootStackParamList, 'Start'>;
  route: RouteProp<RootStackParamList, 'Start'>;
}

const StartPage: React.FC<IHomePage> = ({ navigation, route }) => {
  const { token, loading, resetToken } = useToken();

  useEffect(() => {
    route.params?.createdDoctor &&
      Toast.show({ text: 'Sucesso: Médico Criado', type: 'success' });
    route.params?.createdCompany &&
      Toast.show({ text: 'Sucesso: Empresa Criada', type: 'success' });
    route.params?.deleteToken && resetToken();
  }, [route]);

  // TODO: Remove This
  useEffect(() => {
    !token && Toast.show({ text: 'Não tem Token', type: 'danger' });
    token && Toast.show({ text: 'Tem Token', type: 'success' });
  }, [loading]);

  return (
    <Container>
      <Content padder>
        <View style={{ alignItems: 'center' }}>
          <H1>Bem vindo ao GrabMD!</H1>
          <Text style={{ marginTop: 8, textAlign: 'center' }}>
            Faça login ou cadastre-se para usar
          </Text>
        </View>
        <View>
          <Button
            success
            large
            iconLeft
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
