import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [ user, setUser ] = useState(null);

    // This is for Sign Up
    const createUser = ( email, password ) =>{
        return createUserWithEmailAndPassword( auth, email, password );
    }

    // This is for login
    const signIn = ( email, password ) =>{
        return signInWithEmailAndPassword( auth, email, password );
    }

    // This is for logout
    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = { user, createUser, signIn, logOut };
    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

export default UserContext;