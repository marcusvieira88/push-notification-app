import React, {useEffect} from 'react';
import {Text} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import axios from 'axios';

const App = () => {
  const sendFcmToken = async () => {
    try {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();

      await axios.post('https://ca9a-2a02-8109-8540-34ec-7c3c-66e6-9e4b-a1d4.ngrok.io/register', {token});
    } catch (err) {
      //Do nothing
      console.log(err.response.data);
      return;
    }
  };

  useEffect(() => {
    sendFcmToken();
  }, []);
  
  return <Text>Push Notifications App 13</Text>;
};

export default App;