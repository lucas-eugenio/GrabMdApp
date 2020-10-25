import 'react-native-gesture-handler';
import React from 'react';
import { Root } from 'native-base';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ApolloClient from './ApolloClient';
import StartPage from './components/pages/login-and-register/StartPage';
import RegisterPage from './components/pages/login-and-register/RegisterPage';
import CreateDoctorPage from './components/pages/login-and-register/CreateDoctorPage';
import CreateCompanyPage from './components/pages/login-and-register/CreateCompanyPage';
import LoginPage from './components/pages/login-and-register/LoginPage';
import SignInDoctorPage from './components/pages/login-and-register/SignInDoctorPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DoctorHomePage from './components/pages/doctors/DoctorHomePage';
import DoctorFooter from './components/footers/DoctorFooter';
import DoctorProfilePage from './components/pages/doctors/DoctorProfilePage';

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
              name="DoctorHome"
              component={DoctorTabScreen}
              options={{ title: 'Home' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    </ApolloProvider>
  );
};

export default App;
