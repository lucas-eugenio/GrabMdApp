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

interface ICompanyManagersPage {
  route: RouteProp<RootStackParamList, 'ManagersList'>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const ManagersPage: React.FC<ICompanyManagersPage> = ({
  route,
  navigation,
}) => {
  useEffect(() => {
    route.params?.createdManager && showSuccess('Sucesso: Gestor Criado');
  });

  return (
    <Container>
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
        <ManagersList />
      </Content>
    </Container>
  );
};

export default ManagersPage;
