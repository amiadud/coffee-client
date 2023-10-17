import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userLogin = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const userLogout = () => {
        setLoading(true);
        return signOut(auth)
    }




const userInfo = {
    user,
    loading,
    createUser,
    userLogin,
    userLogout,
}

useEffect(()=> {
    const unSubscribe = onAuthStateChanged( auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
    })
    return () => {
        unSubscribe();
    }
},[])
    return (
        <AuthContext.Provider value = {userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;