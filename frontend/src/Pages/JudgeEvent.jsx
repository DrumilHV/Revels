import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Events = () => {
  const [eventData, setEventData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:17392/event/getAllEvents"
        );
        setEventData(data);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError(error.message || "An error occurred while fetching events.");
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    console.log(eventData);
  }, [eventData]);

  return (
    <>
      <div className="min-h-screen max-h-screen no-scroll flex justify-center items-center flex-wrap">
        {eventData.map((event, index) => (
          <EventCard key={index} eve={event} />
        ))}
      </div>
    </>
  );
};

const EventCard = ({ eve }) => {
  const navigate = useNavigate();

  const handleClick = (eventId) => {
    navigate(`/judge/event/${eventId}`);
  };

  return (
    <>
      <div className="rightCard text-white p-4 rounded-md shadow-md hover:-translate-y-0.5 duration-300 hover:shadow-md hover:shadow-slate-900 m-[50px] max-h-[450px] min-h-[200px] max-w-[300px] min-w-[250px]">
        <h2 className="text-xl lg:text-2xl font-bold mb-2 text-[#fdd881] break-words">
          {eve?.event_name}
        </h2>

        <div className="flex justify-between items-center mb-2">
          <div></div>
          <span
            className="bg-[#000000] p-[4px] px-[8px] rounded cursor-pointer"
            onClick={() => handleClick(eve._id)}
          >
            Go to Select Team
          </span>
        </div>

        <hr className="my-2 border-t-2 border-orange-200" />

        <p className="break-words">{eve?.event_desc}</p>
      </div>
    </>
  );
};

export default Events;
