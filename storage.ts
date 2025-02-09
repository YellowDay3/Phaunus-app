import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key: string, value: any): Promise<void> => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const getData = async (key: string): Promise<any | null> => {
  const data = await AsyncStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const removeData = async (key: string): Promise<void> => {
  await AsyncStorage.removeItem(key);
};
