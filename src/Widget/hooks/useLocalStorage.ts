import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';


export const useLocalStorage = <T>(key: string, initialValue: T | null): [T | null, Dispatch<SetStateAction<T>>] => {
  const readValue = useCallback(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      return initialValue;
    }
  }, [initialValue, key]);

  const [storedValue, setStoredValue] = useState<T | null>(readValue);

  const setValue = useCallback((value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.warn(`cannot set key: ${key} to localStorage`);
    }
  }, [key]);

  useEffect(() => {
    setStoredValue(readValue());
  }, []);


  return [storedValue, setValue];
};
