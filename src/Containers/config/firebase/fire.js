import Firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCwox15fwciwbCfpMQPxK34jmQ88WsXqNo",
  authDomain: "wirausaha-86e97.firebaseapp.com",
  databaseURL: "https://wirausaha-86e97.firebaseio.com",
  projectId: "wirausaha-86e97",
  storageBucket: "wirausaha-86e97.appspot.com",
  messagingSenderId: "602858300703",
  appId: "1:602858300703:web:00779532d6208c61acfc2a",
  measurementId: "G-5XMQCVX9FE"
};
// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);
export const database = Firebase.database();
export const storage = Firebase.storage();
export const firestore = Firebase.firestore();

export default firebase;
