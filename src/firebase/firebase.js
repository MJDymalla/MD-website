import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKZGSZLPExBolalx4QoTPpgDCRWgXpaXY",
  authDomain: "testdb-1a33a.firebaseapp.com",
  databaseURL: "https://testdb-1a33a.firebaseio.com",
  projectId: "testdb-1a33a",
  storageBucket: "testdb-1a33a.appspot.com",
  messagingSenderId: "464430006835",
  appId: "1:464430006835:web:16a8df8519e90ad0e95946"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };



