import React from "react";
import axios from "axios";
import MapLocation from "../components/Map-location/Map-location";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormCreateCourse() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [showMap, setShowMap] = useState(false)
  const [adress, setAdress] = useState(null);
  const navigate = useNavigate();

  const handleAdress = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    // setAdress(e.target.value)
    try {
      const response = await axios.get(
        `https://api-adresse.data.gouv.fr/search/?q=${e.target[0].value}`
      );
      console.log(response.data);

      setAdress(response.data.features[0].properties.label);
      setShowMap(true);
      setLatitude(response.data.features[0].geometry.coordinates[0]);
      setLongitude(response.data.features[0].geometry.coordinates[1]);
    } catch (error) {
      console.log(error);
      
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target[4].value);

    const course = new FormData();
    course.set("titre", e.target[0].value);
    course.set("date", e.target[1].value);
    course.set("hdd", e.target[2].value);
    course.set("description", e.target[3].value);
    course.set("longitude", longitude);
    course.set("latitude", latitude);
    course.set("flyer", e.target[4].files[0]);

    console.log(course);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/add-course/",
        course,
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      if (response) {
        console.log("course ajouté:");
        navigate("/admin/all-courses");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
        <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Espace administration
        </h2>
        <div className="form-container">
          <div className="add-title mb-4">
            <h2 className="text-xl font-semibold text-center">
              Ajouter une course
            </h2>
          </div>

            <form className="grid gap-6 mb-6 md:grid-cols-2" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="titre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom de la course</label>             
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder={"titre"}
                name="titre"
                required
              />
              </div>
              <div>
            <label htmlFor="date de la course" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date de la course</label>         
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder={"date"}
                name="date"
                required
              />
              </div>
              <div>
            <label htmlFor="hdd" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Heure de depart</label>         
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder={"heure de départ"}
                  name="hdd"
                  required
                />
                </div>
                <div>
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>         
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder={"description"}
                  name="description"
                  required
                />
              </div>
              <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
              <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" name="flyer" required></input>
              <button className="mt- text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"type="submit">Ajouter course</button>
              </div>
            </form>
            <form className="grid gap-6 mb-6 md:grid-cols-2" onSubmit={handleAdress}>
            <div className="mb-6">
            <label htmlFor="lieu de depart" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lieu de départ</label> 
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder={"adress de depart"}
                name="adress"
              />
                 <div className="flex justify-center md:col-span-2">
              <button className ="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"type="submit">Valider l'adresse <br/> (cliqué 2 fois sur la carte pour recentrer sur l'adresse)</button>
              </div>
              </div>
            </form>
            </div>
            </div>
            {showMap && (
        <div className="w-full mb-8">
          <div className="relative w-full px-28 rounded-lg shadow-lg">
            <MapLocation longitude={longitude} latitude={latitude} />
            <button
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg px-2 py-1"
              onClick={() => setShowMap(false)} // Fermer la carte
            >
              Fermer la carte
            </button>
          </div>
        </div>
      )}
      </div>
      
    </>
  );
}
