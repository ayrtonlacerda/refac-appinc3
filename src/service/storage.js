import AsyncStorage from '@react-native-community/async-storage';

export const setLocalStorage = async (key, value) => {
  console.log({ key, value });
  if (value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      throw new Error(`[Error saving item ${key}] : ${error}`);
    }
  }
};

export const getLocalStorage = async (key) => {
  if (key) {
    try {
      const items = await AsyncStorage.getItem(key);
      console.log({ items });
      if (!items) return null;
      return JSON.parse(items);
    } catch (error) {
      throw new Error(`[Error get items by ${key}] : ${error}`);
    }
  }

  return null;
};

export const removeLocalStorage = async (key) => {
  if (key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      throw new Error(`[Error remove items by ${key}] : ${error}`);
    }
  }
};
