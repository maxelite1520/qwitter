import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqZ32NrXQfd4E1hiOm5W8HNsDyqCrk_3o",
  authDomain: "qwitter-5c031.firebaseapp.com",
  projectId: "qwitter-5c031",
  storageBucket: "qwitter-5c031.appspot.com",
  messagingSenderId: "1019098888321",
  appId: "1:1019098888321:web:77dddcb24f7be5ddd7b580"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default db;
