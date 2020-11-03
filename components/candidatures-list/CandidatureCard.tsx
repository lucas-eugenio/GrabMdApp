import React from 'react';
import { Button, Card, Text, View } from 'native-base';
import { ICandidatureFragment } from '../../graphql/fragments/CandidatureFragment';
import { formatDateToView } from '../../utils/formatters';
import { BadgeItem, NameItem, ValueItem } from '../form-items/CardItems';

interface IJourneyCard {
  candidature: ICandidatureFragment;
  onShowDetails: () => void;
}

const CandidatureCard: React.FC<IJourneyCard> = ({
  candidature,
  onShowDetails,
}) => {
  const { journey, status } = candidature;

  return (
    <Card style={{ padding: 8, marginBottom: 10 }}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View>
          {NameItem('Nome:')}
          {NameItem('Data:')}
          {NameItem('Localização:')}
          {NameItem('Status:')}
        </View>
        <View>
          {ValueItem(journey.name)}
          {ValueItem(formatDateToView(journey.date))}
          {ValueItem(journey.address)}
          {BadgeItem(status)}
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Button
          small
          success
          bordered
          style={{ alignSelf: 'center' }}
          onPress={onShowDetails}>
          <Text>Ver Mais</Text>
        </Button>
      </View>
    </Card>
  );
};

export default CandidatureCard;
