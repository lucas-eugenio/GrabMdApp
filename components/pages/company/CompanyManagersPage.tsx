import React, { useState } from 'react';
import { Container, Content, View, H1, Button, Text, Icon } from 'native-base';
import ManagerCard from '../../manager-card-list/ManagerCard';
import Pagination from '../../pagination/Pagination';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

interface ICompanyManagersPage {
  route: any;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const CompanyManagersPage: React.FC<ICompanyManagersPage> = ({
  route,
  navigation,
}) => {
  const [page, setPage] = useState(1);

  return (
    <Container>
      <Content padder>
        <View>
          <H1>Gestores:</H1>
        </View>
        <View style={{ marginTop: 10 }}>
          <Button
            success
            iconLeft
            onPress={() => navigation.navigate('CompanyCreateManager')}
            style={{ alignSelf: 'flex-end' }}>
            <Icon type="FontAwesome" name="user-plus" />
            <Text>Adicionar</Text>
          </Button>
        </View>
        <View style={{ marginTop: 10, marginBottom: 30 }}>
          <ManagerCard
            name="Lucas Eugênio"
            email="lucasseugenio@hotmail.com"
            cpf="429.940.748-26"
          />
          <ManagerCard
            name="Lucas Eugênio"
            email="lucasseugenio@hotmail.com"
            cpf="429.940.748-26"
          />
          <ManagerCard
            name="Lucas Eugênio"
            email="lucasseugenio@hotmail.com"
            cpf="429.940.748-26"
          />
        </View>
        <Pagination page={page} pageCount={1} onPageChange={setPage} />
      </Content>
    </Container>
  );
};

export default CompanyManagersPage;
