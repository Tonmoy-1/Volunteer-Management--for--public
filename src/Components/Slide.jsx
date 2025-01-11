/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[20rem] md:h-[28rem] rounded-lg shadow-lg overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-black/60 to-black/30">
        <div className="text-center px-4 md:px-12">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4">
            {text}
          </h1>
          <br />
          <Link
            to="/all-volunteers"
            className="px-6 md:px-8 py-3 md:py-4 mt-4 md:mt-6 text-base md:text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
          >
            Be A Volunteer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
