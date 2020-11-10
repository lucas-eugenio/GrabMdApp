import React from 'react';
import { Button, Card, Text, View } from 'native-base';
import { IJourneyFragment } from '../../graphql/fragments/JourneyFragment';
import { formatDateToView } from '../../utils/formatters';
import { NameItem, ValueItem } from '../form-items/CardItems';

interface IJourneyCard {
  journey: IJourneyFragment;
  onShowDetails: () => void;
}

const JourneyCard: React.FC<IJourneyCard> = ({ journey, onShowDetails }) => {
  const { name, address, date, doctor } = journey;

  return (
    <Card style={{ padding: 8, marginBottom: 10 }}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View>
          {NameItem('Nome:')}
          {NameItem('Data:')}
          {NameItem('Localização:')}
          {!!doctor && NameItem('Médico:')}
        </View>
        <View>
          {ValueItem(name)}
          {ValueItem(formatDateToView(date))}
          {ValueItem(address)}
          {!!doctor && ValueItem(doctor.name)}
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

export default JourneyCard;
