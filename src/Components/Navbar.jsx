import { Link, NavLink } from "react-router-dom";
import { FaUserCircle, FaSun, FaMoon } from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme on load
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Toggle Theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="bg-[#006F5F] dark:bg-gray-900 text-white ">
      <div className="container mx-auto px-10 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-semibold">
          <Link to="/">VolunteerConnect</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className="hover:text-[#FFD700] dark:hover:text-yellow-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/all-volunteers"
            className="hover:text-[#FFD700] dark:hover:text-yellow-300"
          >
            All Posts
          </NavLink>
        </div>

        {/* Actions Section */}
        <div className="flex items-center space-x-6">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-xl hover:text-yellow-400"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          {/* Authentication Section */}
          {!user ? (
            <Link
              to="/login"
              className="bg-white dark:bg-yellow-500 text-[#006F5F] dark:text-gray-900 px-6 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-yellow-400"
            >
              Login
            </Link>
          ) : (
            <div className="relative">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                {user.photoURL ? (
                  <img
                    referrerPolicy="no-referrer"
                    src={user.photoURL}
                    alt={user.displayName}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-600"
                  />
                ) : (
                  <FaUserCircle className="w-9 h-9" />
                )}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-50">
                  <p className="p-3 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">
                    Hello, {user.displayName || "User"}
                  </p>

                  <div className="md:hidden flex gap-3 flex-col ml-3">
                    <NavLink
                      to="/"
                      className="hover:text-[#FFD700] dark:hover:text-yellow-300"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/all-volunteers"
                      className="hover:text-[#FFD700] dark:hover:text-yellow-300"
                    >
                      All Volunteers
                    </NavLink>
                  </div>
                  <Link
                    to="/add-volunteer"
                    className="block p-3 text-gray-700 dark:text-gray-300  hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Add Post
                  </Link>
                  <Link
                    to="/my-volunteer"
                    className="block p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Manage Posts
                  </Link>
                  <button
                    onClick={logOut}
                    className="block p-3 text-red-500 hover:bg-red-100 dark:hover:bg-red-800"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
