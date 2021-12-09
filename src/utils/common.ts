import AsyncStorage from '@react-native-async-storage/async-storage';

const isEmpty = function (value: string) {
  if (
    value === '' ||
    value === null ||
    value === undefined ||
    (value !== null && typeof value === 'object' && !Object.keys(value).length)
  ) {
    return true;
  } else {
    return false;
  }
};

export const getItemFromAsync = (storageName: string) => {
  if (isEmpty(storageName)) {
    throw Error('Storage Name is empty');
  }

  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(storageName, (err, result) => {
      if (err) {
        reject(err);
      }

      result === undefined ? resolve(null) : resolve(JSON.parse(result));
    });
  });
};

export const setItemToAsync = (storageName: string, item: any) => {
  if (isEmpty(storageName)) {
    throw Error('Storage Name is empty');
  }

  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(storageName, JSON.stringify(item), (error) => {
      if (error) {
        reject(error);
      }

      resolve('Set Success');
    });
  });
};

export const clockify = (sec: number) => {
  let decimal = Math.floor((Number(sec.toFixed(2)) * 100) % 100);
  let hours = Math.floor(sec / 60 / 60);
  let mins = Math.floor((sec / 60) % 60);
  let seconds = Math.floor(sec % 60);
  let displayDecimal = decimal < 10 ? `0${decimal}` : decimal;
  let displayHours = hours < 10 ? `0${hours}` : hours;
  let displayMins = mins < 10 ? `0${mins}` : mins;
  let displaySecs = seconds < 10 ? `0${seconds}` : seconds;
  return { displayHours, displayMins, displaySecs, displayDecimal };
};
