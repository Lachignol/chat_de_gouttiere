import axios from "axios";
import { Link, useParams } from "react-router-dom";
import MapLocation from "../components/Map-location/Map-location";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function ModifyCourse() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [, setAdress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState([]);
  const [showMap, setShowMap] = useState(false)
  const navigate = useNavigate();
  const courseId = useParams();

  useEffect(() => {
    const requestCourse = async () => {
      setLoading(true);
      try {
        let requete = await axios.get(
          `http://localhost:3000/api/get-one-course/${courseId.id}`
        );
        if (requete.data) setCourse(requete.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    requestCourse();
  }, []);


  
  const onchange = async (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

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
      setLatitude(response.data.features[0].geometry.coordinates[0]);
      setLongitude(response.data.features[0].geometry.coordinates[1]);
      setShowMap(true);
    } catch (error) {
      console.log(error)
    }
  };
  // const onchangeLocalisation = async (e) => {
  //   setCourse({
  //     ...course,
  //     ["localisation"]: {
  //       ...course.localisation,
  //       [e.target.name]: e.target.value,
  //     },
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const course = new FormData();
    course.set("titre", e.target[0].value);
    course.set("date", e.target[1].value);
    course.set("hdd", e.target[2].value);
    course.set("longitude", longitude);
    course.set("latitude", latitude);
    course.set("description", e.target[3].value);
    course.set("flyer", e.target[4].files[0]);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/update-course/${courseId.id}`,
        course,
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      if (response) {
        console.log("course modifié:");
        navigate("/admin/all-courses");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="container mx-auto px-4">
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <div className="flex flex-col">
            <div className=" text-end mt-12 mb-4">
                <Link
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  to={"/admin/all-courses"}
                >{"Retournez sur l'espace administration"}
                </Link>
              </div>
            <h2 className="text-center text-4xl mb-3">Modifier une course</h2>
            <div className="flex justify-center">
              <div className="w-full lg:w-1/2 ">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="Nom de la course"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Nom de la course
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        placeholder={"titre"}
                        value={`${course.titre}`}
                        name="titre"
                        onChange={onchange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="date de la course"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Date de la course
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        placeholder={"date"}
                        value={`${course.date}`}
                        onChange={onchange}
                        name="date"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="Heure de départ"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Heure de départ
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        placeholder={"heure de départ"}
                        value={`${course.hdd}`}
                        onChange={onchange}
                        name="hdd"
                        required
                      />
                    </div>
                    {/* <input
                      className="add-input"
                      type="text"
                      placeholder={"longitude"}
                      value={`${course.localisation.longitude}`}
                      onChange={onchangeLocalisation}
                      name="longitude"
                      required
                    />
                    <input
                      className="add-input"
                      type="text"
                      placeholder={"latitude"}
                      value={`${course.localisation.latitude}`}
                      onChange={onchangeLocalisation}
                      name="latitude"
                      required
                    /> */}
                    <div>
                      <label
                        htmlFor="Nom de la course"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="textarea"
                        placeholder={"description"}
                        value={`${course.description}`}
                        onChange={onchange}
                        name="description"
                        required
                      />
                    </div>
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="file_input"
                    >
                      Ajouter le flyer de la course
                    </label>
                    <input
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      type="file"
                      name="flyer"
                      required
                    ></input>
                    <button
                      className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-green mt-4"
                      type="submit"
                    >
                      Modifier course
                    </button>
                  </form>
                  <form
                    className="space-y-6 mt-6"
                    onSubmit={handleAdress}
                  >
                    <div>
                      <label
                        htmlFor="Adresse de la course"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Changer lieu de départ{" "}
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        placeholder={"Tapez un nouveau lieu de départ"}
                        name="adress"
                      />
                      <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                        type="submit"
                      >{"Valider l'adresse"}<br />{"(cliqué 2 fois sur la carte pour recentrer sur l'adresse)"}
                      </button>
                    </div>
                  </form>
                  <div className="-translate-x-32">
                </div>
                
              </div>
            </div>
          </div>
        </div>
      )}
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
  );
}
