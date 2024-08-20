import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const AddTimeUser = () => {
  const [loading, setLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const [allcourseUsers, setAllCourseUsers] = useState([]);
  const [user, setUser] = useState([]);
  const courseId = useParams();

  useEffect(() => {
    const requestAllUsers = async () => {
      setLoading(true);
      try {
        let requeteAllUsers = await axios.get(
          `http://localhost:3000/api/get-all-users/`,
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        );
        let requeteAllCourseUsers = await axios.get(
          `http://localhost:3000/api/get-chrono-users/${courseId.id}`
        );
        if (requeteAllUsers.data) setUser(requeteAllUsers.data[0]);
        setAllUsers(requeteAllUsers.data);
        setAllCourseUsers(requeteAllCourseUsers.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    requestAllUsers();
  }, []);

  const onchange = async (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.value);

    const chrono_user = {
      userId: e.target[0].value,
      userName: e.target[1].value,
      checkpointsOrder: e.target[2].value,
      finaleTime: e.target[3].value,
    };

    try {
      if (chrono_user.userId && chrono_user.userName != "undefined") {
        const response = await axios.post(
          `http://localhost:3000/api/add-chrono-user/${courseId.id}`,
          chrono_user,
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        );
        if (response) {
          console.log("chrono ajouté:");
          setAllCourseUsers([...allcourseUsers, chrono_user]);
        }
      } else {
        console.log("ajouté un utilisateur avant de valider");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitUser = async (e) => {
    e.preventDefault();
    const userId = e.target[0].value;
    try {
      const response = await axios.get(
        `http://localhost:3000/api/get-one-user/${userId}`,
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      if (response) {
        console.log("utlisateur trouvé");
        setUser(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (username) => {
    try {
      console.log(username);
      await axios.delete(
        `http://localhost:3000/api/delete-chrono-user/${courseId.id}/${username}`,
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      setAllCourseUsers(
        allcourseUsers.filter((el) => el.userName !== username)
      );
    } catch (error) {
      console.error("Erreur lors de la suppression de la course:", error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      {loading && <div>Loading</div>}
      {!loading && (
        <div className="flex flex-col items-center">
          <div className="text-end mt-10 w-full">
                <Link
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  to={"/admin/all-courses"}
                >{"Retournez sur l'espace administration"}
                </Link>
              </div>
              <div className="w-full max-w-4xl mt-10">
              <h2 className="text-2xl text-center font-bold mb-6">
                Ajouter un temps
              </h2>
              <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="min-w-full bg-white">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="py-3 px-6 text-left">Name</th>
                      <th className="py-3 px-6 text-left">Finale time</th>
                      <th className="py-3 px-6 text-left">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allcourseUsers.map((user, index) => (
                      <tr key={index}>
                        <td className="py-3 px-6">{user.userName}</td>
                        <td className="py-3 px-6">{user.finaleTime}</td>
                        <td className="py-3 px-6">
                          <button
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            onClick={() => handleDelete(user.userName)}
                          >
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
           
              <div className="mt-8 w-full">
              <form
                className="flex flex-col md:flex-row gap-4"
                onSubmit={handleSubmitUser}
              >
                <label
                  htmlFor="select-user"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Selectionnez un utilisateur:
                </label>
                <select className='class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                  {allUsers.map((el, i) => (
                    <option value={el._id} key={i}>
                      {el.pseudo}
                    </option>
                  ))}
                </select>
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="submit"
                >
                   {"Confirmer l'utilisateur"}
                </button>
              </form>
            </div>
            <form
              className="mt-8 grid gap-6 mb-6 md:grid-cols-1"
              onSubmit={handleSubmit}
            >
              <div className="">
                <label
                  htmlFor="User-id"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="hidden"
                  placeholder={"userId"}
                  value={`${user._id}`}
                  name="userId"
                  onChange={onchange}
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="User-id"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Utilisateur Selectionné
                </label>
                <input
                  className="bg-orange-50 border border-orange-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-orange-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                  type="text"
                  readOnly="readOnly"
                  placeholder={"pseudo"}
                  value={`${user.pseudo}`}
                  onChange={onchange}
                  name="userName"
                  required
                />
              </div>
              <div className="col-span-1 grid grid-cols-1 gap-4">
                <label
                  htmlFor="checkpointsOrder"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Ordre des checkpoints:
                </label>
                <input
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  type="text"
                  placeholder={"format suivant: 1;2;4;6"}
                  onChange={onchange}
                  name="checkpointsOrder"
                  required
                />

                <label
                  htmlFor="arrival-time"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  {"heure d'arrivé"}
                </label>
                <input
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  type="text"
                  placeholder={"temps final"}
                  onChange={onchange}
                  name="finaleTime"
                  required
                />
                <div className="col-span-1 flex justify-center">
                  <button
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    type="submit"
                  >
                    Ajouter chrono
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTimeUser;
