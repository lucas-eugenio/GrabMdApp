import React, { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../RootStackParamList';
import {
  Button,
  Container,
  Content,
  Icon,
  Text,
  Toast,
  View,
} from 'native-base';
import { BodyText, H1 } from '../typography/Typography';
import { RouteProp } from '@react-navigation/native';

interface IHomePage {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
}

const HomePage: React.FC<IHomePage> = ({ navigation, route }) => {
  useEffect(() => {
    route.params?.createdDoctor &&
      Toast.show({ text: 'Sucesso: Médico Criado', type: 'success' });
  }, [route]);

  return (
    <Container>
      <Content padder>
        <View style={{ alignItems: 'center' }}>
          <H1>Bem vindo ao GrabMD!</H1>
          <BodyText>Faça login ou cadastre-se para usar.</BodyText>
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

export default HomePage;
