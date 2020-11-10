import React from 'react';
import { Container, Content, View, H1 } from 'native-base';
import {
  NavigationHelpers,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import RootStackParamList from '../../../RootStackParamList';
import Header from '../../header/Header';
import JourneyCandidaturesList from '../../journey-candidatures-list/JourneyCandidaturesList';

interface IJourneyCandidaturesPage {
  route: RouteProp<RootStackParamList, 'JourneyCandidatures'>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const JourneyCandidaturesPage: React.FC<IJourneyCandidaturesPage> = ({
  route,
  navigation,
}) => {
  return (
    <Container>
      <Header />
      <Content padder>
        <View>
          <H1>Inscrições:</H1>
        </View>
        <View style={{ marginTop: 10 }}>
          <JourneyCandidaturesList
            journeyId={route.params.journeyId}
            navigation={navigation}
          />
        </View>
      </Content>
    </Container>
  );
};

export default JourneyCandidaturesPage;
