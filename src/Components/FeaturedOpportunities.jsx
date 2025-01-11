const FeaturedOpportunities = () => {
  const featuredData = [
    {
      id: 1,
      title: "Tree Plantation Drive",
      description:
        "Join us in making the world greener! Help plant trees in the local park this weekend.",
      category: "Environment",
      thumbnail: " https://i.ibb.co.com/N7n6Jj6/pexels-ron-lach-9543745.jpg",
    },
    {
      id: 2,
      title: "Food Distribution for the Needy",
      description:
        "Assist us in distributing food packages to underprivileged families in your area.",
      category: "Social Work",
      thumbnail: "https://i.ibb.co.com/3mb0Q18/pexels-ron-lach-9037596.jpg",
    },
    {
      id: 3,
      title: "Community Clean-Up",
      description:
        "Help us clean up the local riverbanks and parks to ensure a cleaner environment.",
      category: "Environment",
      thumbnail: "https://i.ibb.co.com/fnQm0HC/pexels-kampus-7551686.jpg",
    },
  ];

  //   bg-gradient-to-r from-blue-500 via-teal-500 to-green-500

  return (
    <div className="px-4 py-6 w-11/12 mx-auto ">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-gray-100">
        Featured Volunteer Opportunities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredData.map((opportunity) => (
          <div
            key={opportunity.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={opportunity.thumbnail}
              alt={opportunity.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                {opportunity.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {opportunity.description}
              </p>
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full dark:bg-blue-700 dark:text-blue-100">
                {opportunity.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedOpportunities;
