import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/all-volunteers`
        );
        setVolunteers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVolunteers();
  }, []);
  console.log(volunteers);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-900">
        Volunteer Opportunities
      </h1>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search by post title..."
          className="w-full max-w-2xl px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {volunteers.length > 0 ? (
          volunteers.map((volunteer) => (
            <div
              key={volunteer.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
            >
              <img
                src={volunteer.thumbnailUrl}
                alt={volunteer.postTitle}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-blue-800">
                  {volunteer.postTitle}
                </h2>
                <p className="text-gray-600 mt-4 line-clamp-3">
                  {volunteer.description}
                </p>
                <div className="mt-6">
                  <Link
                    to={`/volunteer-details/${volunteer._id}`}
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl text-gray-500 col-span-full">
            No volunteer posts found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllVolunteers;
