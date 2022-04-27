import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"; 
import initializeAuthentication from "../Firebase/firebase.init"

initializeAuthentication()
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // signIn with google 
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  };

  // return everythings
  return {
    signInWithGoogle,
    user,
    setUser,
  };
};

export default useFirebase;
