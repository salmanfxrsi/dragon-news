import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createNewUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  };

  const signInUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  };
  
  // const signInWithGoogle = (email,password) => {
  //   return goog(auth,email,password)
  // };
  
  // const signInWithGithub = (email,password) => {
  //   return signInWithEmailAndPassword(auth,email,password)
  // };

  const signOutUser = () => {
    signOut(auth)
  }
 
  const authInfo = {
    user,
    setUser,
    createNewUser,
    signInUser,
    signOutUser
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
    })
    return () => {
      unsubscribe()
    }
  },[]);

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.object
}

export default AuthProvider;
