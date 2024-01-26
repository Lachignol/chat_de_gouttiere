import React from "react";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Map from "../components/Map/Map";

const Classement = () => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState([]);
  const [courseTemp, setCourseTemp] = useState([]);
  const [classement, setClassement] = useState([]);
  const [checkpointsOfCourse, setCheckpointsOfCourse] = useState([]);
  const [checkpointsOrderOfUsers, setCheckpointsOrderOfUsers] = useState([]);
  const [checkpointsOrderOfUser, setCheckpointsOrderOfUser] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const requestCourse = async () => {
      setLoading(true);
      try {
        let requeteRecupCourse = await axios.get(
          `http://localhost:3000/api/get-all-courses/`
        );
        if (requeteRecupCourse.data) {
          setCourse(requeteRecupCourse.data);
        }
      } catch (error) {
        console.log(error);
      }
      console.log(course);
      setLoading(false);
    };
    requestCourse();
  }, []);

  const handleCourse = async (e) => {
    e.preventDefault();
    try {
      const courseId = e.target[0].value;
      console.log(courseId);
      let requeteRecupCourseTemp = await axios.get(
        `http://localhost:3000/api/get-one-course/${courseId}`
      );
      setCourseTemp(requeteRecupCourseTemp.data);
      let requeteRecupCheckpointOfCourse = await axios.get(
        `http://localhost:3000/api/get-checkpoint/${courseId}`
      );
      if (requeteRecupCheckpointOfCourse) {
        setCheckpointsOfCourse(requeteRecupCheckpointOfCourse.data);
        let requeteRecupClassement = await axios.get(
          `http://localhost:3000/api/get-classement/${courseId}`
        );
        if (requeteRecupClassement) {
          setClassement(requeteRecupClassement.data);
          let requeteRecupCheckpointOrder = await axios.get(
            `http://localhost:3000/api/get-checkpoint-info/${courseId}`
          );
          if (requeteRecupCheckpointOrder) {
            console.log(requeteRecupCheckpointOrder.data);
            setCheckpointsOrderOfUsers(requeteRecupCheckpointOrder.data);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserCheckpointOrder = async (userId) => {
    try {
      setCheckpointsOrderOfUser();
      console.log(userId);
      console.log(checkpointsOrderOfUsers);
      let userCheckpoints = checkpointsOrderOfUsers.filter(
        (el, i) => el.userId == userId
      );
      console.log(userCheckpoints);
      setCheckpointsOrderOfUser(...userCheckpoints);

      console.log(checkpointsOrderOfUser);
    } catch (error) {
      console.error(
        "Erreur lors l'affichage de l'ordre de passage des checkpoint:",
        error
      );
    }
  };
  const handleChange = () => {
    setChecked(!checked);
    setCheckpointsOrderOfUser([]);
  };

  return (
    <div>
      <Navbar />
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <div className="absolute w-full z-20">
            <Map checkpoint={checkpointsOrderOfUser} />
          </div>

          <div className="">
            <div className="mt-15">
              <form
                className="flex-col flex items-center "
                onSubmit={handleCourse}
              >
                <label
                  htmlFor="select-course"
                  className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select une course
                </label>
                <select
                  id="animals"
                  className="block mt-20 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  name="animals"
                >
                  {course.map((el, i) => (
                    <option value={el._id} key={i}>
                      {el.titre}
                    </option>
                  ))}
                </select>
                <div className="flex justify-center mt-2">
                  <button
                    className="flex-row justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="submit"
                  >
                    Choisir une course
                  </button>
                </div>
              </form>
            </div>
          </div>

          {courseTemp.flyer && (
            <div>
            <section className="relative pt-12 bg-blueGray-50 mt-10">
              <div className="items-center flex flex-wrap">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-lg"
                    src={`http://localhost:3000/${courseTemp.flyer.src}`}
                  />
                </div>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                  <div className="md:pr-12">
                    <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300 mt-8">
                      <i className="fas fa-rocket text-xl"></i>
                    </div>
                    <h3 className="text-3xl font-semibold">
                      {courseTemp.titre}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                      {courseTemp.description}
                    </p>
                    <ul className="list-none mt-6">
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                              <i className="fas fa-fingerprint"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-blueGray-500">
                              Date:{courseTemp.date}
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                              <i className="fab fa-html5"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-blueGray-500">
                              heure de départ:{course.hdd}
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <footer className="relative  pt-8 pb-6 mt-8">
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-6/12 px-4 mx-auto text-center"></div>
                  </div>
                </div>
              </footer>
            </section>

          <div className="flex">
            <input
              type="checkbox"
              id="drawer-toggle"
              className="relative sr-only peer "
              checked={checked}
              onChange={handleChange}
              />
            <label
              htmlFor="drawer-toggle"
              className="absolute top-20 z-20 right-1 inline-block p-4 transition-all duration-500  bg-blue-700 rounded-lg peer-checked:right-64 "
              >
              <div className="text-white">
                {!checked ? `Classement` : `fermer`}
              </div>
            </label>
            <div className="fixed -top-2 right-0 z-20 w-64 h-full transition-all duration-500 transform translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
              <div className="px-6 py-4">
                <h2 className="text-lg text-center font-semibold mb-9">
                  Classement
                </h2>
                <ul>
                  {classement.map((el, i) => (
                    <li key={i}>
                      {i == 0 && (
                        <div>
                          <button
                            className="text-white bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-yellow-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"
                            onClick={() => handleUserCheckpointOrder(el.userId)}
                            >
                            {`Nom du coureur n°${i + 1}: ${
                              el.userName
                            }  chrono: ${el.finaleTime}`}
                            <img
                              className="w-14 m-auto"
                              src="/premierpos.png/"
                              />
                          </button>
                        </div>
                      )}
                      {i == 1 && (
                        <div>
                          <button
                            className="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-yellow-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"
                            onClick={() => handleUserCheckpointOrder(el.userId)}
                            >
                            {`Nom du coureur n°${i + 1}: ${
                              el.userName
                            }  chrono: ${el.finaleTime}`}
                            <img
                              className="w-14 m-auto"
                              src="/deuxiemepos.png/"
                              />
                          </button>
                        </div>
                      )}
                      {i == 2 && (
                        <div>
                          <button
                            className="text-white bg-yellow-600 hover:bg-yellow-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"
                            onClick={() => handleUserCheckpointOrder(el.userId)}
                            >
                            {`Nom du coureur n°${i + 1}: ${
                              el.userName
                            }  chrono: ${el.finaleTime}`}
                            <img
                              className="w-14 m-auto"
                              src="/troisiemepos.png/"
                              />
                          </button>
                        </div>
                      )}
                      {i == 3 && (
                        <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"
                        onClick={() => handleUserCheckpointOrder(el.userId)}
                        >
                          {`Nom du coureur n°${i + 1}: ${
                            el.userName
                          }  chrono: ${el.finaleTime}`}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              </div>
              </div>
            </div>)}
          </div>
        
      )}
       
    </div>
     
  );
};

export default Classement;
