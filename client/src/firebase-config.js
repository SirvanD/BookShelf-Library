import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD36Otooz1uO7yx-a2qxPVe2xGllmkQA34",
  authDomain: "bookshelf-auth-4283b.firebaseapp.com",
  projectId: "bookshelf-auth-4283b",
  storageBucket: "bookshelf-auth-4283b.appspot.com",
  messagingSenderId: "504045600873",
  appId: "1:504045600873:web:5e8ca59fab04cdbe8862f8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
