import React from 'react';
import { Container, Content, View, H1 } from 'native-base';
import RootStackParamList from '../../../RootStackParamList';
import FilterJourneysForm, {
  IForm,
} from '../../filter-forms/FilterJouneysForm';
import { StackNavigationProp } from '@react-navigation/stack';

interface IFilterJourneysPage {
  navigation: StackNavigationProp<RootStackParamList, 'FindJourneysList'>;
}

const FilterJourneysPage: React.FC<IFilterJourneysPage> = ({ navigation }) => {
  const handleFilterJourney = (filter: IForm): void => {
    navigation.navigate('FindJourneysList', { filter });
  };

  return (
    <Container>
      <Content padder>
        <View>
          <H1>Filtrar Plantões:</H1>
        </View>
        <FilterJourneysForm onFilterJourneys={handleFilterJourney} />
      </Content>
    </Container>
  );
};

export default FilterJourneysPage;
