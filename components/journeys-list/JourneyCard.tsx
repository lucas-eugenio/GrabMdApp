import React from 'react';
import { Button, Card, CardItem, Text, View } from 'native-base';
import Colors from '../../Colors';
import { IJourneyFragment } from '../../graphql/fragments/JourneyFragment';

interface IJourneyCard {
  journey: IJourneyFragment;
  onShowDetails: () => void;
}

const JourneyCard: React.FC<IJourneyCard> = ({ journey, onShowDetails }) => {
  const { name, address, date, doctor } = journey;

  const NameItem = (name: string): React.ReactElement => (
    <CardItem>
      <Text style={{ color: Colors.success, fontWeight: '600' }}>{name}</Text>
    </CardItem>
  );

  const ValueItem = (value: string): React.ReactElement => (
    <CardItem>
      <Text>{value}</Text>
    </CardItem>
  );

  return (
    <Card style={{ padding: 8, marginBottom: 10 }}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View>
          {NameItem('Nome:')}
          {NameItem('Data:')}
          {NameItem('Localização:')}
          {!!doctor && NameItem('Doctor:')}
        </View>
        <View>
          {ValueItem(name)}
          {ValueItem(date.replace(' -0300', ''))}
          {ValueItem(address)}
          {!!doctor && ValueItem(doctor.crm)}
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
