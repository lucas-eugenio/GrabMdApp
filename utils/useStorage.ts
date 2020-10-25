import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {
  const save = (value: string, key: string): Promise<void> => {
    return AsyncStorage.setItem(key, value);
  };

  const load = (key: string): Promise<string | null> => {
    return AsyncStorage.getItem(key);
  };

  const erase = (key: string): Promise<void> => {
    return AsyncStorage.removeItem(key);
  };

  return { save, load, erase };
};

export default useStorage;
