import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (key,value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('save')
  } catch (e) {
    // saving error
  }
}

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    //console.log(jsonValue);
    return jsonValue;
  } catch (e) {
    // error reading value
  }
};

export {storeData,getData}