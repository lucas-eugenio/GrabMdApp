import React from 'react';
import { Card, CardItem, Text, View } from 'native-base';
import Colors from '../../Colors';

interface ICompanyCard {
  name: string;
  cnpj: string;
}

const CompanyCard: React.FC<ICompanyCard> = ({ name, cnpj }) => {
  const NameItem = (text: string): React.ReactElement => (
    <CardItem>
      <Text style={{ color: Colors.success, fontWeight: '600' }}>{text}</Text>
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
          {NameItem('CNPJ:')}
        </View>
        <View>
          {ValueItem(name)}
          {ValueItem(cnpj)}
        </View>
      </View>
    </Card>
  );
};

export default CompanyCard;
