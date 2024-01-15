import { useLocalStorage } from 'react-use'

export const useLocalStorageState = (key, defaultValue) => {

    const [ value, setValue ] = useLocalStorage(key, defaultValue)

    const setLocalStorageValue = newValue => {
      try {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
      } catch (error) {
        console.error('Error updating local storage:', error);
      }
    }
  return [ value, setLocalStorageValue ]
}


