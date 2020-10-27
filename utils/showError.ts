import { Toast } from 'native-base';

const showError = (text: string) => Toast.show({ text, type: 'danger' });

export default showError;
