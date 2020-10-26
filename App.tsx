import 'react-native-gesture-handler';
import React from 'react';
import { Root } from 'native-base';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ApolloClient from './ApolloClient';
import StartPage from './components/pages/start/StartPage';
import RegisterPage from './components/pages/start/RegisterPage';
import CreateDoctorPage from './components/pages/start/CreateDoctorPage';
import CreateCompanyPage from './components/pages/start/CreateCompanyPage';
import LoginPage from './components/pages/start/LoginPage';
import SignInDoctorPage from './components/pages/start/SignInDoctorPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DoctorHomePage from './components/pages/doctor/DoctorHomePage';
import DoctorFooter from './components/footers/DoctorFooter';
import DoctorProfilePage from './components/pages/doctor/DoctorProfilePage';
import CompanyProfilePage from './components/pages/company/CompanyProfilePage';
import CompanyFooter from './components/footers/CompanyFooter';
import CompanyHomePage from './components/pages/company/CompanyHomePage';
import SignInCompanyPage from './components/pages/start/SignInCompanyPage';

// Eventually this file will get too big, I know this issue.
// But, to avoid problems on creating routes, keep all of them instanced here.
// At least for now, =)

const App = () => {
  const Stack = createStackNavigator();
  const HomeTab = createBottomTabNavigator();

  const DoctorTabScreen = () => (
    <HomeTab.Navigator tabBar={DoctorFooter}>
      <HomeTab.Screen
        name="DoctorHome"
        component={DoctorHomePage}
        options={{ title: 'Home' }}
      />
      <HomeTab.Screen
        name="DoctorProfile"
        component={DoctorProfilePage}
        options={{ title: 'Perfil' }}
      />
    </HomeTab.Navigator>
  );

  const CompanyTabScreen = () => (
    <HomeTab.Navigator tabBar={CompanyFooter}>
      <HomeTab.Screen
        name="CompanyHome"
        component={CompanyHomePage}
        options={{ title: 'Home' }}
      />
      <HomeTab.Screen
        name="CompanyProfile"
        component={CompanyProfilePage}
        options={{ title: 'Perfil' }}
      />
    </HomeTab.Navigator>
  );

  return (
    <ApolloProvider client={ApolloClient}>
      <Root>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Start">
            <Stack.Screen
              name="Start"
              component={StartPage}
              options={{ title: 'Início' }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterPage}
              options={{ title: 'Cadastro' }}
            />
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{ title: 'Login' }}
            />
            <Stack.Screen
              name="CreateDoctor"
              component={CreateDoctorPage}
              options={{ title: 'Cadastrar Médico' }}
            />
            <Stack.Screen
              name="CreateCompany"
              component={CreateCompanyPage}
              options={{ title: 'Cadastrar Empresa' }}
            />
            <Stack.Screen
              name="SignInDoctor"
              component={SignInDoctorPage}
              options={{ title: 'Autenticar Médico' }}
            />
            <Stack.Screen
              name="SignInCompany"
              component={SignInCompanyPage}
              options={{ title: 'Autenticar Empresa' }}
            />
            <Stack.Screen name="DoctorHome" component={DoctorTabScreen} />
            <Stack.Screen name="CompanyHome" component={CompanyTabScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    </ApolloProvider>
  );
};

export default App;
