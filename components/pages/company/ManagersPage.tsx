import React, { useEffect, useState } from 'react';
import { Container, Content, View, H1, Button, Text, Icon } from 'native-base';
import {
  NavigationHelpers,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import showSuccess from '../../../utils/showSuccess';
import ManagersList from '../../managers-list/ManagersList';
import RootStackParamList from '../../../RootStackParamList';
import Header from '../../header/Header';

interface ICompanyManagersPage {
  route: RouteProp<RootStackParamList, 'ManagersList'>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const ManagersPage: React.FC<ICompanyManagersPage> = ({
  route,
  navigation,
}) => {
  const [doRefetch, setDoRefetch] = useState(false);

  const onCreateManager = () => {
    setDoRefetch(true);
    showSuccess('Sucesso: Gestor Criado');
    setTimeout(() => {
      setDoRefetch(false), 500;
    });
  };

  useEffect(() => {
    route.params?.createdManager && onCreateManager();
  }, [route]);

  return (
    <Container>
      <Header />
      <Content padder>
        <View>
          <H1>Gestores:</H1>
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            success
            iconLeft
            onPress={() => navigation.navigate('CreateManager')}
            style={{ alignSelf: 'flex-end' }}>
            <Icon type="FontAwesome" name="user-plus" />
            <Text>Adicionar</Text>
          </Button>
        </View>
        <ManagersList doRefetch={doRefetch} />
      </Content>
    </Container>
  );
};

export default ManagersPage;
