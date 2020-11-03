import React from 'react';
import { Card, View } from 'native-base';
import { NameItem, ValueItem } from '../form-items/CardItems';

interface IManagerCard {
  name: string;
  email: string;
  cpf: string;
}

const ManagerCard: React.FC<IManagerCard> = ({ name, email, cpf }) => (
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

export default ManagerCard;
