const UpcomingEvents = () => {
  const events = [
    {
      title: "Community Clean-Up Drive",
      date: "January 20, 2025",
      location: "Central Park, New York",
      description:
        "Join us for a clean-up drive to make our community greener and cleaner. Open for all age groups.",
      image: "https://i.ibb.co.com/dkPKKyW/pexels-rdne-6646817.jpg",
    },
    {
      title: "Fundraising Gala for Education",
      date: "February 10, 2025",
      location: "Grand Ballroom, LA",
      description:
        "An evening of entertainment and fundraising to support underprivileged children's education.",
      image: "https://i.ibb.co.com/NFpb1Br/pexels-mikhail-nilov-7465698-1.jpg",
    },
    {
      title: "Volunteer Orientation Session",
      date: "March 5, 2025",
      location: "Volunteer Connect Office, San Francisco",
      description:
        "Learn about volunteering opportunities and how you can make a difference. Registration is free.",
      image:
        "https://i.ibb.co.com/7vy5kfN/pexels-newmanphotographs-14831642.jpg",
    },
  ];

  return (
    <div className=" py-6 w-11/12 mx-auto bg-white dark:bg-gray-900 ">
      <div className="mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 dark:text-gray-200 mb-10">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="flex flex-col justify-between p-6 flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">
                    {event.date} • {event.location}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {event.description}
                  </p>
                </div>
                <div className="flex-grow"></div>

                {/* Flex-grow section for button alignment */}
                <div className=" flex justify-start items-center text-blue-600 dark:text-blue-400 font-semibold">
                  Coming Soon..
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
