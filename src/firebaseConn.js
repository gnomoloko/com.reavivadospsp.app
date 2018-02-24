import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBXbFmJYOw-Inp6GO4aM1fu-Z3Ggl7NbGg",
    authDomain: "rpspapp.firebaseapp.com",
    databaseURL: "https://rpspapp.firebaseio.com",
    projectId: "rpspapp",
    storageBucket: "rpspapp.appspot.com",
    messagingSenderId: "499148258778"
  };

  firebase.initializeApp(config);

  export default firebase;