/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import Spinner from "./Spiner";

const MyVolunteerRequest = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const email = user?.email;

  useEffect(() => {
    fetchData();
  }, [user?.email]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/my-request/?email=${email}`
      );
      setRequests(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching requests:", error);
      alert("Failed to fetch requests. Please try again later.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Cancel it!",
      });
      if (result.isConfirmed) {
        await axios.delete(`${import.meta.env.VITE_API_URL}/my-request/${id}`);

        Swal.fire({
          title: "Canceled!",
          text: "Your Request has been Canceled.",
          icon: "success",
        });

        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
        My Volunteer Requests
      </h1>
      <p className="mb-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
        Viewing data for: {user?.email}
      </p>
      {requests.length > 0 ? (
        <div className="overflow-x-auto lg:overflow-visible">
          <table className="min-w-full bg-white shadow-md rounded-lg dark:bg-gray-800">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="text-left px-4 sm:px-6 py-2 sm:py-4 font-medium text-gray-600 dark:text-gray-300">
                  Title
                </th>
                <th className="text-left px-4 sm:px-6 py-2 sm:py-4 font-medium text-gray-600 dark:text-gray-300">
                  Category
                </th>
                <th className="text-left px-4 sm:px-6 py-2 sm:py-4 font-medium text-gray-600 dark:text-gray-300">
                  Volunteers Needed
                </th>
                <th className="text-left px-4 sm:px-6 py-2 sm:py-4 font-medium text-gray-600 dark:text-gray-300">
                  Deadline
                </th>
                <th className="text-left px-4 sm:px-6 py-2 sm:py-4 font-medium text-gray-600 dark:text-gray-300">
                  Status
                </th>
                <th className="text-left px-4 sm:px-6 py-2 sm:py-4 font-medium text-gray-600 dark:text-gray-300">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {loading && <Spinner />}
              {requests.map((request) => (
                <tr key={request.id} className="border-t dark:border-gray-600">
                  <td className="px-4 sm:px-6 py-2 sm:py-4 text-gray-800 dark:text-gray-200">
                    {request.postTitle}
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-4 text-gray-800 dark:text-gray-200">
                    {request.category}
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-4 text-gray-800 dark:text-gray-200">
                    {request.volunteersNeeded}
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-4 text-gray-800 dark:text-gray-200">
                    {request.deadline}
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        request.status === "Requested"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-600 dark:text-yellow-200"
                          : "bg-green-100 text-green-700 dark:bg-green-600 dark:text-green-200"
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-4">
                    <button
                      onClick={() => handleDelete(request._id)}
                      className="bg-red-500 text-white text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
          No volunteer requests found. Create a new one to get started!
        </p>
      )}
    </div>
  );
};

export default MyVolunteerRequest;
