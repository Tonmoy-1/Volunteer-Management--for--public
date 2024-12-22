import axios from "axios";
import { useState, useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { useParams } from "react-router-dom";

const VolunteerDetails = () => {
  const [volunteer, setVolunteer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/volunteer-details/${id}`
        );
        setVolunteer(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  if (!volunteer) {
    return (
      <div className="text-center py-20 text-xl">
        Loading Volunteer Details...
      </div>
    );
  }

  const {
    postTitle,
    description,
    deadline,
    location,
    organizerName,
    organizerEmail,
    volunteersNeeded,
    thumbnailUrl,
  } = volunteer;

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-blue-100  rounded-lg mt-10">
      <div className="flex flex-col md:flex-row md:space-x-12 items-center">
        <img
          src={thumbnailUrl}
          alt={postTitle}
          className="w-80 h-80 object-cover rounded-xl shadow-lg border-4 border-blue-300"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-blue-900">{postTitle}</h1>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            {description}
          </p>
          <div className="mt-8 space-y-6">
            <div className="flex items-center justify-center md:justify-start">
              <FaCalendarAlt className="text-blue-600 mr-3 text-xl" />
              <span className="text-gray-800 text-lg">
                <strong>Deadline:</strong> {deadline}
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <FaMapMarkerAlt className="text-red-500 mr-3 text-xl" />
              <span className="text-gray-800 text-lg">
                <strong>Location:</strong> {location}
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <FaUser className="text-green-600 mr-3 text-xl" />
              <span className="text-gray-800 text-lg">
                <strong>Volunteers Needed:</strong> {volunteersNeeded}
              </span>
            </div>
            <div className="text-gray-800 mt-6">
              <p className="text-lg">
                <strong>Organizer:</strong> {organizerName}
              </p>
              <p className="text-lg">
                <strong>Contact:</strong> {organizerEmail}
              </p>
            </div>
          </div>
          <button className="mt-10 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-md">
            Be a Volunteer
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetails;
