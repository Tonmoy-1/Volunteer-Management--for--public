import { useEffect, useState } from "react";
import VolunteerCard from "../Components/VolunteerCard";
import axios from "axios";
import { Link } from "react-router-dom";

const VolunteerNeed = () => {
  const [data, seteData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/limited-volunteers`
        );
        seteData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-4 py-6 w-11/12 mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
        Volunteer Needs
      </h1>
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
