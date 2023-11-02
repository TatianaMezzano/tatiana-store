// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiU2QPP1xIl_s-jMSrFcF6NKrOxVntM5s",
  authDomain: "tati-store.firebaseapp.com",
  projectId: "tati-store",
  storageBucket: "tati-store.appspot.com",
  messagingSenderId: "697177856342",
  appId: "1:697177856342:web:41167e83420b57a65c5ef7",
  measurementId: "G-5HLRVSNGP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);