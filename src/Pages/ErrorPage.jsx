import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import errorImage from "../assets/error-image.webp";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <Helmet>
        <title>Error Nothing Here</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="text-center">
        <img
          src={errorImage}
          alt="Error Illustration"
          className="w-64 mx-auto mb-6"
        />
        <FaExclamationTriangle className="text-6xl text-red-500 mx-auto" />
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mt-4">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
