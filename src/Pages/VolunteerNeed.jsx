import { useEffect, useState } from "react";
import VolunteerCard from "../Components/VolunteerCard";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Spinner from "../Components/Spiner";
import useAxiosSecure from "../Hooks/useAxious";
import { Typewriter } from "react-simple-typewriter";

const VolunteerNeed = () => {
  const useAxious = useAxiosSecure();
  const [data, seteData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await useAxious.get(`/limited-volunteers`);
        seteData(data);
        setLoading(false);
      } catch (err) {
        err && toast.error("Unauthorized Access");
      }
    };
    fetchData();
  }, [useAxious]);

  return (
    <div className="px-4 py-6 w-11/12 mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
        Volunteer
        <span className="text-green-500">
          <Typewriter
            words={[" Needs Now"]}
            cursor
            loop={true}
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      {loading && <Spinner />}
      <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((singledata, index) => (
          <VolunteerCard key={index} singledata={singledata}></VolunteerCard>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Link to={"all-volunteers"}>
          <button className="btn bg-green-500 text-white dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-700 transition-all">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeed;
