import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#202C3D] text-white py-8 mt-8">
      <div className="container mx-auto px-6 sm:px-12 md:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">VolunteerConnect</h2>
            <p className="text-sm text-[#F7F7F7]">
              Empowering communities by connecting volunteers with those in
              need.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul>
              <li>
                <a href="/" className="text-[#F7F7F7] hover:text-[#6FDA44]">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/all-posts"
                  className="text-[#F7F7F7] hover:text-[#6FDA44]"
                >
                  All Posts
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="text-[#F7F7F7] hover:text-[#6FDA44]"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul>
              <li>
                <span className="text-sm text-[#F7F7F7]">
                  Email: contact@volunteerconnect.com
                </span>
              </li>
              <li>
                <span className="text-sm text-[#F7F7F7]">
                  Phone: (123) 456-7890
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-[#F7F7F7] hover:text-[#6FDA44]"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://twitter.com"
                className="text-[#F7F7F7] hover:text-[#6FDA44]"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                className="text-[#F7F7F7] hover:text-[#6FDA44]"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-[#F7F7F7] hover:text-[#6FDA44]"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#333333] py-4 text-center">
        <p className="text-sm">
          &copy; 2024 VolunteerConnect. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
