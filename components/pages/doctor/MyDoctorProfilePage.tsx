import React from 'react';
import { Container, Content, H1, View } from 'native-base';
import Header from '../../header/Header';
import MyDoctorDetailsForm from '../../details-form/MyDoctorDetailsForm';

const MyDoctorProfilePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content padder>
        <View>
          <H1>Meu Perfil:</H1>
        </View>
        <MyDoctorDetailsForm />
      </Content>
    </Container>
  );
};

export default MyDoctorProfilePage;
