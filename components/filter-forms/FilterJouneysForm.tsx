import React, { useState } from 'react';
import {
  Button,
  Form,
  Icon,
  Input,
  Item,
  Label,
  Text,
  View,
} from 'native-base';
import Colors from '../../Colors';
import { MaskService } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';
import {
  translateHireEntity,
  translatePaymentMethod,
} from '../../utils/translate';

interface IFilterJourneysForm {
  onFilterJourneys: (form: IForm) => void;
}

export interface IForm {
  startDate?: string;
  endDate?: string;
  endPaymentDate?: string;
  wage?: number;
  address?: string;
  paymentMethod?: string;
  providesPpe?: boolean;
  hireEntity?: string;
}

const FilterJourneysForm: React.FC<IFilterJourneysForm> = ({
  onFilterJourneys,
}) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endPaymentDate, setEndPaymentDate] = useState('');
  const [wage, setWage] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<string | undefined>(
    undefined,
  );
  const [providesPpe, setProvidesPpe] = useState<boolean | undefined>(
    undefined,
  );
  const [hireEntity, setHireEntity] = useState<string | undefined>(undefined);

  const formatWage = (): number =>
    parseFloat(wage.replace('R$', '').replace('.', '').replace(',', '.'));

  const handleFilterButton = (): void => {
    onFilterJourneys({
      startDate: startDate ? `${startDate} -0300` : '',
      endDate: endDate ? `${endDate} -0300` : '',
      endPaymentDate: endPaymentDate ? `${endPaymentDate} -0300` : '',
      wage: formatWage(),
      address,
      paymentMethod,
      providesPpe,
      hireEntity,
    });
  };

  const FormItem = (
    name: string,
    FormInput: React.ReactElement,
  ): React.ReactElement => (
    <Item floatingLabel style={{ marginTop: 24 }}>
      <Label style={{ color: Colors.success, fontWeight: '600' }}>{name}</Label>
      {FormInput}
    </Item>
  );

  const DateTimeInput = (
    value: string,
    setState: (text: string) => void,
  ): React.ReactElement => (
    <Input
      value={value}
      onChangeText={(text) => {
        setState(
          MaskService.toMask('datetime', text, {
            format: 'YYYY-MM-DD HH:mm:ss',
          }),
        );
      }}
    />
  );

  interface IPickerItem {
    label: string;
    value: string | boolean;
  }

  const PickerItem = (
    name: string,
    items: IPickerItem[],
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
          inputIOS: { fontSize: 16, alignContent: 'flex-end' },
          inputAndroid: { fontSize: 16 },
        }}
      />
    </Item>
  );

  return (
    <View>
      <Form>
        {FormItem(
          'Mínima Data e Hora do Plantão:',
          DateTimeInput(startDate, setStartDate),
        )}
        {FormItem(
          'Máxima Data e Hora do Plantão:',
          DateTimeInput(endDate, setEndDate),
        )}
        {FormItem(
          'Com Pagamento Até:',
          DateTimeInput(endPaymentDate, setEndPaymentDate),
        )}
        {FormItem(
          'Com Pagamento Mínimo:',
          <Input
            value={wage}
            onChangeText={(text) => setWage(MaskService.toMask('money', text))}
          />,
        )}
        {FormItem(
          'CEP:',
          <Input
            value={address}
            onChangeText={(text) =>
              setAddress(MaskService.toMask('zip-code', text))
            }
          />,
        )}
        {PickerItem(
          'Forma de Pagamento:',
          [
            {
              label: translatePaymentMethod('ACCOUNT_DEBIT'),
              value: 'ACCOUNT_DEBIT',
            },
          ],
          setPaymentMethod,
        )}
        {PickerItem(
          'Fornece EPI:',
          [
            { label: 'Sim', value: true },
            { label: 'Não', value: false },
          ],
          setProvidesPpe,
        )}
        {PickerItem(
          'Contrata:',
          [
            { label: translateHireEntity('INDIVIDUAL'), value: 'INDIVIDUAL' },
            { label: translateHireEntity('LEGAL'), value: 'LEGAL' },
            { label: translateHireEntity('BOTH'), value: 'BOTH' },
          ],
          setHireEntity,
        )}
      </Form>
      <View style={{ marginTop: 40, alignSelf: 'center' }}>
        <Button success large iconLeft onPress={handleFilterButton}>
          <Icon type="FontAwesome" name="filter" />
          <Text>Filtrar</Text>
        </Button>
      </View>
    </View>
  );
};

export default FilterJourneysForm;
