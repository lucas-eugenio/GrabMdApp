import React from 'react';
import { Container, Content, View, H1 } from 'native-base';
import MyCandidaturesList from '../../candidatures-list/MyCandidaturesList';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

interface IMyCandidaturesListPage {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const MyCandidaturesListPage: React.FC<IMyCandidaturesListPage> = ({
  navigation,
}) => {
  return (
    <Container>
      <Content padder>
        <View>
          <H1>Minhas Inscrições:</H1>
        </View>
        <MyCandidaturesList doRefetch={false} navigation={navigation} />
      </Content>
    </Container>
  );
};

export default MyCandidaturesListPage;
