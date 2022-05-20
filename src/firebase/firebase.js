import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCyCISW7OdYkcY_kmYWV4s0mowNCH1sg0s',
  authDomain: 'workshop3-c6214.firebaseapp.com',
  projectId: 'workshop3-c6214',
  storageBucket: 'workshop3-c6214.appspot.com',
  messagingSenderId: '104890864682',
  appId: '1:104890864682:web:7dc7cbe0ba16058b6b5f53',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
