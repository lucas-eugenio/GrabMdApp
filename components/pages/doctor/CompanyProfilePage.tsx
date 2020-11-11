import React from 'react';
import { Container, Content, H1, View } from 'native-base';
import Header from '../../header/Header';
import { RouteProp } from '@react-navigation/native';
import RootStackParamList from '../../../RootStackParamList';
import CompanyDetailsForm from '../../details-form/CompanyDetailsForm';

interface ICompanyProfilePage {
  route: RouteProp<RootStackParamList, 'CompanyProfile'>;
}

const CompanyProfilePage: React.FC<ICompanyProfilePage> = ({ route }) => {
  return (
    <Container>
      <Header />
      <Content padder>
        <View>
          <H1>Perfil da Empresa:</H1>
        </View>
        <CompanyDetailsForm companyId={route.params.companyId} />
      </Content>
    </Container>
  );
};

export default CompanyProfilePage;
