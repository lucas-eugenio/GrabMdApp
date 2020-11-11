import React from 'react';
import { Button, Card, Text, View } from 'native-base';
import { IJourneyFragment } from '../../graphql/fragments/JourneyFragment';
import { formatDateToView } from '../../utils/formatters';
import { NameItem, ValueItem } from '../form-items/CardItems';

interface IJourneyCard {
  journey: IJourneyFragment;
  onShowDetails: () => void;
  onShowCompanyDetails?: () => void;
}

const JourneyCard: React.FC<IJourneyCard> = ({
  journey,
  onShowDetails,
  onShowCompanyDetails,
}) => {
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
      <View
        style={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {!!onShowCompanyDetails && (
          <Button
            small
            success
            bordered
            onPress={onShowCompanyDetails}
            style={{ marginRight: 12 }}>
            <Text>Perfil da Empresa</Text>
          </Button>
        )}
        <Button small success onPress={onShowDetails}>
          <Text>Ver Mais</Text>
        </Button>
      </View>
    </Card>
  );
};

export default JourneyCard;
