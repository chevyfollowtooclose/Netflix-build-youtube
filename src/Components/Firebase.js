// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5TtqUX2u614HL0MDOnkgTL4FfnPhJksE",
  authDomain: "netflix-clone-939ff.firebaseapp.com",
  projectId: "netflix-clone-939ff",
  storageBucket: "netflix-clone-939ff.appspot.com",
  messagingSenderId: "428546433218",
  appId: "1:428546433218:web:e05ea0eefebee20ae3db5b",
  measurementId: "G-67XY80JGFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig