import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../FireBase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const[loding,setLoading]=useState(true)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut=()=>{
    setLoading(true)
   return signOut(auth);
  }

  useEffect(() => {
   const unSubscribe= onAuthStateChanged(auth, (currentUser) => { // Fix the syntax error here
      setUser(currentUser);
      console.log('observing current user auth provider', currentUser);
      setLoading(false)
    });
    return()=>{
        unSubscribe()
      }
  }, []);

 

  const authInfo = { user,loding, createUser, signInUser,logOut };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
