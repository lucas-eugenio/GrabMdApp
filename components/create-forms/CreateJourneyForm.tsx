import React, { useState } from 'react';
import {
  Button,
  Form,
  Icon,
  Input,
  Item,
  Label,
  Spinner,
  Text,
  View,
} from 'native-base';
import Colors from '../../Colors';
import { MaskService } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';

interface ICreateJourneyForm {
  loading: boolean;
  onCreateJourney: (form: IForm) => void;
}

export interface IForm {
  name: string;
  date: string;
  paymentDate: string;
  wage: number;
  address: string;
  paymentMethod?: string;
  providesPpe?: boolean;
  hireEntity?: string;
}

const CreateJourneyForm: React.FC<ICreateJourneyForm> = ({
  loading,
  onCreateJourney,
}) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
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

  const handleCreateButton = (): void => {
    onCreateJourney({
      name,
      date: date ? `${date} -0300` : '',
      paymentDate: paymentDate ? `${paymentDate} -0300` : '',
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
          '* Nome:',
          <Input
            autoCapitalize="none"
            onChangeText={(text) => setName(text)}
          />,
        )}
        {FormItem('* Data e Hora do Plantão:', DateTimeInput(date, setDate))}
        {FormItem(
          '* Data e Hora do Pagamento:',
          DateTimeInput(paymentDate, setPaymentDate),
        )}
        {FormItem(
          '* Valor:',
          <Input
            value={wage}
            onChangeText={(text) => setWage(MaskService.toMask('money', text))}
          />,
        )}
        {FormItem(
          '* CEP:',
          <Input
            value={address}
            onChangeText={(text) =>
              setAddress(MaskService.toMask('zip-code', text))
            }
          />,
        )}
        {PickerItem(
          'Forma de Pagamento:',
          [{ label: 'Débito em Conta', value: 'ACCOUNT_DEBIT' }],
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
            { label: 'Pessoa Física', value: 'INDIVIDUAL' },
            { label: 'Pessoa Jurídica', value: 'LEGAL' },
            { label: 'Ambos', value: 'BOTH' },
          ],

          setHireEntity,
        )}
      </Form>
      <View style={{ marginTop: 40, alignSelf: 'center' }}>
        {loading && <Spinner />}
        <Button
          success
          large
          iconLeft
          disabled={loading}
          onPress={handleCreateButton}>
          <Icon type="FontAwesome" name="save" />
          <Text>Criar</Text>
        </Button>
      </View>
    </View>
  );
};

export default CreateJourneyForm;
