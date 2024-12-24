import Carousel from "../Components/Carousel";
import HowItWorks from "./HowItWorks";
import PartnerOrganizations from "./PartnerOrganizations";
import SuccessStories from "./SuccessStories";
import VolunteerNeed from "./VolunteerNeed";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <VolunteerNeed></VolunteerNeed>
      <SuccessStories></SuccessStories>
      <HowItWorks></HowItWorks>
      <PartnerOrganizations></PartnerOrganizations>
    </div>
  );
};

export default Home;
