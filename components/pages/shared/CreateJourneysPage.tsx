import React, { useState } from 'react';
import { Container, Content, Text, View } from 'native-base';
import { FetchResult, useMutation } from '@apollo/client';
import showError from '../../../utils/showError';
import useUser from '../../../utils/useUser';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../../RootStackParamList';
import CreateJourneyForm, { IForm } from '../../create-forms/CreateJourneyForm';
import CreateJourney, {
  Result,
} from '../../../graphql/mutations/CreateJourney';
import Header from '../../header/Header';

interface ICreateJourneyPage {
  navigation: StackNavigationProp<RootStackParamList, 'JourneysList'>;
}

const CreateJourneyPage: React.FC<ICreateJourneyPage> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [createJourney] = useMutation(CreateJourney);

  const token = useUser().user?.token;

  const handleCreateJourney = (form: IForm): void => {
    setLoading(true);
    const {
      name,
      date,
      paymentDate,
      wage,
      address,
      paymentMethod,
      providesPpe,
      hireEntity,
    } = form;

    const hasError = validateForm(name, date, paymentDate, wage, address);
    if (!hasError) {
      createJourney({
        variables: {
          token,
          name,
          date,
          paymentDate,
          wage,
          address,
          paymentMethod,
          providesPpe,
          hireEntity,
        },
      })
        .then((result: FetchResult<Result>) => {
          const errors = result.data?.createJourney.errors;
          if (errors) {
            showError(`Erro: ${errors}`);
            setLoading(false);
          } else {
            navigation.navigate('JourneysList', {
              createdJourney: true,
            });
          }
        })
        .catch(() => {
          showError('Erro: Por favor, confirme os dados');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  const validateForm = (
    name: string,
    date: string,
    paymentDate: string,
    wage: number,
    address: string,
  ): boolean => {
    return (
      validateField(name, 'o nome') ||
      validateField(date, 'a Data do Plantão') ||
      validateField(paymentDate, 'a Data do Pagamento') ||
      validateField(wage, 'o Pagamento') ||
      validateField(address, 'o Cep')
    );
  };

  const validateField = (field: string | number, message: string): boolean => {
    if (!field) {
      showError(`Erro: Por favor, preencha ${message}`);
      return true;
    }
    return false;
  };

  return (
    <Container>
      <Header />
      <Content padder>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ marginTop: 8, textAlign: 'center' }}>
            Preencha as informações do Plantão
          </Text>
          <Text style={{ marginTop: 20, fontWeight: '600' }}>
            As informações marcadas são obrigatórias
          </Text>
        </View>
        <CreateJourneyForm
          loading={loading}
          onCreateJourney={handleCreateJourney}
        />
      </Content>
    </Container>
  );
};

export default CreateJourneyPage;
