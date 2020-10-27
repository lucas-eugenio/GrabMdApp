import React from 'react';
import { Card, CardItem, Text, View } from 'native-base';
import Colors from '../../Colors';

interface IManagerCard {
  name: string;
  email: string;
  cpf: string;
}

const ManagerCard: React.FC<IManagerCard> = ({ name, email, cpf }) => {
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
          {NameItem('Email:')}
          {NameItem('CPF:')}
        </View>
        <View>
          {ValueItem(name)}
          {ValueItem(email)}
          {ValueItem(cpf)}
        </View>
      </View>
    </Card>
  );
};

export default ManagerCard;
