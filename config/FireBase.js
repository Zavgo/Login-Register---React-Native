import * as firebase from 'firebase';

import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCWNiMMn_ZWXGcWWQXl6i6khoCxo_3iHWE",
  authDomain: "night-coder.firebaseapp.com",
  databaseURL: "https://night-coder.firebaseio.com",
  projectId: "night-coder",
  storageBucket: "night-coder.appspot.com",
  messagingSenderId: "1075777767",
  appId: "1:1075777767:web:3cbe1dd8dc661d5ff4d242",
  measurementId: "G-GTDL9KJEBB"
};
// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)

// ... before export default statemen
export const db = firebase.firestore()

// avoid deprecated warnings
db.settings({
})
export default Firebase
