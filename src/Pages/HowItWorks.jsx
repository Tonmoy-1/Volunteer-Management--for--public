import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Sign Up to Volunteer",
      description:
        "Create an account and choose the causes you're passionate about. It's free and easy!",
      icon: "M20 12l-8-8-8 8",
    },
    {
      id: 2,
      title: "Browse Opportunities",
      description:
        "Explore available volunteer opportunities in your area and find the perfect match.",
      icon: "M12 5v14m7-7l-7-7-7 7",
    },
    {
      id: 3,
      title: "Make a Difference",
      description:
        "Start volunteering, help others, and make a positive impact in your community!",
      icon: "M12 21l-8-8 8-8",
    },
    {
      id: 4,
      title: "Share Your Story",
      description:
        "Share your experience with the community and inspire others to join the movement.",
      icon: "M6 6l6 6 6-6",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
          How It Works
        </h2>
        <p className="text-lg sm:text-xl mb-12">
          It&apos;s simple! Follow these steps to start making a difference
          today.
        </p>

        {/* Steps Grid */}
        <div className=" w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="mb-4 text-blue-600 dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-16 h-16 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={step.icon}
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {step.title}
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start?
          </h2>
          <p className="text-lg text-white mb-8">
            Join now and become part of a community dedicated to making the
            world a better place.
          </p>
          <Link
            to={"/register"}
            className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
