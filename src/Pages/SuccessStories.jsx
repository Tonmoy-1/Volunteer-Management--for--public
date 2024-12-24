import { Link } from "react-router-dom";

const SuccessStories = () => {
  // Example data for the success stories
  const stories = [
    {
      id: 1,
      title: "How Sarah Helped Build a Community Garden",
      description:
        "Sarah volunteered with a local nonprofit to help create a community garden that now serves as a gathering place for local families.",
      image: " https://i.ibb.co.com/BZ4Vdqq/pexels-shvetsa-5029855.jpg",
      link: "/story/1",
    },
    {
      id: 2,
      title: "John's Impact on Local Education",
      description:
        "John spent his weekends tutoring children in his neighborhood, helping them improve their academic skills and confidence.",
      image: "https://i.ibb.co.com/WsMxdjC/pexels-thirdman-7656742.jpg",
      link: "/story/2",
    },
    {
      id: 3,
      title: "Emma's Work at the Animal Shelter",
      description:
        "Emma volunteered at an animal shelter, taking care of abandoned pets and finding them loving homes.",
      image: "https://i.ibb.co.com/dQJp35F/pexels-rdne-6647020.jpg",
      link: "/story/3",
    },
    {
      id: 4,
      title: "Michael's Efforts in Environmental Conservation",
      description:
        "Michael organized local clean-up drives, planting trees and educating the community on sustainable practices.",
      image: "https://i.ibb.co.com/G74KJGr/pexels-rdne-6646918.jpg",
      link: "/story/4",
    },
    {
      id: 5,
      title: "Lily's Mentorship for At-Risk Youth",
      description:
        "Lily mentored at-risk youth, helping them with life skills and career development to ensure a brighter future.",
      image: "https://i.ibb.co.com/LQp2zgV/pexels-shvetsa-5029859-1.jpg",
      link: "/story/5",
    },
    {
      id: 6,
      title: "David's Role in Homeless Outreach",
      description:
        "David volunteered with a homeless outreach program, providing food, shelter, and resources to those in need.",
      image: "https://i.ibb.co.com/N2yCkw1/pexels-shvetsa-5029919-1.jpg",
      link: "/story/6",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 py-16">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 tracking-wide">
          Making a Difference: Volunteer Success Stories
        </h2>
        <p className="text-base sm:text-lg font-medium mb-8 sm:mb-10">
          Read how individuals are transforming communities and inspiring
          change.
        </p>

        {/* Success Stories Grid */}
        <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="overflow-hidden rounded-2xl mb-6">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-36 sm:h-48 object-cover transform hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                {story.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                {story.description}
              </p>
              <a className="text-blue-500 hover:text-blue-700 text-base sm:text-lg font-semibold transition duration-300 ease-in-out">
                Read More →
              </a>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Inspired? You Can Make a Difference Too!
          </h2>
          <p className="text-base sm:text-lg text-white mb-8">
            Join our community of volunteers and create your own success story.
            Your contribution matters!
          </p>
          <Link
            to="/register"
            className="bg-blue-600 text-white py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Sign Up to Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
