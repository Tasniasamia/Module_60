import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Authproviderdata } from '../Layout/Authprovider';

const Provider = ({children}) => {
    const receivedata=useContext(Authproviderdata);
    const {userdata,loading}=receivedata;
    if(userdata){
        return children;
    }

    if(loading){
return <progress className="progress w-56"></progress>
    }    
           
    return (
        
  <Navigate  to="/Login" replace={true}></Navigate > 
       
    );
};

export default Provider;