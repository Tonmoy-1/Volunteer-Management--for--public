import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A2634] text-white py-12 ">
      <div className="container mx-auto px-6 sm:px-12 md:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">VolunteerConnect</h2>
            <p className="text-sm text-[#A1A1A1]">
              Empowering communities by connecting volunteers with those in
              need. Join us and make a difference.
            </p>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-[#A1A1A1] hover:text-[#38A169]">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/all-posts"
                  className="text-[#A1A1A1] hover:text-[#38A169]"
                >
                  All Posts
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="text-[#A1A1A1] hover:text-[#38A169]"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-[#A1A1A1]">
                  Email:{" "}
                  <a
                    href="mailto:contact@volunteerconnect.com"
                    className="text-[#38A169] hover:text-[#2F855A]"
                  >
                    contact@volunteerconnect.com
                  </a>
                </span>
              </li>
              <li>
                <span className="text-sm text-[#A1A1A1]">
                  Phone:{" "}
                  <a
                    href="tel:+11234567890"
                    className="text-[#38A169] hover:text-[#2F855A]"
                  >
                    (123) 456-7890
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A1A1A1] hover:text-[#38A169] transition duration-300 ease-in-out"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A1A1A1] hover:text-[#38A169] transition duration-300 ease-in-out"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A1A1A1] hover:text-[#38A169] transition duration-300 ease-in-out"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A1A1A1] hover:text-[#38A169] transition duration-300 ease-in-out"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#1B2A36] py-6 text-center">
        <p className="text-sm text-[#A1A1A1]">
          &copy; 2024 VolunteerConnect. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
