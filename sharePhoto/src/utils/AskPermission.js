/* eslint-disable prettier/prettier */
import {ToastAndroid, PermissionsAndroid} from 'react-native';

export const requestpermission = async () => {
  try {
    const granted = PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]);
    console.log(granted);
    if (
      granted['PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE'] ===
        'denied' ||
      granted['PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE'] ===
        'denied'
    ) {
      ToastAndroid.show('We cannot procced with permission', ToastAndroid.LONG);
      requestpermission();
    }
  } catch (error) {
    console.log(error);
  }
};
