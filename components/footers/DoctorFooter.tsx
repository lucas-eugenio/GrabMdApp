import React from 'react';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { Button, Footer, FooterTab, Icon, Text } from 'native-base';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';

interface IDoctorFooter {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const DoctorFooter: React.FC<IDoctorFooter> = ({ navigation }) => {
  return (
    <Footer>
      <FooterTab>
        <Button vertical onPress={() => navigation.navigate('MyCandidatures')}>
          <Icon type="FontAwesome5" name="laptop-medical" />
          <Text>Inscrições</Text>
        </Button>
        <Button vertical onPress={() => navigation.navigate('FindJourneys')}>
          <Icon type="FontAwesome5" name="briefcase-medical" />
          <Text>Plantões</Text>
        </Button>
        <Button vertical onPress={() => navigation.navigate('Profile')}>
          <Icon type="FontAwesome5" name="user-md" />
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

export default DoctorFooter;
