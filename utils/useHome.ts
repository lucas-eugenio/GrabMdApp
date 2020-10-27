import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../RootStackParamList';
import { User } from './useUser';

const navigateToHome = (
  user: User,
  navigation: StackNavigationProp<RootStackParamList, 'Start' | 'Register'>,
): void => {
  const navigate = (name: string, screen: string) =>
    navigation.reset({ index: 0, routes: [{ name, params: { screen } }] });

  switch (user.type) {
    case 'Doctor':
      navigate('Doctor', 'Home');
    case 'Company':
      navigate('Company', 'Home');
    default:
      return;
  }
};

export default navigateToHome;
