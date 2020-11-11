import React from 'react';
import { Button, Card, Text, View } from 'native-base';
import { ICandidatureFragment } from '../../graphql/fragments/CandidatureFragment';
import { NameItem, ValueItem } from '../form-items/CardItems';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

interface IJourneyCandidatureCard {
  candidature: ICandidatureFragment;
  onAcceptCandidature: () => void;
  onShowMoreInfo: () => void;
}

const JourneyCandidatureCard: React.FC<IJourneyCandidatureCard> = ({
  candidature,
  onAcceptCandidature,
  onShowMoreInfo,
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
      <View
        style={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Button
          small
          bordered
          success
          style={{ marginRight: 12 }}
          onPress={onShowMoreInfo}>
          <Text>Mais Informações</Text>
        </Button>
        <Button small success onPress={onAcceptCandidature}>
          <Text>Aceitar Inscrição</Text>
        </Button>
      </View>
    </Card>
  );
};

export default JourneyCandidatureCard;
