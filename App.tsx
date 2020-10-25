import 'react-native-gesture-handler';
import React from 'react';
import { Root } from 'native-base';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ApolloClient from './ApolloClient';
import HomePage from './components/pages/HomePage';
import RegisterPage from './components/pages/RegisterPage';
import CreateDoctorPage from './components/pages/CreateDoctorPage';
import CreateCompanyPage from './components/pages/CreateCompanyPage';
import LoginPage from './components/pages/LoginPage';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <ApolloProvider client={ApolloClient}>
      <Root>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomePage}
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
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    </ApolloProvider>
  );
};

export default App;
