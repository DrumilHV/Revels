import { FaHouseLaptop } from "react-icons/fa6";
import { MdOutlinePlace } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";

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
    <div className="bg-slate-100 p-4 rounded-md shadow-md w-84">
      <h2 className="text-2xl font-bold mb-2 text-[#2c2f42]">{event_name}</h2>

      <div className="flex justify-between items-center mb-2">
        <div>
          <p
            className={`text-${
              isOnline ? "green" : "blue"
            }-500 font-semibold flex flex-row items-center gap-x-1`}
          >
            <span>{isOnline ? <FaHouseLaptop /> : <MdOutlinePlace />}</span>
            <span>{isOnline ? "Online" : "Offline"}</span>
          </p>
          <p className="flex flex-row items-center gap-x-1">
            <span>{team_type ? <MdGroups2 /> : <IoPersonSharp />}</span>
            <span>{teamTypeLabel}</span>
            <span>{teamSizeLabel}</span>
          </p>
        </div>

        <div className="flex flex-col gap-x-1 items-center">
          <span className="text-gray-700 font-semibold text-xl">
            <em>Prize Pool</em>
          </span>
          <span className="text-2xl font-bold text-indigo-600">
            &#8377;{event_amount}
          </span>
        </div>
      </div>

      <hr className="my-2 border-t-2 border-orange-200" />

      <p className="text-gray-700">{event_desc}</p>
    </div>
  );
};

export default EventCard;
