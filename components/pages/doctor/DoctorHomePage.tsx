import React from 'react';
import { Container, Content, Text, View, H1 } from 'native-base';

const DoctorHomePage: React.FC = () => {
  return (
    <Container>
      <Content padder>
        <View style={{ alignItems: 'center' }}>
          <H1>Bem vindo ao GrabMD!</H1>
          <Text style={{ marginTop: 8, textAlign: 'center' }}>
            Doctor Home Page
          </Text>
        </View>
      </Content>
    </Container>
  );
};

export default DoctorHomePage;