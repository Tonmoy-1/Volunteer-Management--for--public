import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import AddVolunteer from "../Pages/AddVolunteer";
import VolunteerDetails from "../Pages/VolunteerDetails";
import AllVolunteers from "../Pages/AllVolunteers";
import ManageVolunteer from "../Pages/ManageVolunteer";
import UpdateData from "../Components/UpdateData";
import ErrorPage from "../Pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-volunteer",
        element: <AddVolunteer></AddVolunteer>,
      },
      {
        path: "/volunteer-details/:id",
        element: <VolunteerDetails></VolunteerDetails>,
      },
      {
        path: "/all-volunteers",
        element: <AllVolunteers></AllVolunteers>,
      },
      {
        path: "/my-volunteer",
        element: <ManageVolunteer></ManageVolunteer>,
      },
      {
        path: "/update-data/:id",
        element: <UpdateData></UpdateData>,
      },
    ],
  },
]);

export default router;
