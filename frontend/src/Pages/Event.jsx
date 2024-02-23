import { useState, useEffect } from "react";
import { FaHouseLaptop } from "react-icons/fa6";
import { MdOutlinePlace } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import Navbar from "./../components/Navbar";
import { useAppContext } from "../context/appContext";
import LoadingPage from "./Loading";

export default function Event() {
  const [categoryType, setCategoryType] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [events, setEvents] = useState([]);
  const { eventData, eventDataLoading, getEventData } = useAppContext();

  if (!eventData) {
    if (!eventDataLoading) {
      getEventData();
    }
    return <LoadingPage />;
  }

  function handleCategoryTypeChange(e) {
    setCategoryType(e.target.value);
  }

  function handleCategoryNameChange(e) {
    const selectedCategoryName = e.target.value;
    setCategoryName(selectedCategoryName);

    const events = eventData
      .find((obj) => obj.category_type === categoryType)
      .categories.find(
        (obj) => obj.category_name === selectedCategoryName
      ).events;

    // console.log(events);
    setEvents(events);
  }

  return (
    <>
      <Navbar />
      <div
        className={`min-h-screen flex flex-col md:items-center px-2 gap-y-8  overflow-hidden overscroll-y-hidden pt-32 pb-28 md:pb-0 md:bg-hero-background bg-bottom`}
      >
        <div className="flex flex-col sm:flex-row gap-y-4 gap-x-10 md:w-4/5 sm:justify-center py-4 px-6 rounded-lg bigCard">
          <select
            value={categoryType}
            onChange={handleCategoryTypeChange}
            className="py-1 px-2 rounded cursor-pointer font-medium text-black focus:outline-none selectCard"
          >
            <option value="" disabled hidden>
              Select Category Type
            </option>
            {eventData
              .filter((item) => item.category_type)
              .map((item) => (
                <option key={item.category_type}>{item.category_type}</option>
              ))}
          </select>
          <select
            value={categoryName}
            onChange={handleCategoryNameChange}
            className="py-1 px-2 rounded cursor-pointer font-medium text-black focus:outline-none selectCard"
          >
            <option value="" disabled hidden>
              Select Category Name
            </option>
            {(
              eventData.find((item) => item.category_type === categoryType) || {
                categories: [],
              }
            ).categories.map((categoryData) => (
              <option key={categoryData.category_name}>
                {categoryData.category_name}
              </option>
            ))}
          </select>
        </div>

        <div className="justify-center grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 md:w-4/5 items-start md:h-[500px] overflow-y-auto px-6 rounded-lg py-8 bigCard mb-[20px] no-scrollbar">
          {events?.map((event) => (
            <EventCard key={event._id} eventData={event} />
          ))}
          {/* {data
            .find((item) => item.category_type === categoryType)
            ?.categories?.find((obj) => obj.category_name === categoryName)
            .events?.map((event) => (
              <EventCard key={event._id} eventData={event} />
            ))} */}
        </div>
      </div>
    </>
  );
}

const EventCard = ({ eventData }) => {
  const {
    event_name,
    event_type,
    team_type,
    team_size_min,
    team_size_max,
    event_amount,
    event_desc,
  } = eventData;

  const isOnline = event_type === "ONLINE";
  const teamTypeLabel = team_type ? "Team" : "Individual";
  let teamSizeLabel = "";
  if (team_type) {
    if (team_size_max) {
      teamSizeLabel = `(${team_size_min} - ${team_size_max})`;
    } else {
      teamSizeLabel = `(${team_size_min} or more)`;
    }
  }

  return (
    <>
      <div className="rightCard text-white p-4 rounded-md shadow-md hover:-translate-y-0.5 duration-300 hover:shadow-md hover:shadow-slate-900  max-h-[350px] min-h-[351px] overflow-hidden overflow-y-auto no-scrollbar">
        <h2 className="text-xl lg:text-2xl font-bold mb-2 text-[#fdd881] break-words">
          {event_name}
        </h2>

        <div className="flex justify-between items-center mb-2">
          <div>
            <p
              className={`text-${
                isOnline ? "green" : "blue"
              }-500 font-semibold flex flex-row items-center gap-x-1`}
            >
              <span>
                {isOnline ? (
                  <FaHouseLaptop className="text-sky-500" />
                ) : (
                  <MdOutlinePlace className="text-orange-500" />
                )}
              </span>
              <span>{isOnline ? "Online" : "Offline"}</span>
            </p>
            <p className="flex flex-row items-center gap-x-1">
              <span>
                {team_type ? (
                  <MdGroups2 className="text-orange-300" />
                ) : (
                  <IoPersonSharp className="text-green-400" />
                )}
              </span>
              <span>{teamTypeLabel}</span>
              <span>{teamSizeLabel}</span>
            </p>
          </div>

          <div className="flex flex-col gap-x-1 items-center">
            <span className="font-semibold text-xl">
              {/* <em>Prize Pool</em> */}
            </span>
            <span className="text-2xl font-bold text-lime-400">
              {/* &#8377;{event_amount} */}
            </span>
          </div>
        </div>

        <hr className="my-2 border-t-2 border-orange-200 " />

        <p className="break-words">{event_desc}</p>
      </div>
    </>
  );
};
