/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Spinner from "./Spiner";
import toast from "react-hot-toast";

const MyVolunteerNeedPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);
  const email = user?.email;

  useEffect(() => {
    fetchVolunteers();
  }, [email]);
  const fetchVolunteers = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/myvolunteer-needposts/?email=${email}`,
        { withCredentials: true }
      );
      setPosts(data);
      setLoading(false);
    } catch (error) {
      // setLoading(false);
      toast.error(error.message);
    }
  };

  // handle delete function

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/myvolunteer-needposts/${id}`
        );

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        fetchVolunteers();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
        My Volunteer Need Posts
      </h2>
      {loading && <Spinner />}

      {/* No Posts Message */}
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500 dark:text-gray-400">
            You haven’t added any volunteer posts yet.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden border dark:bg-gray-800 dark:border-gray-600">
            <thead className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white dark:bg-gradient-to-r dark:from-indigo-600 dark:to-blue-600">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-semibold uppercase text-gray-700 dark:text-gray-300">
                  Post Title
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold uppercase text-gray-700 dark:text-gray-300">
                  Category
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold uppercase text-gray-700 dark:text-gray-300">
                  Location
                </th>
                <th className="py-3 px-6 text-center text-sm font-semibold uppercase text-gray-700 dark:text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-colors dark:hover:bg-gray-700"
                >
                  <td className="py-3 px-6 text-sm text-gray-700 dark:text-gray-300">
                    {post.postTitle}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-700 dark:text-gray-300">
                    {post.category}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-700 dark:text-gray-300">
                    {post.location}
                  </td>
                  <td className="py-3 px-6 text-center ">
                    <Link to={`/update-data/${post._id}`}>
                      <button className="bg-green-500 text-white py-2 px-4 rounded-lg mb-2 hover:bg-green-600 transition-transform transform hover:scale-105 dark:bg-green-600 dark:hover:bg-green-500">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 ml-2 transition-transform transform hover:scale-105 dark:bg-red-600 dark:hover:bg-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyVolunteerNeedPosts;
