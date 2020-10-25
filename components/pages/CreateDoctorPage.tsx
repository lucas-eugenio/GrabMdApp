import React from 'react';
import { Container, Content, View } from 'native-base';
import { BodyText, H1 } from '../typography/Typography';

const CreateDoctorPage: React.FC = () => {
  return (
    <Container>
      <Content padder>
        <View style={{ alignItems: 'center' }}>
          <H1>Bem vindo ao GrabMD!</H1>
          <BodyText>Preencha suas informações pessoais</BodyText>
        </View>
      </Content>
    </Container>
  );
};

export default CreateDoctorPage;
