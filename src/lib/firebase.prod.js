import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { seedDatabase } from '../seed';


// Need to somehow seed the database

// Need a config here 

const config = {
    apiKey: "AIzaSyD_j8FbQ-gf54aa2wfX-0yEiErx6ei3oZw",
    authDomain: "mynetflix-testproject.firebaseapp.com",
    projectId: "mynetflix-testproject",
    storageBucket: "mynetflix-testproject.appspot.com",
    messagingSenderId: "943696515161",
    appId: "1:943696515161:web:966fb55c2c2f4068912148"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export {firebase};