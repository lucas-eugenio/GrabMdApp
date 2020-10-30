import React, { Fragment } from 'react';
import { Form, Input, Item, Label, View } from 'native-base';
import Colors from '../../Colors';
import { MaskService } from 'react-native-masked-text';
import { IJourneyFragment } from '../../graphql/fragments/JourneyFragment';
import {
  translateHireEntity,
  translatePaymentMethod,
} from '../../utils/translate';

interface IJourneyDetailsForm {
  journey: IJourneyFragment;
  showCompanyData?: boolean;
}

const JourneyDetailsForm: React.FC<IJourneyDetailsForm> = ({
  journey,
  showCompanyData = false,
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
  } = journey;

  const FormItem = (name: string, value: string): React.ReactElement => (
    <View>
      {!!value && (
        <Item floatingLabel style={{ marginTop: 24 }}>
          <Label style={{ color: Colors.success, fontWeight: '600' }}>
            {name}
          </Label>
          <Input value={value} editable={false} />
        </Item>
      )}
    </View>
  );

  return (
    <View>
      <Form>
        {showCompanyData && (
          <Fragment>
            {FormItem('Nome da Empresa:', company.name)}
            {FormItem('CNPJ:', company.cnpj)}
          </Fragment>
        )}
        {FormItem('Título do Plantão:', name)}
        {FormItem('Data e Hora do Plantão:', date.replace(' -0300', ''))}
        {FormItem(
          'Data e Hora do Pagamento:',
          paymentDate.replace(' -0300', ''),
        )}
        {FormItem(
          'Valor:',
          MaskService.toMask('money', wage.toFixed(2).toString()),
        )}
        {FormItem('CEP:', MaskService.toMask('zip-code', address))}
        {FormItem('Forma de Pagamento:', translatePaymentMethod(paymentMethod))}
        {providesPpe != undefined &&
          FormItem('Fornece EPI:', providesPpe ? 'Sim' : 'Não')}
        {FormItem('Contrata:', translateHireEntity(hireEntity))}
      </Form>
    </View>
  );
};

export default JourneyDetailsForm;
