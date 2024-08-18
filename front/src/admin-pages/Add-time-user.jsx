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
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
           <div className="text-end mt-10">
                <Link
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  to={"/admin/all-courses"}
                >{"Retournez sur l'espace administration"}
                </Link>
              </div>
          <div className="flex flex-col items-center relative translate-x-16">
            <div className="justify-start ">
              <h2 className="">Espace administration</h2>
              <h2 className="text-4xl mb-3 border-4 border-red">
                Ajouter un temps
              </h2>
              <div className="border-4 border-red justify-start">
                <table className="mt-4 mb-4">
                  <thead className="border-2 border-black text-white bg-black ">
                    <tr>
                      <th>Name</th>
                      <th>Finale time</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allcourseUsers.map((user, index) => (
                      <tr key={index}>
                        <td className="admin-table-td">{user.userName}</td>
                        <td className="admin-table-td">{user.finaleTime}</td>
                        <td className="admin-table-td">
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
            </div>
            <div className="">
              <form
                className="gap-6 mb-6 md:grid-col-2"
                onSubmit={handleSubmitUser}
              >
                <label
                  htmlFor="select-user"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an user
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
                  Choisir un utilisateur
                </button>
              </form>
            </div>
            <form
              className="grid gap-6 mb-6 md:grid-cols-1"
              onSubmit={handleSubmit}
            >
              <div className="">
                <label
                  htmlFor="User-id"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User-Id
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder={"userId"}
                  value={`${user._id}`}
                  name="userId"
                  onChange={onchange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="User-id"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User-Name
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder={"pseudo"}
                  value={`${user.pseudo}`}
                  onChange={onchange}
                  name="userName"
                  required
                />
              </div>
              <div className="flex justify-center gap-2">
                <label
                  htmlFor="checkpointsOrder"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  ordre des checkpoints
                </label>
                <input
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  type="text"
                  placeholder={"ordre des checkpoints"}
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
                <div>
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
