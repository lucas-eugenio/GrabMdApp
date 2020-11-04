import React from 'react';
import { Button, Container, Content, H1, Icon, Text, View } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../../RootStackParamList';
import { RouteProp } from '@react-navigation/native';
import JourneyDetailsForm from '../../details-form/JourneyDetailsForm';
import Header from '../../header/Header';

interface IJourneyDetailsPage {
  route: RouteProp<RootStackParamList, 'JourneyDetails'>;
  navigation: StackNavigationProp<RootStackParamList, 'JourneyDetails'>;
}

const JourneyDetailsPage: React.FC<IJourneyDetailsPage> = ({
  route,
  navigation,
}) => {
  return (
    <Container>
      <Header />
      <Content padder>
        <View>
          <H1>Plantão:</H1>
        </View>
        {!route.params.journey.doctor && (
          <View style={{ marginTop: 10 }}>
            <Button
              success
              iconLeft
              // onPress={() => navigation.navigate('CreateManager')}
              style={{ alignSelf: 'flex-end' }}>
              <Icon type="FontAwesome5" name="file-medical" />
              <Text>Ver Inscrições</Text>
            </Button>
          </View>
        )}
        <JourneyDetailsForm journey={route.params.journey} />
      </Content>
    </Container>
  );
};

export default JourneyDetailsPage;
