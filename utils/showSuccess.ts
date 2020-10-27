import { Toast } from 'native-base';

const showSuccess = (text: string) => Toast.show({ text, type: 'success' });

export default showSuccess;
