/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

const UpdateData = ({ post }) => {
  const [newDeadline, setNewDeadline] = useState(new Date());
  // const navigate = useNavigate();

  const handleDateChange = (date) => {
    setNewDeadline(date);
  };

  const {
    _id,
    postTitle,
    description,
    category,
    location,
    volunteersNeeded,
    thumbnailUrl,
    deadline,
    organizerName,
    organizerEmail,
  } = post || {};

  // uapdate data into database

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
        `${import.meta.env.VITE_API_URL}/update-data/?id=${_id}`,
        updateData
      );
      document.getElementById("my_modal_4").close();
      toast.success("Data Updated Successfully");
      // navigate("/all-volunteers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-3xl shadow-lg rounded-lg">
          <h3 className="font-bold text-3xl text-center text-gray-800 mb-6">
            Update Your Posted Data
          </h3>
          <form onSubmit={handleUpdate} className="space-y-6">
            {/* Thumbnail URL */}
            <div>
              <label
                htmlFor="thumbnailUrl"
                className="block text-lg font-semibold text-gray-700"
              >
                Thumbnail URL
              </label>
              <input
                type="url"
                id="thumbnailUrl"
                name="thumbnailUrl"
                defaultValue={thumbnailUrl}
                placeholder="Enter Image URL"
                className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Post Title */}
            <div>
              <label
                htmlFor="postTitle"
                className="block text-lg font-semibold text-gray-700"
              >
                Post Title
              </label>
              <input
                type="text"
                id="postTitle"
                name="postTitle"
                defaultValue={postTitle}
                placeholder="Enter Post Title"
                className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-lg font-semibold text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                defaultValue={description}
                rows="4"
                placeholder="Write a brief description..."
                className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-lg font-semibold text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                defaultValue={category}
                className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  Select a Category
                </option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Social Service">Social Service</option>
                <option value="Animal Welfare">Animal Welfare</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-lg font-semibold text-gray-700"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                defaultValue={location}
                placeholder="Enter Location"
                className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Volunteers Needed */}
            <div>
              <label
                htmlFor="volunteersNeeded"
                className="block text-lg font-semibold text-gray-700"
              >
                No. of Volunteers Needed
              </label>
              <input
                type="number"
                id="volunteersNeeded"
                name="volunteersNeeded"
                defaultValue={volunteersNeeded}
                min="1"
                className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Deadline */}
            <div>
              <label
                htmlFor="deadline"
                className="block text-lg font-semibold text-gray-700"
              >
                Deadline
              </label>
              <DatePicker
                selected={deadline}
                onChange={handleDateChange}
                className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
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
                  className="block text-lg font-semibold text-gray-700"
                >
                  Organizer Name
                </label>
                <input
                  type="text"
                  id="organizerName"
                  name="organizerName"
                  defaultValue={organizerName}
                  readOnly
                  className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 bg-gray-100"
                />
              </div>
              <div>
                <label
                  htmlFor="organizerEmail"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Organizer Email
                </label>
                <input
                  type="email"
                  id="organizerEmail"
                  name="organizerEmail"
                  defaultValue={organizerEmail}
                  readOnly
                  className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 bg-gray-100"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-500 transition duration-300"
              >
                Update
              </button>
            </div>
          </form>

          {/* Close Button */}
          <div className="flex justify-end mt-6">
            <button
              className="px-6 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 focus:ring focus:ring-gray-400 transition duration-300"
              onClick={() => document.getElementById("my_modal_4").close()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateData;
