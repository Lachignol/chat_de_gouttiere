import React from 'react';
import axios from "axios";
import Login from '../login-pages/Login';

const Authentification = ({children}) => {
    
 const token = localStorage.getItem("token")
        if (!token){ 
        return <Login/>}
        console.log("connexion reconnu")
          return children
};

export default Authentification;