import React from 'react';
import { Card, View } from 'native-base';
import { NameItem, ValueItem } from '../form-items/CardItems';

interface ICompanyCard {
  name: string;
  cnpj: string;
}

const CompanyCard: React.FC<ICompanyCard> = ({ name, cnpj }) => (
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

export default CompanyCard;
