import MyVolunteerNeedPosts from "../Components/MyVolunteerNeedPosts";
import MyVolunteerRequest from "../Components/MyVolunteerRequest";

const ManageVolunteer = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <MyVolunteerNeedPosts></MyVolunteerNeedPosts>
      <MyVolunteerRequest></MyVolunteerRequest>
    </div>
  );
};

export default ManageVolunteer;
