import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    // This is for Sign Up
    const createUser = ( email, password ) =>{
        setLoading(true);
        return createUserWithEmailAndPassword( auth, email, password );
    }

    // This is for login
    const signIn = ( email, password ) =>{
        setLoading(true);
        return signInWithEmailAndPassword( auth, email, password );
    }

    // This is for logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Get the currently loggedin user 
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged( auth, currentUser =>{
            console.log('Current user inside state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe();
    },[] );

    const authInfo = { user, loading, createUser, signIn, logOut };
    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default UserContext;