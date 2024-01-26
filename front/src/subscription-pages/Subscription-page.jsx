import React from 'react';
import axios from "axios";

const Subscription = () => {


    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log(e.target[0].value)
        console.log(e.target[1].value)
    
      const suscribers = {
      "pseudo": e.target[0].value,
      "age":e.target[1].value,
      "mail":e.target[2].value,
      "password": e.target[3].value,
      }

     
      try {
        const response = await axios.post(`http://localhost:3000/api/subscription` , suscribers)
        console.log(response)
        if(response){
            console.log("Utilisateur inscrit");
        }else
        {console.log("inscription non effectué")}
            } catch (error) {
          console.log(error)
          }
    }

    return (
        
        <>
        <div className="flex flex-col-1 justify-center translate-x-32">
        <div className="subscription-title">
          <h2 className='text-center'>page d'inscription</h2>
        <div>
        <div className="add-title">
        <h2 className='text-center'>Formulaire d'inscription</h2>
        </div>
        <div className='flex justify-between'>
        <form className="grid gap-6 mb-6 md:grid-cols-2" onSubmit={handleSubmit} >
        <div>
        <label htmlFor="pseudo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pseudo</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder={"pseudo"}  name="pseudo"
        required/>
        </div>
        <div>
        <label htmlFor="date de naissance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">date de naissance</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder={"age"}
          name="age"
          required />
          </div>
          <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder={"mail"}
          name="mail"
          required />
          </div>
          <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder={"password"}
          name="password"
          required />
          </div>
        <button className=" translate-x-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "type="submit">Inscription</button>
        </form>
        </div>
        </div>
        </div>
        </div>
     </>
    );
};

export default Subscription;