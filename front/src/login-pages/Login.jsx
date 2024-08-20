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
      <div className="flex flex-col-1 justify-center">
          <div className="w-full max-w-xs">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="pseudo"
                  type="text"
                  placeholder="pseudo"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder={"********"}
                />
                <p className="text-red-500 text-xs italic">
                  Please choose a password.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Connexion
                </button>
                <button
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  onClick={() => navigate(`/subscription-page/`)}
                >
                  Toujours pas inscrit? cliquez ici
                </button>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy;2024Lachignol Corp. All rights reserved.
            </p>
          </div>
        </div>
    </>
  );
};

export default Login;
