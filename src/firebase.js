import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const API_KEY = process.env.REACT_APP_API_KEY;

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey:API_KEY,
    authDomain: "portfolio-4761c.firebaseapp.com",
    projectId: "portfolio-4761c",
    storageBucket: "portfolio-4761c.appspot.com",
    messagingSenderId: "695878560797",
    appId: "1:695878560797:web:2b8520ef02164d9162eaf4",
    measurementId: "G-8T29TMRNHJ"
  };

const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)
