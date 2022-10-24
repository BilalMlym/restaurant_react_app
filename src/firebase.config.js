import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBIEfJE2TZNiBwgxoxWlTwXlM6jny3oU84",
    authDomain: "restaurantapp-34a27.firebaseapp.com",
    databaseURL: "https://restaurantapp-34a27-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-34a27",
    storageBucket: "restaurantapp-34a27.appspot.com",
    messagingSenderId: "681076190914",
    appId: "1:681076190914:web:2265f77b0afe067a54155b",
    measurementId: "G-637VVYSC92"
  };

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage};