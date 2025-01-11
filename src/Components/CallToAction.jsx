import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="bg-blue-500 dark:bg-blue-500 px-4 w-full mx-auto py-14">
      <div className=" mx-auto px-2 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          Join our community of passionate volunteers and start creating a
          positive impact in your local area and beyond.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-white text-blue-600 hover:bg-gray-100 transition-colors font-semibold px-8 py-3 rounded-lg shadow-md"
          >
            Sign Up Now
          </Link>
          <Link
            to="/all-volunteers"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors font-semibold px-8 py-3 rounded-lg"
          >
            Explore Opportunities
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
