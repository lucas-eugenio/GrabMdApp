import React from 'react';
import { Container, Content, H1, View } from 'native-base';
import Header from '../../header/Header';
import MyCompanyDetailsForm from '../../details-form/MyCompanyDetailsForm';

const MyCompanyProfilePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content padder>
        <View>
          <H1>Perfil da Empresa:</H1>
        </View>
        <MyCompanyDetailsForm />
      </Content>
    </Container>
  );
};

export default MyCompanyProfilePage;
