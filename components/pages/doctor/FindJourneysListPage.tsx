import React, { useEffect, useState } from 'react';
import { Container, Content, Text, View, H1, Button, Icon } from 'native-base';
import FindJourneysList from '../../journeys-list/FindJourneysList';
import {
  NavigationHelpers,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import RootStackParamList from '../../../RootStackParamList';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import showSuccess from '../../../utils/showSuccess';
import { IForm } from '../../filter-forms/FilterJouneysForm';
import Header from '../../header/Header';

interface IFindJourneysPage {
  route: RouteProp<RootStackParamList, 'FindJourneysList'>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const FindJourneysListPage: React.FC<IFindJourneysPage> = ({
  route,
  navigation,
}) => {
  const [doRefetch, setDoRefetch] = useState(false);
  const [filter, setFilter] = useState<IForm>({});

  const onCreateCandidature = (): void => {
    setDoRefetch(true);
    showSuccess('Sucesso: Você se inscreveu para a Vaga');
    setTimeout(() => {
      setDoRefetch(false), 500;
    });
  };

  useEffect(() => {
    route.params?.createdCandidature && onCreateCandidature();
    route.params?.filter && setFilter(route.params?.filter);
  }, [route]);

  return (
    <Container>
      <Header />
      <Content padder>
        <View>
          <H1>Encontrar Plantões:</H1>
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            success
            iconLeft
            style={{ alignSelf: 'flex-end' }}
            onPress={() => navigation.navigate('FilterJourneys')}>
            <Icon type="FontAwesome5" name="filter" />
            <Text>Filtrar</Text>
          </Button>
        </View>
        <FindJourneysList
          doRefetch={doRefetch}
          navigation={navigation}
          filter={filter}
        />
      </Content>
    </Container>
  );
};

export default FindJourneysListPage;
