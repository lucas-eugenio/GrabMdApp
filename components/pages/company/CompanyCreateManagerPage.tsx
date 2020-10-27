import React from 'react';
import { Container, Content, Text, View } from 'native-base';

const CompanyCreateManagerPage: React.FC = () => {
  return (
    <Container>
      <Content padder>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ marginTop: 8, textAlign: 'center' }}>
            Preencha as informações do gestor
          </Text>
          <Text style={{ marginTop: 20, fontWeight: '600' }}>
            Todas as informações são obrigatórias
          </Text>
        </View>
      </Content>
    </Container>
  );
};

export default CompanyCreateManagerPage;
