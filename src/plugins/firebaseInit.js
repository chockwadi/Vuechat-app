import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
firebase.initializeApp(firebaseConfig)

firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export const db = firebase.firestore();
export const firebasee = firebase;

