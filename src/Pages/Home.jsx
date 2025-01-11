import { Helmet } from "react-helmet-async";
import Carousel from "../Components/Carousel";
import HowItWorks from "./HowItWorks";
import PartnerOrganizations from "./PartnerOrganizations";
import SuccessStories from "./SuccessStories";
import VolunteerNeed from "./VolunteerNeed";
import FeaturedOpportunities from "../Components/FeaturedOpportunities";
import UpcomingEvents from "../Components/UpcomingEvents";
import Testimonials from "../Components/Testimonials";
import CallToAction from "../Components/CallToAction";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Helmet>
        <title>Home Page || Volunteer Connect||</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Carousel></Carousel>
      <VolunteerNeed></VolunteerNeed>
      <SuccessStories></SuccessStories>
      <HowItWorks></HowItWorks>
      <PartnerOrganizations></PartnerOrganizations>
      <FeaturedOpportunities></FeaturedOpportunities>
      <UpcomingEvents></UpcomingEvents>
      <Testimonials></Testimonials>
      <CallToAction></CallToAction>
    </div>
  );
};

export default Home;
