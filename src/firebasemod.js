import firebase from "firebase/compat/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBA4oHrQnvz-xT9AjF5yt3WRtJv-KrnCF4",
  authDomain: "linkedin-clone-2e10e.firebaseapp.com",
  projectId: "linkedin-clone-2e10e",
  storageBucket: "linkedin-clone-2e10e.appspot.com",
  messagingSenderId: "87116928748",
  appId: "1:87116928748:web:dfd25f578b05ef04a3f7c9",
  // ...
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore(app);
export { db, auth };
