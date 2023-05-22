import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDXtmXBikgkPpK1d_zinfQw1Zl6H5HSZR0",
    authDomain: "image-gallery-11fba.firebaseapp.com",
    projectId: "image-gallery-11fba",
    storageBucket: "image-gallery-11fba.appspot.com",
    messagingSenderId: "432993497599",
    appId: "1:432993497599:web:b392bc860b759e6714b7ca",
    measurementId: "G-VLRB7Y1537"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { projectFirestore, projectStorage ,timestamp};