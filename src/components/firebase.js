import { initializeApp } from "firebase/app";
// old
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { getMessaging, getToken, onMessage } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-messaging.js';

const firebaseConfig = {
  apiKey: "AIzaSyAzyABVAj5C2RegiedzIml3dXsw7riBu24",
  authDomain: "pwatest-9e98c.firebaseapp.com",
  projectId: "pwatest-9e98c",
  storageBucket: "pwatest-9e98c.firebasestorage.app",
  messagingSenderId: "603786814155",
  appId: "1:603786814155:web:6e5fc951bda3f4443ff14e",
};

initializeApp(firebaseConfig);
const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: "BOJZY_oRK0Z0Bqdi6RgbHj_Fy1hOR4RiBSeG3C5rT_rB07EfqNEpiauzGHK-_a7CeHFwaAaBGftpjnJ2ZQQcQOk" })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
      } else {
        console.log("No registration token available. Request permission to generate one.");
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });
