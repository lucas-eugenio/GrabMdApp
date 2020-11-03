import React from 'react';
import { Container, Content, H1, View } from 'native-base';
import RootStackParamList from '../../../RootStackParamList';
import { RouteProp } from '@react-navigation/native';
import JourneyDetailsForm from '../../details-form/JourneyDetailsForm';
import StatusBadger from '../../candidatures-list/StatusBadge';

interface ICandidatureDetailsPage {
  route: RouteProp<RootStackParamList, 'CandidatureDetails'>;
}

const CandidatureDetailsPage: React.FC<ICandidatureDetailsPage> = ({
  route,
}) => {
  return (
    <Container>
      <Content padder>
        <View>
          <H1>Inscrição:</H1>
        </View>
        <View style={{ marginTop: 10, alignSelf: 'flex-end' }}>
          <StatusBadger status={route.params.candidature.status} />
        </View>
        <JourneyDetailsForm
          journey={route.params.candidature.journey}
          showCompanyData
        />
      </Content>
    </Container>
  );
};

export default CandidatureDetailsPage;
