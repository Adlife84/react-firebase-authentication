import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBYStn4zYgQUkAmhB819Rsq8kmKKUdvJQw",
    authDomain: "fir-app-2b040.firebaseapp.com",
    databaseURL: "fir-app-2b040.firebaseio.com",
    projectId: "fir-app-2b040",
    storageBucket: "gs://fir-app-2b040.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
};

class Firebase {
    constructor() {
        app.initializeApp(config);

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