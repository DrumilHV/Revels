import React from "react";
import { useState } from "react";
const PROSHOW_EVENTS = [
  {
    day: 1,
    events: [
      {
        id: 4,
        date: "20th March",
        time: "6:00pm",
        performer: "Akash Gupta",
        location: "MIT Quadrangle",
        image: "https://placehold.co/600x400",
        description:
          "This eccentric Delhi guy is a nation-wide sensation having millions of views across his channel and housefull shows. With his astute observational skills and a great sense of physicality to his performance, he became the apex of observational comedy in India and the winner of Comicstaan Season 2. Coming to spread laughter with his hilarious anecdotes and insights, 'Hello Brother' we have Aakash Gupta performing live at Proshow, Revels 2023.",
      },
      // Add more events for day 1 if needed
    ],
  },
  {
    day: 2,
    events: [
      {
        id: 2,
        date: "22nd March",
        time: "6:00pm",
        performer: "Prakshi Goyal",
        location: "MIT Quadrangle",
        image: "https://placehold.co/600x400",
        description:
          "The winner of the title of Miss Femina Delhi in 2022 and a wildcard contestant in Splitsvilla 14 is taking the beauty industry by storm. She also uses her pronounced background in the field of Psychology to strongly advocate for children’s mental health. Prakshi Goyal is all set to grace us with her presence at Revels 2023.",
      },
      // Add more events for day 2 if needed
    ],
  },
  {
    day: 3,
    events: [
      {
        id: 5,
        date: "24th March",
        time: "6:00pm",
        performer: "Mohit Chauhan",
        location: "Hockey Ground",
        image: "https://placehold.co/600x400",
        description:
          "He has not just touched hearts but souls with his chartbustering hits. After albums like Rockstar, Delhi 6 and many more, he became the pioneer voice of passion and has gone on to receive many accolades. With songs like 'Kun Faya Kun' to 'Sadda Haq' along with love anthems like 'Tum Se Hi', this man has showcased his incredible range. All set to take the audience on a soulful and musical trip, Mohit Chauhan is performing live at Proshow, Revels 2023.",
      },
      {
        id: 6,
        date: "24th March",
        time: "6:00pm",
        performer: "DJ Ravator",
        location: "Hockey Ground",
        image: "https://placehold.co/600x400",
        description:
          "He is one of the top DJs of India as well as a composer and record producer. At just a young age he has established himself in the DJ scene and has a record of giving electric performances to thunderous response across festivals in India. Be ready to dance the night away to his beats as DJ Ravator is performing live at Proshow, Revels 2023.",
      },
      // Add more events for day 3 if needed
    ],
  },
  {
    day: 4,
    events: [
      {
        id: 1,
        date: "25th March",
        time: "5:00pm",
        performer: "Lohar The Blacksmiths",
        location: "Hockey Ground",
        image: "https://placehold.co/600x400",
        description:
          "Touching heartstrings with reverberations in every other tongue, this Mysore based multilingual progressive-rock band are all set to rock the stage. With Aritra on drums, Sumukh and Melwin on guitars, Anoop on keys, Noel on Bass and Sanath on vocals, Lohar the Blacksmiths are here to perform at Proshow, Revels 2023.",
      },
      {
        id: 3,
        date: "25th March",
        time: "5:00pm",
        performer: "Zaeden",
        location: "Hockey Ground",
        image: "https://placehold.co/600x400",
        description:
          "From mixing tapes to playing with polyphonic beats, and then establishing himself in the Indie scene with charisma, Zaeden became the voice of love. Now with across 50 million streams on his new album Genesis 1:1, Sahil Sharma has become one of the flag bearers for Indian Pop Renaissance. All set to touch hearts and then break some, Zaeden is performing live at Revels 2023.",
      },
      // Add more events for day 4 if needed
    ],
  },
];
const EventDayCard = ({ event }) => {
  return (
    <>
      <div
        className="flex justify-center max-md:flex-col pl-[10%] pr-[10%] lg:justify-start"
        id={event.id}
      >
        <img
          className="w-[20%] max-md:justify-center max-md:w-[50%] rounded-lg m-[2%] mx-auto"
          src={event.image}
          alt={event.performer}
        />
        <div className="bg-[#fff] w-[80%] max-md:h-[80%] m-[2%] rounded-lg md:ml-[10%] md:mr-[10%] mx-auto text-center">
          <h1 className="lg:text-[2.5rem] max-md:text-[1.25rem] m-[2%]">
            {event.performer}
          </h1>
          <h1 className="lg:text-[1.875rem] max-md:text-[0.875rem] m-[2%]">
            {event.time} on {event.date} at {event.location}
          </h1>
          <h1 className="lg:text-[1.875rem] max-md:text-[0.875rem] m-[2%]">
            {event.description}
          </h1>
        </div>
      </div>
    </>
  );
};

const Days = () => {
  const [selectedDay, setSelectedDay] = useState(PROSHOW_EVENTS[0]);

  return (
    <>
      <div className="w-[80%] h-[10%] mt-[35%] sm:mt-[20%] md:mt-[12%] m-[10%] bg-[#D9D9D975] rounded-full  flex flex-row justify-around">
        {PROSHOW_EVENTS.map((selectedEvent, index) => {
          return (
            <>
              <button
                onClick={() => {
                  setSelectedDay(PROSHOW_EVENTS[index]);
                }}
                className="hover:bg-[#384E7CA1] w-[100%] h-[100%] p-[2%] text-xl rounded-full "
              >
                DAY {selectedEvent.day}
              </button>
            </>
          );
        })}
      </div>
      {selectedDay.events.map((event) => {
        return (
          <>
            <div
              className="flex justify-center max-md:flex-col pl-[10%] pr-[10%] lg:justify-start"
              id={event.id}
            >
              <img
                className="w-[20%] max-md:justify-center max-md:w-[50%] rounded-lg m-[2%] mx-auto"
                src={event.image}
                alt={event.performer}
              />
              <div className="bg-[#fff] w-[80%] max-md:h-[80%] m-[2%] rounded-lg md:ml-[10%] md:mr-[10%] mx-auto text-center">
                <h1 className="lg:text-[2.5rem] max-md:text-[1.25rem] m-[2%]">
                  {event.performer}
                </h1>
                <h1 className="lg:text-[1.875rem] max-md:text-[0.875rem] m-[2%]">
                  {event.time} on {event.date} at {event.location}
                </h1>
                <h1 className="lg:text-[1.875rem] max-md:text-[0.875rem] m-[2%]">
                  {event.description}
                </h1>
              </div>
            </div>
          </>
        );
      })}

      <div className="flex bg-[#EAE9E9E0] w-[20%] rounded-lg mt-[10%]  mx-auto mb-[40%] max-md:[15%] justify-self-center max-sm:w-[50%] ">
        <img className="p-2" src="/uplode.svg" alt="" />
        <button>Uplode Qr</button>
      </div>
    </>
  );
};

export default Days;
