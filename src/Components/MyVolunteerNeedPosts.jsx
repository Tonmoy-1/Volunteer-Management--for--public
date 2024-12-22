/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyVolunteerNeedPosts = () => {
  const [posts, setPosts] = useState([]);

  const { user } = useContext(AuthContext);
  const email = user?.email;

  useEffect(() => {
    fetchVolunteers();
  }, [email]);
  const fetchVolunteers = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/myvolunteer-needposts/?email=${email}`
      );
      setPosts(data);
    } catch (error) {
      console.log(error);
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
        const { data } = await axios.delete(
          `${import.meta.env.VITE_API_URL}/myvolunteer-needposts/${id}`
        );

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        console.log(data);
        fetchVolunteers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        My Volunteer Need Posts
      </h2>

      {/* No Posts Message */}
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">
            You haven’t added any volunteer posts yet.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden border">
            <thead className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-semibold uppercase">
                  Post Title
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold uppercase">
                  Category
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold uppercase">
                  Location
                </th>
                <th className="py-3 px-6 text-center text-sm font-semibold uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-6 text-sm text-gray-700">
                    {post.postTitle}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-700">
                    {post.category}
                  </td>
                  <td className="py-3 px-6 text-sm text-gray-700">
                    {post.location}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <Link to={`/update-data/${post._id}`}>
                      <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 ml-2 transition-transform transform hover:scale-105"
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
