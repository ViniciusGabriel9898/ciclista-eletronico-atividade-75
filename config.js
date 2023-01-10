import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAhWcN2-NJM0dTCZcOMOknu1p0_0nLbJLQ",
  authDomain: "atividade-75.firebaseapp.com",
  projectId: "atividade-75",
  storageBucket: "atividade-75.appspot.com",
  messagingSenderId: "136101265513",
  appId: "1:136101265513:web:e2872f396a3ddefe5d62f8"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
