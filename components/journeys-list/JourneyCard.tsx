import React from 'react';
import { Button, Card, CardItem, Text, View } from 'native-base';
import Colors from '../../Colors';

interface IJourneyCard {
  name: string;
  address: string;
  date: string;
}

const JourneyCard: React.FC<IJourneyCard> = ({ name, address, date }) => {
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
          {NameItem('Localização:')}
          {NameItem('Data:')}
        </View>
        <View>
          {ValueItem(name)}
          {ValueItem(address)}
          {ValueItem(date)}
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Button small success bordered style={{ alignSelf: 'center' }}>
          <Text>Ver Mais</Text>
        </Button>
      </View>
    </Card>
  );
};

export default JourneyCard;
