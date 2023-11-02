import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {initializeApp} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCiU2QPP1xIl_s-jMSrFcF6NKrOxVntM5s",
    authDomain: "tati-store.firebaseapp.com",
    projectId: "tati-store",
    storageBucket: "tati-store.appspot.com",
    messagingSenderId: "697177856342",
    appId: "1:697177856342:web:41167e83420b57a65c5ef7",
    measurementId: "G-5HLRVSNGP2"
  };

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    
)
