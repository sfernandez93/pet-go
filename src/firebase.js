// import firebase from './firebase';
// require('firebase/auth');

// const firebaseConfig = {
//   apiKey: "AIzaSyAOP8Na04cyGMFu2ssdqF32WSLuGJH6EbQ",
//   authDomain: "pet-go-9200b.firebaseapp.com",
//   projectId: "pet-go-9200b",
//   storageBucket: "pet-go-9200b.appspot.com",
//   messagingSenderId: "6183594456",
//   appId: "1:6183594456:web:5ef003414996aee579aaad"
// };


// // Initialize Firebase
// export const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const database = firebase.getDatabase(firebaseApp);
// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();
// export { auth };
// export default db;

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAOP8Na04cyGMFu2ssdqF32WSLuGJH6EbQ",
  authDomain: "pet-go-9200b.firebaseapp.com",
  projectId: "pet-go-9200b",
  storageBucket: "pet-go-9200b.appspot.com",
  messagingSenderId: "6183594456",
  appId: "1:6183594456:web:5ef003414996aee579aaad"
};


export const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);
