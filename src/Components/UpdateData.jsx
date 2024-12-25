/* eslint-disable react-hooks/exhaustive-deps */

import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateData = () => {
  const [newDeadline, setNewDeadline] = useState(new Date());
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDateChange = (date) => {
    setNewDeadline(date);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/update-data/${id}`
      );
      setPost(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const {
    postTitle,
    description,

    location,
    volunteersNeeded,
    thumbnailUrl,
    deadline,
    organizerName,
    organizerEmail,
  } = post || {};

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const postTitle = form.postTitle.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const volunteersNeeded = form.volunteersNeeded.value;
    const thumbnailUrl = form.thumbnailUrl.value;
    const organizerName = form.organizerName.value;
    const organizerEmail = form.organizerEmail.value;

    const updateData = {
      postTitle,
      description,
      category,
      location,
      volunteersNeeded,
      thumbnailUrl,
      deadline: newDeadline,
      organizerName,
      organizerEmail,
    };

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/update-data/${id}`,
        updateData
      );
      toast.success("Data Updated Successfully");
      navigate("/my-volunteer");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 bg-white shadow-lg rounded-lg dark:bg-gray-800">
      <Helmet>
        <title>Update Volunteer Post</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6 dark:text-gray-200">
        Update Volunteer Post
      </h1>
      <form onSubmit={handleUpdate} className="space-y-6">
        {/* Thumbnail URL */}
        <div>
          <label
            htmlFor="thumbnailUrl"
            className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
          >
            Thumbnail URL
          </label>
          <input
            type="url"
            id="thumbnailUrl"
            name="thumbnailUrl"
            defaultValue={thumbnailUrl}
            placeholder="Enter Image URL"
            className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
          />
        </div>

        {/* Post Title */}
        <div>
          <label
            htmlFor="postTitle"
            className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
          >
            Post Title
          </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            defaultValue={postTitle}
            placeholder="Enter Post Title"
            className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={description}
            rows="4"
            placeholder="Write a brief description..."
            className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
          />
        </div>

        {/* Category */}
        {post?.category && (
          <div>
            <label
              htmlFor="category"
              className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              defaultValue={post?.category}
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
            >
              <option>Select a Category</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Social Service">Social Service</option>
              <option value="Animal Welfare">Animal Welfare</option>
            </select>
          </div>
        )}

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            defaultValue={location}
            placeholder="Enter Location"
            className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
          />
        </div>

        {/* Volunteers Needed */}
        <div>
          <label
            htmlFor="volunteersNeeded"
            className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
          >
            No. of Volunteers Needed
          </label>
          <input
            type="number"
            id="volunteersNeeded"
            name="volunteersNeeded"
            defaultValue={volunteersNeeded}
            min="1"
            className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
          />
        </div>

        {/* Deadline */}
        <div>
          <label
            htmlFor="deadline"
            className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
          >
            Deadline
          </label>
          <DatePicker
            selected={deadline}
            onChange={handleDateChange}
            className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
            id="deadline"
            name="deadline"
            required
          />
        </div>

        {/* Organizer Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="organizerName"
              className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
            >
              Organizer Name
            </label>
            <input
              type="text"
              id="organizerName"
              name="organizerName"
              defaultValue={organizerName}
              readOnly
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 bg-gray-100 dark:bg-gray-600 dark:border-gray-600 dark:text-gray-300"
            />
          </div>
          <div>
            <label
              htmlFor="organizerEmail"
              className="block text-lg font-semibold text-gray-700 dark:text-gray-300"
            >
              Organizer Email
            </label>
            <input
              type="email"
              id="organizerEmail"
              name="organizerEmail"
              defaultValue={organizerEmail}
              readOnly
              className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 bg-gray-100 dark:bg-gray-600 dark:border-gray-600 dark:text-gray-300"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-500 transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateData;
