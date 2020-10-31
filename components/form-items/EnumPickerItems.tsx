import { Item, Label } from 'native-base';
import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Colors from '../../Colors';
import {
  translateHireEntity,
  translatePaymentMethod,
} from '../../utils/translate';

interface IItems {
  label: string;
  value: string | boolean;
}

const PickerItem = (
  name: string,
  items: IItems[],
  setState: (value: any) => void,
): React.ReactElement => (
  <Item inlineLabel style={{ marginTop: 48 }}>
    <Label style={{ color: Colors.success, fontWeight: '600' }}>{name}</Label>
    <RNPickerSelect
      itemKey="label"
      onValueChange={(value) => setState(value)}
      placeholder={{ label: 'Selecione uma Opção' }}
      items={items}
      style={{
        inputIOS: { fontSize: 16 },
        inputAndroid: { fontSize: 16 },
      }}
    />
  </Item>
);

export const PaymentMethodPicker = (
  setState: (state: string) => void,
): React.ReactElement =>
  PickerItem(
    'Forma de Pagamento:',
    [
      {
        label: translatePaymentMethod('ACCOUNT_DEBIT'),
        value: 'ACCOUNT_DEBIT',
      },
    ],
    setState,
  );

export const HireEntityPicker = (
  setState: (state: string) => void,
): React.ReactElement =>
  PickerItem(
    'Contrata:',
    [
      { label: translateHireEntity('INDIVIDUAL'), value: 'INDIVIDUAL' },
      { label: translateHireEntity('LEGAL'), value: 'LEGAL' },
      { label: translateHireEntity('BOTH'), value: 'BOTH' },
    ],
    setState,
  );

interface IBooleanEnumPicker {
  setState: (state: boolean) => void;
}

export const ProvidesPpePicker = (
  setState: (state: boolean) => void,
): React.ReactElement =>
  PickerItem(
    'Fornece EPI:',
    [
      { label: 'Sim', value: true },
      { label: 'Não', value: false },
    ],
    setState,
  );
