import { Helmet } from "react-helmet-async";
import MyVolunteerNeedPosts from "../Components/MyVolunteerNeedPosts";
import MyVolunteerRequest from "../Components/MyVolunteerRequest";

const ManageVolunteer = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <Helmet>
        <title>Manage My Volunteet Needs</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <MyVolunteerNeedPosts></MyVolunteerNeedPosts>
      <MyVolunteerRequest></MyVolunteerRequest>
    </div>
  );
};

export default ManageVolunteer;
