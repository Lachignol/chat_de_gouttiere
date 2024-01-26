import React from 'react';


const Deconnexion = () => {
    
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("userRole")
    console.log("utilisateur déconnecté")
    window.location.replace('/login-page/'); 
    // window.location.reload()
    
   };
  

   export default Deconnexion