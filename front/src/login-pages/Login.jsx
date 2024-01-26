import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginUser = {
      pseudo: e.target[0].value,
      password: e.target[1].value,
    };

    try {
      const response = await axios.post(
        `http://localhost:3000/api/login/`,
        loginUser
      );
      if (response) {
        console.log("User connecté");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("userRole", response.data.userRole);
        if (response.data.userRole === "Admin") {
          navigate("/admin/all-courses");
        }
        if (response.data.userRole === "User") {
          navigate("/home-page");
        }
      } else {
        console.log("utilisateur introuvable");
      }
    } catch (error) {
      if (error.response.status == 400) {
        console.log("mdp invalide");
      }
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col-1 justify-center translate-x-32">
        <div className="login-title">
          <h2 className="text-center">Page de login</h2>
          <div className="">
            <div className="text-center">
              <h2>Formulaire de connexion</h2>
            </div>
            <form className="add-form" onSubmit={handleSubmit}>
            <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <div className="flex">
  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
    </svg>
  </span>
              <input
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder={"pseudo"}
                name="pseudo"
                required
              />
              </div>
              <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="password"
                placeholder={"password"}
                name="password"
                required
              />
              </div>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Connexion</button>
            </form>
          </div>
          <button
            className="link-button"
            onClick={() => navigate(`/subscription-page/`)}
          >
            Toujours pas inscrit ? clique ici
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
