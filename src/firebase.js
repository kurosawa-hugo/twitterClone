import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBupdya5h1qgfFAI-_rlnXRcygD7OOxFao",
  authDomain: "post-f5d3d.firebaseapp.com",
  databaseURL: "https://post-f5d3d.firebaseio.com",
  projectId: "post-f5d3d",
  storageBucket: "post-f5d3d.appspot.com",
  messagingSenderId: "439931049480",
  appId: "1:439931049480:web:cb70d43335b2e7ae99e3bd",
  measurementId: "G-69NGLWJTHB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
export const auth = firebase.auth()
export const db = firebase.firestore()