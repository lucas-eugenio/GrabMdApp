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
import CompanyFooter from './components/footers/CompanyFooter';
import SignInCompanyPage from './components/pages/start/SignInCompanyPage';
import JourneysPage from './components/pages/company/JourneysPage';
import SignInManagerPage from './components/pages/start/SignInManagerPage';
import ManagerFooter from './components/footers/ManagerFooter';
import CreateJourneyPage from './components/pages/company/CreateJourneysPage';
import CreateManagerPage from './components/pages/company/CreateManagerPage';
import ManagersPage from './components/pages/company/ManagersPage';

// Eventually this file will get too big, I know this issue.
// But, to avoid problems on creating routes, keep all of them instanced here.
// At least for now, =)

const App = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const DoctorTabScreen = () => (
    <Tab.Navigator tabBar={DoctorFooter} initialRouteName="DoctorHome">
      <Tab.Screen
        name="DoctorHome"
        component={DoctorHomePage}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="DoctorProfile"
        component={DoctorProfilePage}
        options={{ title: 'Perfil' }}
      />
    </Tab.Navigator>
  );

  const JourneysScreen = () => (
    <Stack.Navigator initialRouteName="JourneysList">
      <Stack.Screen
        name="JourneysList"
        component={JourneysPage}
        options={{ title: 'Plantões' }}
      />
      <Stack.Screen
        name="CreateJourney"
        component={CreateJourneyPage}
        options={{ title: 'Cadastrar Plantão' }}
      />
    </Stack.Navigator>
  );

  const ManagerScreen = () => (
    <Stack.Navigator initialRouteName="ManagersList">
      <Stack.Screen
        name="ManagersList"
        component={ManagersPage}
        options={{ title: 'Gestores' }}
      />
      <Stack.Screen
        name="CreateManager"
        component={CreateManagerPage}
        options={{ title: 'Cadastrar Gestor' }}
      />
    </Stack.Navigator>
  );

  const CompanyTabScreen = () => (
    <Tab.Navigator tabBar={CompanyFooter} initialRouteName="Journeys">
      <Tab.Screen name="Journeys" component={JourneysScreen} />
      <Tab.Screen name="Managers" component={ManagerScreen} />
    </Tab.Navigator>
  );

  const ManagerTabScreen = () => (
    <Tab.Navigator tabBar={ManagerFooter} initialRouteName="Journeys">
      <Tab.Screen name="Journeys" component={JourneysScreen} />
    </Tab.Navigator>
  );

  return (
    <ApolloProvider client={ApolloClient}>
      <Root>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Start"
            screenOptions={{ headerShown: true }}>
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
            <Stack.Screen
              name="SignInManager"
              component={SignInManagerPage}
              options={{ title: 'Autenticar Gestor' }}
            />
            <Stack.Screen
              name="Doctor"
              component={DoctorTabScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Company"
              component={CompanyTabScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Manager"
              component={ManagerTabScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    </ApolloProvider>
  );
};

export default App;
