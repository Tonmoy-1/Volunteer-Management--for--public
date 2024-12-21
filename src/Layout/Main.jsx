import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Outlet */}
      <div className="min-h-screen">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
