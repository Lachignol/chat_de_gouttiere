import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import "./Prochaine-Course.css";
import Navbar from "../components/Navbar/Navbar";
import "../components/Navbar/Navbar";

const ProchaineCourse = () => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const requestCourse = async () => {
      setLoading(true);
      try {
        let requete = await axios.get(
          `http://localhost:3000/api/get-all-courses/`
        );
        if (requete.data) {
          setCourse(requete.data[requete.data.length - 1]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    requestCourse();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="bg-">
        {loading && <div>Loading</div>}
        {!loading && (
          <div>
            <section className="relative pt-12 bg-blueGray-50 mt-10">
              <div className="items-center flex flex-wrap">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-lg"
                    src={`http://localhost:3000/${course.flyer.src}`}
                  />
                </div>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                  <div className="md:pr-12">
                    <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300 mt-8">
                      <i className="fas fa-rocket text-xl"></i>
                    </div>
                    <h3 className="text-3xl font-semibold">{course.titre}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                      {course.description}
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
                              Date:{course.date}
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
          </div>
        )}
      </div>
    </div>
  );
};

export default ProchaineCourse;
