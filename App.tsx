import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/pages/HomePage';
import RegisterPage from './components/pages/RegisterPage';
import CreateDoctorPage from './components/pages/CreateDoctorPage';
import CreateCompanyPage from './components/pages/CreateCompanyPage';
import LoginPage from './components/pages/LoginPage';

const App = () => {
  const Stack = createStackNavigator();

  return (
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
  );
};

export default App;
