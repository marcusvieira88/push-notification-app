# Push Notification

Example of push notifications with NodeJs(backend) + React Native + Firebase Cloud Messaging

## Generate a Firebase private key file and add it on the project root:

```bash
firebase.json
```

## Follow the installation process described into FCM:

```bash
google-services.json
```

## Run Server / Backend (Nodejs + Express):

```bash
node index.js
```

## Run Client / React Native App:

```bash
cd reative-native-client
yarn install
yarn android
```

## Backend endpoints

- POST /register - Register the mobile app device token generated by FCM
- POST /notifications - Backend send a message to the device token registered

### References

- https://medium.com/tech-iiitg/push-notifications-in-a-react-native-application-using-firebase-node-js-and-express-js-67b3391b6c25
- https://rnfirebase.io/messaging/usage/installation/android
- https://www.npmjs.com/package/firebase-admin
