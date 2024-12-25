import axios from "axios";
import { useState, useEffect } from "react";
import VolunteerCard from "../Components/VolunteerCard";
import { FaTh, FaTable } from "react-icons/fa";
import Spinner from "../Components/Spiner";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const AllVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("card");

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/all-volunteers?search=${search}`
        );
        setVolunteers(data);
        setLoading(false);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchVolunteers();
  }, [search]);

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white dark:bg-gray-900">
      <Helmet>
        <title>All Volunteer Need Post</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-900 dark:text-blue-300">
        Volunteer Opportunities
      </h1>

      <div className="flex gap-5 justify-center mb-12 items-center">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by post title..."
          className="w-full max-w-2xl px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        {/* Toggle Button with Different Icons */}
        <div className="flex gap-4">
          <div onClick={() => setViewMode("card")}>
            <FaTable className="inline-block mr-2 md:text-4xl cursor-pointer" />
          </div>
          <div onClick={() => setViewMode("table")}>
            <FaTh className="inline-block mr-2 md:text-4xl cursor-pointer" />
          </div>
        </div>
      </div>

      {loading && <Spinner />}

      {/* Conditional Rendering based on View Mode */}
      {viewMode === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteers.length > 0 ? (
            volunteers.map((volunteer, index) => (
              <VolunteerCard key={index} singledata={volunteer} />
            ))
          ) : (
            <p className="text-center text-xl text-gray-500 dark:text-gray-400 col-span-full">
              No volunteer posts found.
            </p>
          )}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left bg-gray-100 dark:bg-gray-700">
                <th className="p-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                  Thumbnail
                </th>
                <th className="p-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                  Title
                </th>
                <th className="p-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                  Category
                </th>
                <th className="p-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                  Volunteers Needed
                </th>
                <th className="p-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                  Deadline
                </th>
                <th className="p-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {volunteers.length > 0 ? (
                volunteers.map((volunteer, index) => (
                  <tr key={index} className="bg-white dark:bg-gray-800">
                    <td className="p-4">
                      <img
                        src={volunteer.thumbnailUrl}
                        alt={volunteer.postTitle}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </td>
                    <td className="p-4 text-lg font-bold text-gray-800 dark:text-gray-200">
                      {volunteer.postTitle}
                    </td>
                    <td className="p-4">
                      <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full dark:bg-blue-600 dark:text-blue-100">
                        {volunteer.category}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-block bg-blue-100 text-green-600 text-xs font-semibold px-4 py-1 rounded-full dark:bg-green-600 dark:text-green-100">
                        {volunteer.volunteersNeeded}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Deadline: </span>{" "}
                      {volunteer.deadline}
                    </td>
                    <td className="p-4">
                      <Link to={`/volunteer-details/${volunteer._id}`}>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors dark:bg-blue-700 dark:hover:bg-blue-800">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center text-xl text-gray-500 dark:text-gray-400"
                  >
                    No volunteer posts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllVolunteers;
