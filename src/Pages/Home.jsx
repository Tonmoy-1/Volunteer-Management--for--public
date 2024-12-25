import { Helmet } from "react-helmet-async";
import Carousel from "../Components/Carousel";
import HowItWorks from "./HowItWorks";
import PartnerOrganizations from "./PartnerOrganizations";
import SuccessStories from "./SuccessStories";
import VolunteerNeed from "./VolunteerNeed";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page || Volunteer Connect</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Carousel></Carousel>
      <VolunteerNeed></VolunteerNeed>
      <SuccessStories></SuccessStories>
      <HowItWorks></HowItWorks>
      <PartnerOrganizations></PartnerOrganizations>
    </div>
  );
};

export default Home;
