import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/Firebase';
export const Authproviderdata=createContext(null);
const Authprovider = ({children}) => {
const[userdata,setUser]=useState(null);
const[loading,setLoading]=useState(true);
    const auth = getAuth(app)
    function createsignup(email,password){
        return createUserWithEmailAndPassword(auth, email, password);

    }
    function signin(email,password){

return signInWithEmailAndPassword(auth, email, password)

    }

    function logout(){
        const auth = getAuth();
signOut(auth).then(() => {
    setUser('');
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, user=> {
         
              setUser(user);
              setLoading(false);
             
          });
          return ()=>{
            unsubscribe()
          };
    },[])
const data="first_fight";
    const user={
        userdata,
data,createsignup,signin,logout,loading

    }
    return (
        <Authproviderdata.Provider value={user}>

{children}
        </Authproviderdata.Provider>
            
        
    );
};

export default Authprovider;