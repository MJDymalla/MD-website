import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApcAZy4pVzMb9mJi1CveIBpLQdLs_QlMw",
  authDomain: "massdiplomacymindset.firebaseapp.com",
  databaseURL: "https://massdiplomacymindset.firebaseio.com",
  projectId: "massdiplomacymindset",
  storageBucket: "massdiplomacymindset.appspot.com",
  messagingSenderId: "1084934248232",
  appId: "1:1084934248232:web:79b3a7299e344c789f221d"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };



