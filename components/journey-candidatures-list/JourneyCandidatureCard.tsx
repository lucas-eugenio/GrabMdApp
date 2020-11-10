import React from 'react';
import { Button, Card, Text, View } from 'native-base';
import { ICandidatureFragment } from '../../graphql/fragments/CandidatureFragment';
import { NameItem, ValueItem } from '../form-items/CardItems';

interface IJourneyCandidatureCard {
  candidature: ICandidatureFragment;
  onAcceptCandidature: () => void;
}

const JourneyCandidatureCard: React.FC<IJourneyCandidatureCard> = ({
  candidature,
  onAcceptCandidature,
}) => {
  const { doctor } = candidature;

  return (
    <Card style={{ padding: 8, marginBottom: 10 }}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View>
          {NameItem('Nome:')}
          {NameItem('CRM:')}
          {NameItem('Email:')}
        </View>
        <View>
          {ValueItem(doctor.name)}
          {ValueItem(doctor.crm)}
          {ValueItem(doctor.email)}
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Button
          success
          style={{ alignSelf: 'center' }}
          onPress={onAcceptCandidature}>
          <Text>Aceitar Inscrição</Text>
        </Button>
      </View>
    </Card>
  );
};

export default JourneyCandidatureCard;
