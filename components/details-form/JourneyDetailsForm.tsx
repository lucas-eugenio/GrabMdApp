import React, { Fragment } from 'react';
import { Form, View } from 'native-base';
import { IJourneyFragment } from '../../graphql/fragments/JourneyFragment';
import {
  translateHireEntity,
  translatePaymentMethod,
} from '../../utils/translate';
import {
  ReadOnlyFormItem,
  ReadOnlyFormItemWithoutInput,
} from '../form-items/FormItems';
import { formatDateToView, formatWageToView } from '../../utils/formatters';
import { MaskedReadOnlyInput } from '../form-items/Inputs';

interface IJourneyDetailsForm {
  journey: IJourneyFragment;
  showCompanyData?: boolean;
  showDoctorData?: boolean;
}

const JourneyDetailsForm: React.FC<IJourneyDetailsForm> = ({
  journey,
  showCompanyData = false,
  showDoctorData = false,
}) => {
  const {
    name,
    date,
    paymentDate,
    wage,
    address,
    paymentMethod,
    providesPpe,
    hireEntity,
    company,
    doctor,
  } = journey;

  return (
    <View>
      <Form>
        {showDoctorData && !!doctor && (
          <Fragment>
            {ReadOnlyFormItem('Nome do Médico:', doctor.name)}
            {ReadOnlyFormItem('CRM:', doctor.crm)}
          </Fragment>
        )}
        {showCompanyData && (
          <Fragment>
            {ReadOnlyFormItem('Nome da Empresa:', company.name)}
            {ReadOnlyFormItem('CNPJ:', company.cnpj)}
          </Fragment>
        )}
        {ReadOnlyFormItem('Título do Plantão:', name)}
        {ReadOnlyFormItem('Data e Hora do Plantão:', formatDateToView(date))}
        {ReadOnlyFormItem(
          'Data e Hora do Pagamento:',
          formatDateToView(paymentDate),
        )}
        {ReadOnlyFormItemWithoutInput(
          'Valor:',
          MaskedReadOnlyInput(formatWageToView(wage), 'money'),
        )}
        {ReadOnlyFormItemWithoutInput(
          'CEP:',
          MaskedReadOnlyInput(address, 'zip-code'),
        )}
        {!!paymentMethod &&
          ReadOnlyFormItem(
            'Forma de Pagamento:',
            translatePaymentMethod(paymentMethod),
          )}
        {providesPpe != undefined &&
          ReadOnlyFormItem('Fornece EPI:', providesPpe ? 'Sim' : 'Não')}
        {!!hireEntity &&
          ReadOnlyFormItem('Contrata:', translateHireEntity(hireEntity))}
      </Form>
    </View>
  );
};

export default JourneyDetailsForm;
