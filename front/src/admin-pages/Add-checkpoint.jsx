import axios from "axios";
import MapLocation from "../components/Map-location/Map-location";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const AddCheckpoint = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [adress, setAdress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkpoints, setCheckpoints] = useState([]);

  const courseId = useParams();

  useEffect(() => {
    const requestCheckpoints = async () => {
      setLoading(true);
      try {
        let requete = await axios.get(
          `http://localhost:3000/api/get-checkpoint/${courseId.id}`
        );
        if (requete.data) {
          setCheckpoints(requete.data);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    requestCheckpoints();
  }, []);

  
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
    } catch (error) {
      console.log(error)
    }
  };

  const handleDelete = async (checkpointName) => {
    try {
      console.log(checkpointName);
      await axios.delete(
        `http://localhost:3000/api/delete-checkpoint/${courseId.id}/${checkpointName}`,
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      console.log("checkpoint supprimé");
      setCheckpoints(checkpoints.filter((el) => el.name !== checkpointName));
      //trouver methode d'actualisation des course
    } catch (error) {
      console.error("Erreur lors de la suppression du checkpoint", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target[1].value);

    const checkpoint = {
      name: e.target[0].value,
      longitude: longitude,
      latitude: latitude,
    };
    try {
      const response = await axios.post(
        `http://localhost:3000/api/add-checkpoint/${courseId.id}`,
        checkpoint,
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      if (response) {
        console.log("checkpoint ajouté:");
        setCheckpoints([...checkpoints, checkpoint]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
  
    <div className="container mx-auto px-4 py-6">
    <div className="flex flex-col items-center">
        {loading && <div>Loading</div>}
        {!loading && (
          
            <div className="w-full lg:w-2/3">
              <h2 className="text-4xl text-center mb-6">Ajout de checkpoint</h2>
            <div className=" flex justify-end mb-6">
                <Link
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  to={"/admin/all-courses"}
                >{"Retournez sur l'espace administration"}
                </Link>
              </div>
              <table className="w-full mb-6 border-collapse border border-gray-300">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="border border-gray-300 p-2">Nom du checkpoint</th>
                    <th className="border border-gray-300 p-2">Longitude</th>
                    <th className="border border-gray-300 p-2">Latitude</th>
                    <th className="border border-gray-300 p-2">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {checkpoints.map((checkpoint, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 p-2">{checkpoint.name}</td>
                      <td className="border border-gray-300 p-2">{checkpoint.longitude}</td>
                      <td className="border border-gray-300 p-2">{checkpoint.latitude}</td>
                      <td className="border border-gray-300 p-2">
                        <button
                          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                          onClick={() => handleDelete(checkpoint.name)}
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            
            
          </div>
        )}
        <div className="w-full lg:w-2/3 ">
          <form onSubmit={handleSubmit}className="mb-6" >
            <div className="grid gap-6 mb-6">
              <label
                htmlFor="Nom du nouveau checkpoint"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nom du nouveau checkpoint:
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder={"Entrez le nom du nouveau checkpoint"}
                name="name"
                required
              />
              <div className="">
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="submit"
                >
                  Ajout du nouveau checkpoint:
                </button>
              </div>
            </div>
          </form>
            <form onSubmit={handleAdress} className="mb-6">
              <div className="grid gap-6">
                <div>
                <label
                  htmlFor="Adresse du nouveau checkpoint"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Adresse du nouveau checkpoint:
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder={"Entrez l'adresse du nouveau checkpoint"}
                  name="adress"
                />
</div>
<div>
                <button
                  className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="submit"
                >{"Valider l'adresse (cliqué 2 fois sur la carte pour recentrer sur l'adresse)"}
                </button>
              </div>
              </div>
            </form>
            {adress && (
          <div className="mt-6">
              <MapLocation longitude={longitude} latitude={latitude} />
          </div>
            )}
            </div>
      </div>
    </div>
  );
};

export default AddCheckpoint;
