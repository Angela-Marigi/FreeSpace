import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBxfo5dw22x1nvPMTiWbIpmyWy7K0c8-hA",
  authDomain: "groupchatapp-d1fcc.firebaseapp.com",
  projectId: "groupchatapp-d1fcc",
  storageBucket: "groupchatapp-d1fcc.appspot.com",
  messagingSenderId: "428724152541",
  appId: "1:428724152541:web:98d18b4a5cdc391fa39334"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();