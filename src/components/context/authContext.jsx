import { createContext, useContext } from "react";
import React from "react";
import { auth } from "../../../firebase/firebase";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
};


export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true)

    async function initializeUser(user) {
        if(user){
            setCurrentUser({...user})
            setUserLoggedIn(true)
           
        } else{
            setCurrentUser(null)
            setUserLoggedIn(false)
        }
        setLoading(false)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, initializeUser)
        return unsubscribe
    },[])

const value = {
         currentUser,
        userLoggedIn,
        loading
    };


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
            </AuthContext.Provider>
    )
       


}