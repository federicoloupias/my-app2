import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCy64xGgHpXnsOlcSQeuJ3I5vKZapeNiYw",
    authDomain: "myitineraryfl.firebaseapp.com",
    databaseURL: "https://myitineraryfl.firebaseio.com",
    projectId: "myitineraryfl",
    storageBucket: "myitineraryfl.appspot.com",
    messagingSenderId: "468984465144",
    appId: "1:468984465144:web:8b8db04e2f7d5ac36cdd0d",
    measurementId: "G-NBEYGWWWDR"
};

firebase.initializeApp(config);

export default firebase;
    