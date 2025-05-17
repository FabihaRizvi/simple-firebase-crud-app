import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaPHV2WT00Ugtkbriv0TtHb2qg_qHsPKc",
  authDomain: "fir-crud-app-1bfee.firebaseapp.com",
  projectId: "fir-crud-app-1bfee",
  storageBucket:"fir-crud-app-1bfee.appspot.com",
  messagingSenderId: "873764610200",
  appId: "1:873764610200:web:454f5e192128616f5d30ed",
  measurementId: "G-J588H0DRN9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };