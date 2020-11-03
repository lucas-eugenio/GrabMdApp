import React from 'react';
import { CardItem, Text } from 'native-base';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import StatusBadger from '../candidatures-list/StatusBadge';

export const NameItem = (name: string): React.ReactElement => (
  <CardItem>
    <Text style={{ color: Colors.success, fontWeight: '600' }}>{name}</Text>
  </CardItem>
);

export const ValueItem = (value: string): React.ReactElement => (
  <CardItem>
    <Text>{value}</Text>
  </CardItem>
);

export const BadgeItem = (status: string): React.ReactElement => (
  <CardItem>
    <StatusBadger status={status} />
  </CardItem>
);
