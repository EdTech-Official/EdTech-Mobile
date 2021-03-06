import firebase from "firebase/app";
// import firebase from "firebase";
import config from './config'
import 'firebase/firestore';
require("firebase/auth");

// INITIALIZE FIREBASE

const firebaseConfig = {
  apiKey: `${config.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${config.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${config.REACT_APP_PROJECT_ID}`,
  storageBucket: `${config.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${config.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${config.REACT_APP_FIREBASE_APP_ID}`,
  measurementId: `${config.REACT_APP_MEASUREMENT_ID}`
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

// MAKE AUTH AND FIRESTORE REFERENCES

const auth = firebase.auth();
const db = firebase.firestore();

// UPDATE FIRESTORE SETTING
db.settings({ timestampsInSnapshots: true });

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();

export {
  auth,
  googleProvider,
  facebookProvider,
  githubProvider,
  twitterProvider,
  firebaseApp,
  db,
};
