import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5QSQ_-OAswvdwzZKtC5IWji1qNVrrx9A",
  authDomain: "netflixclone-oct.firebaseapp.com",
  projectId: "netflixclone-oct",
  storageBucket: "netflixclone-oct.appspot.com",
  messagingSenderId: "325845222694",
  appId: "1:325845222694:web:5954db049c45f14fa62de7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
