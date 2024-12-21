import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  return (
    <nav className="bg-[#006F5F] text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Website Name / Logo */}
        <div className="text-2xl font-semibold">
          <Link to="/">VolunteerConnect</Link>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-[#FFD700] ${isActive ? "text-[#FFD700]" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/all-posts"
            className={({ isActive }) =>
              `hover:text-[#FFD700] ${isActive ? "text-[#FFD700]" : ""}`
            }
          >
            All Posts
          </NavLink>
        </div>

        {/* Authentication Section */}
        <div className="flex items-center space-x-6">
          {!user ? (
            // Login Button
            <Link
              to="/login"
              className="bg-white text-[#006F5F] px-6 py-2 rounded-md shadow hover:bg-[#e0f1f0] transition"
            >
              Login
            </Link>
          ) : (
            // User Profile and Dropdown Menu
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                {user?.photoURL ? (
                  <img
                    referrerPolicy="no-referrer"
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ) : (
                  <FaUserCircle className="w-8 h-8 text-white" />
                )}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 shadow-lg rounded-lg z-10">
                  <p className="p-2 text-sm border-b hover:bg-gray-100">
                    Hello, {user.displayName || "User"}
                  </p>
                  <Link
                    to="/add-post"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Add Volunteer Post
                  </Link>
                  <Link
                    to="/my-posts"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Manage My Posts
                  </Link>
                  <button
                    onClick={logOut}
                    className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Version: Nav Links in Dropdown */}
      <div className="md:hidden flex items-center space-x-4">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="text-white p-2"
        >
          <FaUserCircle className="w-8 h-8" />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 shadow-lg rounded-lg z-10">
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsDropdownOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/all-posts"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsDropdownOpen(false)}
            >
              All Posts
            </Link>
            {!user ? (
              <Link
                to="/login"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                Login
              </Link>
            ) : (
              <>
                <Link
                  to="/add-post"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Add Volunteer Post
                </Link>
                <Link
                  to="/my-posts"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Manage My Posts
                </Link>
                <button
                  onClick={logOut}
                  className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-100"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
