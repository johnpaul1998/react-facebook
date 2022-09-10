import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0kuzMCyxTT4LxkTpRUfLSZlcKcx6rfho",
  authDomain: "react-facebook-cb00c.firebaseapp.com",
  projectId: "react-facebook-cb00c",
  storageBucket: "react-facebook-cb00c.appspot.com",
  messagingSenderId: "348941859157",
  appId: "1:348941859157:web:be99ae240a98e38615d7dc"
};
  
  const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use these for db, auth & provider
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage }