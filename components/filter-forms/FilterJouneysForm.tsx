import React, { useState } from 'react';
import { Button, Form, Icon, Text, View } from 'native-base';
import { FormItemWithoutInput } from '../form-items/FormItems';
import { DateTimeInput, MaskedInput } from '../form-items/Inputs';
import {
  HireEntityPicker,
  PaymentMethodPicker,
  ProvidesPpePicker,
} from '../form-items/EnumPickerItems';
import {
  formatDateToGraphql,
  formatWageToGraphql,
} from '../../utils/formatters';

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

  const handleFilterButton = (): void => {
    onFilterJourneys({
      startDate: formatDateToGraphql(startDate),
      endDate: formatDateToGraphql(endDate),
      endPaymentDate: formatDateToGraphql(endPaymentDate),
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
        {FormItemWithoutInput(
          'Mínima Data e Hora do Plantão:',
          DateTimeInput(startDate, setStartDate),
        )}
        {FormItemWithoutInput(
          'Máxima Data e Hora do Plantão:',
          DateTimeInput(endDate, setEndDate),
        )}
        {FormItemWithoutInput(
          'Com Pagamento Até:',
          DateTimeInput(endPaymentDate, setEndPaymentDate),
        )}
        {FormItemWithoutInput(
          'Com Pagamento Mínimo:',
          MaskedInput(wage, 'money', setWage),
        )}
        {FormItemWithoutInput(
          'CEP:',
          MaskedInput(address, 'zip-code', setAddress),
        )}
        {PaymentMethodPicker(setPaymentMethod)}
        {ProvidesPpePicker(setProvidesPpe)}
        {HireEntityPicker(setHireEntity)}
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
