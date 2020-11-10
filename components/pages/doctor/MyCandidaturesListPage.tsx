import React, { useEffect, useState } from 'react';
import { Container, Content, View, H1 } from 'native-base';
import MyCandidaturesList from '../../candidatures-list/MyCandidaturesList';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import Header from '../../header/Header';

interface IMyCandidaturesListPage {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const MyCandidaturesListPage: React.FC<IMyCandidaturesListPage> = ({
  navigation,
}) => {
  const [doRefetch, setDoRefetch] = useState(true);

  useEffect(() => {
    setTimeout(() => setDoRefetch(false), 500);
  }, []);

  return (
    <Container>
      <Header />
      <Content padder>
        <View>
          <H1>Minhas Inscrições:</H1>
        </View>
        <MyCandidaturesList doRefetch={doRefetch} navigation={navigation} />
      </Content>
    </Container>
  );
};

export default MyCandidaturesListPage;
