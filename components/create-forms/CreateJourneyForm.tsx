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

interface ICreateJourneyForm {
  // loading: boolean;
  // onCreateJourney: (form: IForm) => void;
}

export interface IForm {
  name: string;
  paymentDate: string;
  wage: number;
  address: string;
  paymentMethod?: string;
  providesPpe?: boolean;
  hireEntity?: string;
}

// $date: String!
// $paymentDate: String!
// $wage: Float!
// $address: String!
// $paymentMethod: PaymentMethod
// $providesPpe: Boolean
// $hireEntity: HireEntity

const CreateJourneyForm: React.FC<ICreateJourneyForm> = (
  {
    // loading,
    // onCreateJourney,
  },
) => {
  const [name, setName] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [wage, setWage] = useState(0);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [providesPpe, setProvidesPpe] = useState<boolean>(false);
  const [hireEntity, setHireEntity] = useState('');

  // const handleCreateButton = (): void => {
  //   onCreateJourney({
  //     name,
  //     paymentDate,
  //     wage,
  //     address,
  //     paymentMethod,
  //     providesPpe,
  //     hireEntity,
  //   });
  // };

  const FormItem = (
    name: string,
    FormInput: React.ReactElement,
  ): React.ReactElement => (
    <View>
      <Item floatingLabel style={{ marginTop: 24 }}>
        <Label style={{ color: Colors.success, fontWeight: '600' }}>
          {name}
        </Label>
        {FormInput}
      </Item>
    </View>
  );

  return (
    <View>
      <Form>
        {FormItem(
          'Nome',
          <Input
            autoCapitalize="none"
            onChangeText={(text) => setName(text)}
          />,
        )}
      </Form>
      <View style={{ marginTop: 40, alignSelf: 'center' }}>
        {/* {loading && <Spinner />} */}
        <Button
          success
          large
          iconLeft
          // disabled={loading}
          // onPress={handleCreateButton}
        >
          <Icon type="FontAwesome" name="save" />
          <Text>Criar</Text>
        </Button>
      </View>
    </View>
  );
};

export default CreateJourneyForm;
