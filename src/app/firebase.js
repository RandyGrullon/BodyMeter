// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFGWeSGIsat3SE7nmuDzhfFS52xwiKr5I",
  authDomain: "musclemeter-9b669.firebaseapp.com",
  projectId: "musclemeter-9b669",
  storageBucket: "musclemeter-9b669.appspot.com",
  messagingSenderId: "483311258073",
  appId: "1:483311258073:web:bc54de26f40303682271c8"
};

// Initialize Firebase
if (!firebase?.apps.length) {
    firebase?.initializeApp(firebaseConfig);
  }
  
  export default firebase;