/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

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

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
        My Volunteer Requests
      </h1>
      <p className="mb-4 text-sm sm:text-base">
        Viewing data for: {user?.email}
      </p>
      {loading ? (
        <p className="text-center text-gray-500 mt-10">Loading...</p>
      ) : requests.length > 0 ? (
        <div className="overflow-x-auto lg:overflow-visible">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 sm:px-6 py-2 sm:py-4 font-medium text-gray-600">
                  Title
                </th>
                <th className="text-left px-4 sm:px-6 py-2 sm:py-4 font-medium text-gray-600">
                  Description
                </th>
                <th className="text-left px-4 sm:px-6 py-2 sm:py-4 font-medium text-gray-600">
                  Category
                </th>
                <th className="text-left px-4 sm:px-6 py-2 sm:py-4 font-medium text-gray-600">
                  Location
                </th>
                <th className="text-left px-4 sm:px-6 py-2 sm:py-4 font-medium text-gray-600">
                  Volunteers Needed
                </th>
                <th className="text-left px-4 sm:px-6 py-2 sm:py-4 font-medium text-gray-600">
                  Deadline
                </th>
                <th className="text-left px-4 sm:px-6 py-2 sm:py-4 font-medium text-gray-600">
                  Status
                </th>
                <th className="text-left px-4 sm:px-6 py-2 sm:py-4 font-medium text-gray-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-t">
                  <td className="px-4 sm:px-6 py-2 sm:py-4">
                    {request.postTitle}
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-4">
                    {request.description}
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-4">
                    {request.category}
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-4">
                    {request.location}
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-4">
                    {request.volunteersNeeded}
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-4">
                    {request.deadline}
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        request.status === "Requested"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-4">
                    <button className="bg-red-500 text-white text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-red-600">
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No volunteer requests found. Create a new one to get started!
        </p>
      )}
    </div>
  );
};

export default MyVolunteerRequest;
