import React from 'react';
import { Container, Content, View } from 'native-base';
import { BodyText, H1 } from '../typography/Typography';

const CreateCompanyPage: React.FC = () => {
  return (
    <Container>
      <Content padder>
        <View style={{ alignItems: 'center' }}>
          <H1>Bem vindo ao GrabMD!</H1>
          <BodyText>Preencha as informações da empresa</BodyText>
        </View>
      </Content>
    </Container>
  );
};

export default CreateCompanyPage;
