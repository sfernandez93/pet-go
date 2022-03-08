
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import 'firebase/storage';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAOP8Na04cyGMFu2ssdqF32WSLuGJH6EbQ",
  authDomain: "pet-go-9200b.firebaseapp.com",
  projectId: "pet-go-9200b",
  storageBucket: "pet-go-9200b.appspot.com",
  messagingSenderId: "6183594456",
  appId: "1:6183594456:web:5ef003414996aee579aaad",
  // databaseURL: 'https://pet-go-9200b-default-rtdb.europe-west1.firebasedatabase.app'
};

export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage();
export const database = getDatabase(firebaseApp);
