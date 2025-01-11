const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "Volunteer",
      text: "Volunteer Connect made it so easy to find meaningful opportunities. I’ve met amazing people and made a real difference in my community.",
      image: "https://randomuser.me/api/portraits/women/1.jpg", // Real image URL
    },
    {
      name: "John Smith",
      role: "Nonprofit Organizer",
      text: "Thanks to Volunteer Connect, our organization received the support we needed. The volunteers were dedicated and passionate.",
      image: "https://randomuser.me/api/portraits/men/1.jpg", // Real image URL
    },
    {
      name: "Sarah Johnson",
      role: "Volunteer",
      text: "I love how user-friendly the platform is. It’s been a rewarding experience helping others and growing personally.",
      image: "https://randomuser.me/api/portraits/women/2.jpg", // Real image URL
    },
  ];

  return (
    <div className=" px-4 w-11/12 mx-auto py-8">
      <div className=" mx-auto px-2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 dark:text-gray-200 mb-10">
          What Our Community Says
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {testimonial.name}
              </h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">
                {testimonial.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
