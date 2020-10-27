import React from 'react';
import { Container, Content, Text, View, H1, Button, Icon } from 'native-base';
import JourneyList from '../../journeys-list/JourneyList';
import {
  NavigationHelpers,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import RootStackParamList from '../../../RootStackParamList';

interface IJourneysPage {
  route: RouteProp<RootStackParamList, 'JourneysList'>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const JourneysPage: React.FC<IJourneysPage> = ({ route, navigation }) => {
  return (
    <Container>
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
            <Icon type="FontAwesome" name="plus" />
            <Text>Adicionar</Text>
          </Button>
        </View>
        <JourneyList />
      </Content>
    </Container>
  );
};

export default JourneysPage;
