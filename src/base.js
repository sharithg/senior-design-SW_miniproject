import * as firebase from "firebase/app";
require("firebase/auth");
require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyCf_mkXtz0olQbQCvkxSQIsBDxHG3gmUWc",
  authDomain: "formidable-code-289123.firebaseapp.com",
  databaseURL: "https://formidable-code-289123.firebaseio.com",
  projectId: "formidable-code-289123",
  storageBucket: "formidable-code-289123.appspot.com",
  messagingSenderId: "787679922806",
  appId: "1:787679922806:web:166f2c3ed5ed3c336ead57",
  measurementId: "G-ZSP3C26YPJ",
};

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

const app = firebase.initializeApp(firebaseConfig);

export { app, uiConfig };
