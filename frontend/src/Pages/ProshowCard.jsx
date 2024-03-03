import React from "react";
import { ImLocation2 } from "react-icons/im";
import { BsFillClockFill } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
import { MdMyLocation } from "react-icons/md";

export default function ProshowCard({ event }) {
  return (
    <>
      <div
        className={`transform h-[28rem] w-[20rem] mt-5 p-4 bg-gray-900 text-gray-100 transition duration-500 proshow-card  hover:bg-opacity-60  rounded-xl hover:bg-yellow-900 overflow-hidden mx-10`}
      >
        <div className="transform h-[28rem] w-[20rem] transition -mx-3 duration-500 rounded-xl hover:-translate-y-[19rem] ">
          <div className="">
            <div className="image-container h-[18rem] w-[17rem] mx-auto mb-6 overflow-hidden rounded-xl">
              <img
                src={event.image}
                className="h-full w-full object-cover"
                alt="Event"
              />
            </div>
            <div className="tracking-widest text-xl mb-1 font-semibold text-center event-day proshow-performer">
              {event.day}
            </div>
            <div className="font-medium text-m text-center event-date">
              {event.date}
            </div>

            {event.performer === "Lohar The Blacksmiths" ? (
              <h2 className="-mt-2 flex justify-center flex-wrap proshow-performer text-xl p-5 font-bold event-performer">
                {event.performer}
              </h2>
            ) : (
              <h2 className="-mt-3 flex justify-center flex-wrap proshow-performer text-2xl p-5 font-bold event-performer">
                {event.performer}
              </h2>
            )}
            <div className="flex justify-between text-base proshow-performer">
              <div className="proshow-performer">
                <MdMyLocation className="inline -translate-y-[2px]" />{" "}
                {event.location}
              </div>
              <div className="mr-[10px] proshow-performer">
                {" "}
                <CgSandClock className="inline -translate-y-[2px] -ml-[20px]" />{" "}
                {event.time}
              </div>
            </div>
            <div className="text-center leading-2 mt-2 text-base mx-2">
              {event.description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
