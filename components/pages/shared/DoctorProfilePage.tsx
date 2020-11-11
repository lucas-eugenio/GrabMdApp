import React from 'react';
import { Container, Content, H1, View } from 'native-base';
import Header from '../../header/Header';
import DoctorDetailsForm from '../../details-form/DoctorDetailsForm';
import { RouteProp } from '@react-navigation/native';
import RootStackParamList from '../../../RootStackParamList';

interface IDoctorProfilePage {
  route: RouteProp<RootStackParamList, 'DoctorProfile'>;
}

const DoctorProfilePage: React.FC<IDoctorProfilePage> = ({ route }) => {
  return (
    <Container>
      <Header />
      <Content padder>
        <View>
          <H1>Perfil do Médico:</H1>
        </View>
        <DoctorDetailsForm doctorId={route.params.doctorId} />
      </Content>
    </Container>
  );
};

export default DoctorProfilePage;
