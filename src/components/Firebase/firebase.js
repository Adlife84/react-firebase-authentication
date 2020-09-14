import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBYStn4zYgQUkAmhB819Rsq8kmKKUdvJQw",
    authDomain: "fir-app-2b040.firebaseapp.com",
    databaseURL: "fir-app-2b040.firebaseio.com",
    projectId: "fir-app-2b040",
    storageBucket: "fir-app-2b040.appspot.com",
    messagingSenderId: "650172937676",
    appId: "1:650172937676:web:ad8b94453243e3e25f9969",
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
}

export default Firebase;