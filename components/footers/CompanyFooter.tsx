import React from 'react';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { Button, Footer, FooterTab, Icon, Text } from 'native-base';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';

interface ICompanyFooter {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const CompanyFooter: React.FC<ICompanyFooter> = ({ navigation }) => {
  return (
    <Footer>
      <FooterTab>
        <Button vertical onPress={() => navigation.navigate('Journeys')}>
          <Icon type="FontAwesome5" name="briefcase-medical" />
          <Text>Plantões</Text>
        </Button>
        <Button vertical onPress={() => navigation.navigate('Managers')}>
          <Icon type="FontAwesome5" name="id-card-alt" />
          <Text>Gestores</Text>
        </Button>
        <Button vertical onPress={() => navigation.navigate('Profile')}>
          <Icon type="FontAwesome5" name="building" />
          <Text>Perfil</Text>
        </Button>
        <Button
          vertical
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'Start', params: { logout: true } }],
            })
          }>
          <Icon type="FontAwesome5" name="door-open" />
          <Text>Sair</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default CompanyFooter;
