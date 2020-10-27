import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../RootStackParamList';
import { User } from './useUser';

const navigateToHome = (
  user: User,
  navigation: StackNavigationProp<RootStackParamList, 'Start' | 'Register'>,
): void => {
  const navigate = (name: string) =>
    navigation.reset({ index: 0, routes: [{ name }] });

  if (user.type === 'Doctor') {
    navigate('Doctor');
  } else if (user.type === 'Company') {
    navigate('Company');
  } else if (user.type === 'Manager') {
    navigate('Manager');
  }
};

export default navigateToHome;
