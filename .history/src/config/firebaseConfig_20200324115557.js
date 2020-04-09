import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

var firebaseConfig = {
    apiKey: "AIzaSyCPwSc3er855uhvyj-6wNir9z5GNnRZ08U",
    authDomain: "petshop-5c1cc.firebaseapp.com",
    databaseURL: "https://petshop-5c1cc.firebaseio.com",
    projectId: "petshop-5c1cc",
    storageBucket: "petshop-5c1cc.appspot.com",
    messagingSenderId: "1042194375198",
    appId: "1:1042194375198:web:f38a922c5f8bc2c810840f",
    measurementId: "G-YVC3L5E6KB"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore()
firebase.auth()