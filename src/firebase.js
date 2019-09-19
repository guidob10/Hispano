import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyDYiC4o4i1r3Hge4sdXEalB10KQ9rIWyQ0",
    authDomain: "m-city-7874a.firebaseapp.com",
    databaseURL: "https://m-city-7874a.firebaseio.com",
    projectId: "m-city-7874a",
    storageBucket: "m-city-7874a.appspot.com",
    messagingSenderId: "669950819399"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');

export {
    firebase,
    firebaseMatches,
    firebasePromotions
}