import React, { useState } from 'react';
import {
  Button,
  Container,
  Content,
  H1,
  Icon,
  Spinner,
  Text,
  View,
} from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../../../RootStackParamList';
import { RouteProp } from '@react-navigation/native';
import JourneyDetailsForm from '../../details-form/JourneyDetailsForm';
import { FetchResult, useMutation } from '@apollo/client';
import CreateCandidature, {
  Result,
} from '../../../graphql/mutations/CreateCandidature';
import useUser from '../../../utils/useUser';
import showError from '../../../utils/showError';
import Header from '../../header/Header';

interface ICreateCandidaturePage {
  route: RouteProp<RootStackParamList, 'CreateCandidature'>;
  navigation: StackNavigationProp<RootStackParamList, 'CreateCandidature'>;
}

const CreateCandidaturePage: React.FC<ICreateCandidaturePage> = ({
  route,
  navigation,
}) => {
  const [loading, setLoading] = useState(false);

  const token = useUser().user?.token;

  const [createCandidature] = useMutation(CreateCandidature);

  const handleButtonPress = (): void => {
    setLoading(true);
    const journeyId = route.params.journey.id;
    createCandidature({ variables: { token, journeyId } })
      .then((result: FetchResult<Result>) => {
        const errors = result.data?.createCandidature.errors;
        if (errors) {
          showError(`Erro: ${errors}`);
          setLoading(false);
        } else {
          navigation.navigate('FindJourneysList', {
            createdCandidature: true,
          });
        }
      })
      .catch(() => {
        showError('Erro: Por favor, confirme os dados');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <Header />
      <Content padder>
        <View>
          <H1>Plantão:</H1>
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            success
            iconLeft
            disabled={loading}
            onPress={handleButtonPress}
            style={{ alignSelf: 'flex-end' }}>
            <Icon type="FontAwesome5" name="file-medical" />
            <Text>Se Inscrever</Text>
          </Button>
        </View>
        {loading && <Spinner />}
        <JourneyDetailsForm journey={route.params.journey} showCompanyData />
      </Content>
    </Container>
  );
};

export default CreateCandidaturePage;
