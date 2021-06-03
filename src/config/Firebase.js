import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'process.env.REACT_APP_APIKEY',
  authDomain: 'firegram-381a8.firebaseapp.com',
  projectId: 'firegram-381a8',
  storageBucket: 'firegram-381a8.appspot.com',
  messagingSenderId: '90106354481',
  appId: '1:90106354481:web:3565440cd06a68be2e6e10',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
