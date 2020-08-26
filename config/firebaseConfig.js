// NOTE
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/messaging'
import 'firebase/storage'

// Initialize Firebase
const fireConfig = {
  apiKey: 'AIzaSyAyvQTZbuRUWUC9vZZOv6EFXudxqBaswsM',
  authDomain: 'global-393c0.firebaseapp.com',
  databaseURL: 'https://global-393c0.firebaseio.com',
  projectId: 'global-393c0',
  storageBucket: 'global-393c0.appspot.com',
  messagingSenderId: '260987670511',
  appId: '1:260987670511:web:455051e5dfde5a7943301a',
  measurementId: 'G-MGNMGCX7Q1'
}

let fireApp, db

if (!fireApp && !firebase.apps.length) {
  fireApp = firebase.initializeApp(fireConfig)
  db = fireApp.firestore(fireConfig)
  // adminApp = firebase.initializeApp(fireConfig, "fireAdmin");
} else {
  fireApp = firebase.app()
  // adminApp = firebase.app("fireAdmin");
  db = fireApp.firestore()
}

// db.enablePersistence({synchronizeTabs:true})

const storage = firebase.storage()

// const messaging = firebase.messaging()
// const messaging = firebase.messaging();

// let FieldValue = require("firebase-admin").firestore.FieldValue;
// Add the public key generated from the console here.
// messaging.usePublicVapidKey(
//   "BLv9gT89P6S2Ax3YqzlCW468B64Ad1yZsD5t2ke5FdDzeDt1fL9wiYVcf1y_9GrcegEwdTAj-5efw_SfR5XWCs8"
// );

// messaging
//   .requestPermission()
//   .then(() => {
//     console.log("Notification permission granted.");
//     messaging.getToken().then(token => {
//       console.log(token);
//     });
//   })
//   .catch(err => {
//     console.log("Unable to get permission to notify.", err);
//   });
export { fireApp, db, storage }
