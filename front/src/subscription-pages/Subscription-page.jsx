import React from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log(e.target[0].value)
        console.log(e.target[1].value)
    
      const suscribers = {
      "pseudo": e.target[0].value,
      "mail":e.target[1].value,
      "password": e.target[2].value,
      }

     
      try {
        const response = await axios.post(`http://localhost:3000/api/subscription` , suscribers)
        console.log(response)
        if(response){
            console.log("Utilisateur inscrit");
            navigate("/login-page");
        }else
        {console.log("inscription non effectué")}
            } catch (error) {
          console.log(error)
          }
    }

    return (
        <>
        <div className="flex flex-col-1 justify-center ">
        <div className='flex justify-between'>
        <form className="w-full max-w-lg mt-12" onSubmit={handleSubmit}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Pseudo">
        Username
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="pseudo" placeholder="Jane"/>
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="Email">
        @mail
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" name="mail"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      id="grid-password" 
      name='password'
      type="password" placeholder="******************"/>
      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
   
    </div>
    <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "type="submit">Inscription</button>
</form>
      
        </div>
        </div>
   
      
     </>
    );
};

export default Subscription;