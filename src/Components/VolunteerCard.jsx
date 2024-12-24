import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const VolunteerCard = ({ singledata }) => {
  const { category, deadline, postTitle, thumbnailUrl, _id, volunteersNeeded } =
    singledata;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800">
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={postTitle}
        className="w-full h-48 object-cover"
      />

      {/* Card Content */}
      <div className="p-4">
        {/* Post Title */}
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
          {postTitle}
        </h3>

        {/* Category */}
        <div className="flex gap-3">
          <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full mb-3 dark:bg-blue-600 dark:text-blue-100">
            {category}
          </span>
          <span className="inline-block bg-blue-100 text-green-600 text-xs font-semibold px-4 py-1 rounded-full mb-3 dark:bg-green-600 dark:text-green-100">
            {volunteersNeeded}
          </span>
        </div>

        {/* Deadline */}
        <p className="text-sm text-gray-600 mb-4 dark:text-gray-400">
          <span className="font-medium">Deadline: </span> {deadline}
        </p>

        {/* View Details Button */}
        <Link to={`/volunteer-details/${_id}`}>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors dark:bg-blue-700 dark:hover:bg-blue-800">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerCard;
