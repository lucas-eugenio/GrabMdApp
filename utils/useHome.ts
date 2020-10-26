import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../RootStackParamList';
import { User } from './useUser';

const navigateToHome = (
  user: User,
  navigation: StackNavigationProp<RootStackParamList, 'Start' | 'Register'>,
): void => {
  const navigate = (name: string) =>
    navigation.reset({ index: 0, routes: [{ name }] });

  switch (user.type) {
    case 'Doctor':
      navigate('DoctorHome');
    case 'Company':
      navigate('CompanyHome');
    default:
      return;
  }
};

export default navigateToHome;
