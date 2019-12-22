import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCPiZmYkCaMAt_3Bpy1uc1r6Tjyl2c1N78',
  authDomain: 'todone-521ea.firebaseapp.com',
  databaseURL: 'https://todone-521ea.firebaseio.com',
  projectId: 'todone-521ea',
  storageBucket: 'todone-521ea.appspot.com',
  messagingSenderId: '69284826404',
  appId: '1:69284826404:web:e444d78d279cedccfab7b1'
});

export { firebaseConfig as firebase };
