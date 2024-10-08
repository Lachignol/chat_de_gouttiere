import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AllCourseAdmin() {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const requestCourses = async () => {
      setLoading(true);
      try {
        let requete = await axios.get(
          `http://localhost:3000/api/get-all-courses/`
        );
        if (requete.data) {
          setCourses(requete.data);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    requestCourses();
  }, []);

  const handleDelete = async (courseId) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/delete-course/${courseId}`,
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      console.log(`${courseId} supprimé`);
      setCourses(courses.filter((el) => el._id !== courseId));
    } catch (error) {
      console.error("Erreur lors de la suppression de la course:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {loading && <div>Loading</div>}
      {!loading && (
        <>
        <div className="flex flex-col">
         
              <div className=" flex justify-end mt-10">
                <Link
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  to={"/home-page"}
                > Allez sur le site
                </Link>
              </div>
            <h2 className="text-4xl mb-3 text-center pt-20">Espace administration</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full mt-4 mb-4">
                <thead className="border-2 border-black text-white bg-black ">
                  <tr>
                    <th>#</th>
                    <th>Nom de courses</th>
                    <th>date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr key={index} className="bg-white border-b">
                      <td className="p-2"><img className="w-10 h-10 rounded-full" src={`http://localhost:3000/${course.flyer.src}`} alt="flyer de la course" /></td>
                      <td className="p-2">{course.titre}</td>
                      <td className="p-2">{course.date}</td>
                      <td className="p-2 flex flex-col sm:flex-row gap-2">
                        <button
                          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                          onClick={() =>
                            navigate(`/add-checkpoint/${course._id}`)
                          }
                        >
                          Ajout de checkpoint
                        </button>

                        <button
                          className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                          onClick={() =>
                            navigate(`/update-course/${course._id}`)
                          }
                        >
                          Modifier course
                        </button>

                        <button
                          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                          onClick={() =>
                            navigate(`/add-time-user/${course._id}`)
                          }
                        >
                          Ajouter des temps
                        </button>

                        <button
                          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-4"
                          onClick={() => handleDelete(course._id)}
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
              <div className="flex justify-center mt-4">
                <Link
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  to={"/create-course"}
                >
                  Crée une nouvelle course
                </Link>
          </div>
          </>
      )}
    </div>
  );
}
