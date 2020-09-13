import app from 'firebase/app';

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
    }
}

export default Firebase;