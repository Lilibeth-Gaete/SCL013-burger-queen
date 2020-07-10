import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAcmTFlFP32q-CUyesNiIpLUQIdiFDa-yA",
  authDomain: "burgerqueen-1e2f4.firebaseapp.com",
  databaseURL: "https://burgerqueen-1e2f4.firebaseio.com",
  projectId: "burgerqueen-1e2f4",
  storageBucket: "burgerqueen-1e2f4.appspot.com",
  messagingSenderId: "12564066838",
  appId: "1:12564066838:web:69512192fd1e772e23bb37"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
export {
  db
}
