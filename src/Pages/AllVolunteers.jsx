import axios from "axios";
import { useState, useEffect } from "react";
import VolunteerCard from "../Components/VolunteerCard";
import Spinner from "../Components/Spiner";

const AllVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/all-volunteers?search=${search}`
        );
        setVolunteers(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVolunteers();
  }, [search]);
  console.log(search);

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-900 dark:text-blue-300">
        Volunteer Opportunities
      </h1>
      {loading && <Spinner />}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by post title..."
          className="w-full max-w-2xl px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
      </div>

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
    </div>
  );
};

export default AllVolunteers;
