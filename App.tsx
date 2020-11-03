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
import MyCandidaturesListPage from './components/pages/doctor/MyCandidaturesListPage';
import DoctorFooter from './components/footers/DoctorFooter';
import CompanyFooter from './components/footers/CompanyFooter';
import SignInCompanyPage from './components/pages/start/SignInCompanyPage';
import JourneysPage from './components/pages/shared/JourneysPage';
import SignInManagerPage from './components/pages/start/SignInManagerPage';
import ManagerFooter from './components/footers/ManagerFooter';
import CreateJourneyPage from './components/pages/shared/CreateJourneysPage';
import CreateManagerPage from './components/pages/company/CreateManagerPage';
import ManagersPage from './components/pages/company/ManagersPage';
import JourneyDetailsPage from './components/pages/shared/JourneyDetailsPage';
import FindJourneysListPage from './components/pages/doctor/FindJourneysListPage';
import CreateCandidaturePage from './components/pages/doctor/CreateCandidaturePage';
import FilterJourneysPage from './components/pages/doctor/FilterJourneysPage';
import CandidatureDetailsPage from './components/pages/doctor/CandidatureDetailsPage';

// Eventually this file will get too big, I know this issue.
// But, to avoid problems on creating routes, keep all of them instanced here.
// At least for now, =)

const App = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const MyCandidaturesScreen = () => (
    <Stack.Navigator initialRouteName="MyCandidaturesList">
      <Stack.Screen
        name="MyCandidaturesList"
        component={MyCandidaturesListPage}
        options={{ title: 'Minhas Inscrições' }}
      />
      <Stack.Screen
        name="CandidatureDetails"
        component={CandidatureDetailsPage}
        options={{ title: 'Inscrição', headerBackTitle: 'Inscrições' }}
      />
    </Stack.Navigator>
  );

  const FindJourneysScreen = () => (
    <Stack.Navigator initialRouteName="FindJourneysList">
      <Stack.Screen
        name="FindJourneysList"
        component={FindJourneysListPage}
        options={{ title: 'Encontrar Plantões' }}
      />
      <Stack.Screen
        name="CreateCandidature"
        component={CreateCandidaturePage}
        options={{ title: 'Se Inscrever', headerBackTitle: 'Plantões' }}
      />
      <Stack.Screen
        name="FilterJourneys"
        component={FilterJourneysPage}
        options={{ title: 'Filtrar Plantões', headerBackTitle: 'Plantões' }}
      />
    </Stack.Navigator>
  );

  const DoctorTabScreen = () => (
    <Tab.Navigator tabBar={DoctorFooter} initialRouteName="MyCandidatures">
      <Tab.Screen
        name="MyCandidatures"
        component={MyCandidaturesScreen}
        options={{ title: 'Minhas Inscrições' }}
      />
      <Tab.Screen
        name="FindJourneys"
        component={FindJourneysScreen}
        options={{ title: 'Encontrar Plantões' }}
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
      <Stack.Screen
        name="JourneyDetails"
        component={JourneyDetailsPage}
        options={{ title: 'Detalhes do Plantão' }}
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
