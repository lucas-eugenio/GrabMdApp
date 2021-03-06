import React, { useEffect, useState } from 'react';
import { Container, Content, Text, View, H1, Button, Icon } from 'native-base';
import JourneysList from '../../journeys-list/JourneysList';
import {
  NavigationHelpers,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import RootStackParamList from '../../../RootStackParamList';
import showSuccess from '../../../utils/showSuccess';
import Header from '../../header/Header';

interface IJourneysPage {
  route: RouteProp<RootStackParamList, 'JourneysList'>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const JourneysPage: React.FC<IJourneysPage> = ({ route, navigation }) => {
  const [doRefetch, setDoRefetch] = useState(false);

  const onAction = (text: string) => {
    setDoRefetch(true);
    showSuccess(text);
    setTimeout(() => {
      setDoRefetch(false), 500;
    });
  };

  useEffect(() => {
    route.params?.createdJourney && onAction('Sucesso: Plantão Criado');
    route.params?.acceptedJourney && onAction('Sucesso: Inscrição Aceita');
  }, [route]);

  return (
    <Container>
      <Header />
      <Content padder>
        <View>
          <H1>Plantões:</H1>
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            success
            iconLeft
            style={{ alignSelf: 'flex-end' }}
            onPress={() => navigation.navigate('CreateJourney')}>
            <Icon type="FontAwesome5" name="calendar-plus" />
            <Text>Marcar</Text>
          </Button>
        </View>
        <JourneysList doRefetch={doRefetch} navigation={navigation} />
      </Content>
    </Container>
  );
};

export default JourneysPage;
