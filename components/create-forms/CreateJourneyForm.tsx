import React, { useState } from 'react';
import { Button, Form, Icon, Spinner, Text, View } from 'native-base';
import { FormItem, FormItemWithoutInput } from '../form-items/FormItems';
import {
  HireEntityPicker,
  PaymentMethodPicker,
  ProvidesPpePicker,
} from '../form-items/EnumPickerItems';
import { MaskedInput, DateTimeInput } from '../form-items/Inputs';
import {
  formatDateToGraphql,
  formatWageToGraphql,
} from '../../utils/formatters';

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

interface ICreateJourneyForm {
  loading: boolean;
  onCreateJourney: (form: IForm) => void;
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

  const handleCreateButton = (): void => {
    onCreateJourney({
      name,
      date: formatDateToGraphql(date),
      paymentDate: formatDateToGraphql(paymentDate),
      wage: formatWageToGraphql(wage),
      address,
      paymentMethod,
      providesPpe,
      hireEntity,
    });
  };

  return (
    <View>
      <Form>
        {FormItem('* Nome:', setName)}
        {FormItemWithoutInput(
          '* Data e Hora do Plantão:',
          DateTimeInput(date, setDate),
        )}
        {FormItemWithoutInput(
          '* Data e Hora do Pagamento:',
          DateTimeInput(paymentDate, setPaymentDate),
        )}
        {FormItemWithoutInput(
          '* Pagamento:',
          MaskedInput(wage, 'money', setWage),
        )}
        {FormItemWithoutInput(
          '* CEP:',
          MaskedInput(address, 'zip-code', setAddress),
        )}
        {PaymentMethodPicker(setPaymentMethod)}
        {ProvidesPpePicker(setProvidesPpe)}
        {HireEntityPicker(setHireEntity)}
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
