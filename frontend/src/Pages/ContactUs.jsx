import DevTeamCard from "../components/DevTeamCard";
import ConvenersCard from "../components/ConvenersCard";
import PropTypes from "prop-types";
import Navbar from "./../components/Navbar";
import Footer from "../components/Footer";
import RishabhA from "../assets/conveners/rishabh.jpg";
import Amogh from "../assets/conveners/amogh.jpg";
import Harshita from "../assets/conveners/harshita.jpg";
import Mithali from "../assets/conveners/mithali.png";
import TechSecCard from "../components/TechSecCard";
import Rishabh from "../assets/Rishabh.jpg";
import Ayan from "../assets/devteam/ayan.jpg";
import HarshitaS from "../assets/devteam/harshita.jpg";
import Hriday from "../assets/devteam/hriday.jpg";
import Yashvardhan from "../assets/devteam/yahsvardhan.jpg";
import Dhrumil from "../assets/devteam/dhrumil.jpg";
import Jay from "../assets/devteam/jay.jpg";
import Siddhant from "../assets/devteam/sid.jpg";
import Sandeep from "../assets/devteam/sandeep.png";
import Krishna from "../assets/devteam/krishna.jpg";
import Zaid from "../assets/devteam/zaid.jpg";
import Shubh from "../assets/devteam/shubh.jpg";

const convenersData = [
  {
    name: "Rishabh Agrawal",
    pos: "Cultural Secretary",
    phone: "+91 92625 75128",
    email: "culsec.scmit@manipal.edu",
    img: RishabhA,
  },
  {
    name: "Harshita Matkan",
    pos: "Cultural Secretary",
    phone: "+91 90584 42661",
    email: "culsec.scmit@manipal.edu",
    img: Harshita,
  },
  {
    name: "Amogh Gowda",
    pos: "Sports Secretary",
    phone: "+91 8000070609",
    email: "sportssec.mitsc@manipal.edu",
    img: Amogh,
  },
  {
    name: "Mithali Sridhar",
    pos: "Sports Secretary",
    phone: "+91 96320 55085",
    email: "sportssec.mitsc@manipal.edu",
    img: Mithali,
  },
];
const devTeamData = [
  {
    img: Ayan,
    name: "Ayan Sharma",
    pos: "UI Designer",
  },
  {
    img: HarshitaS,
    name: "Harshita Gupta",
    pos: "UI Designer",
  },
  {
    img: Hriday,
    name: "Hriday",
    pos: "UI Designer",
  },
  {
    img: Dhrumil,
    name: "Dhrumil Haresh Ved",
    pos: "Web Developer",
  },
  {
    img: Jay,
    name: "Jay Patel",
    pos: "Web Developer",
  },
  {
    img: Krishna,
    name: "Kkrishna Saxena",
    pos: "Web Developer",
  },
  {
    img: Sandeep,
    name: "Sandeep Kumar Rai",
    pos: "Web Developer",
  },
  {
    img: Shubh,
    name: "Shubh Sinha",
    pos: "Web Developer",
  },
  {
    img: Siddhant,
    name: "Siddhant Khurana",
    pos: "Web Developer",
  },
  {
    img: Yashvardhan,
    name: "Yashvardhan Vijay",
    pos: "Web Developer",
  },
  {
    img: Zaid,
    name: "Zaid Khan",
    pos: "Web Developer",
  },
];

const ContactUs = () => {
  ContactUs.propTypes = {
    convenersData: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        pos: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      })
    ).isRequired,
    devTeamData: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        pos: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  const technicalContacts = [
    {
      description:
        "If You Are Facing Any Technical Difficulties On The Website, please reach out to",
      contacts: [
        { name: "Rishabh Jain", phones: "+91 87997 71287" },
        { name: "M Prerana Rao", phones: "+91 9902484558" },
        { name: "Sanchit Dhingra", phones: "+91 91104 21416" },
      ],
    },
    {
      description: "For Any Proshow-Related Queries, Please Contact",
      contacts: [
        { name: "Keshav Garg", phones: "+91 99354 87754" },
        { name: "Rishabh Agrawal", phones: "+91 92625 75128" },
        { name: "Harshita Matkan", phones: "+91 90584 42661" },
      ],
    },
    {
      description: "For Any Sports Related Queries Please Contact",
      contacts: [
        { name: "Amogh Gowda", phones: "+91 70265 96631" },
        {
          name: "Mithali Sridhar",
          phones: "+91 96320 55085",
        },
      ],
    },
    {
      description: "For Any Cultural Events-Related Queries, Please Contact",
      contacts: [
        { name: "Rishabh Agrawal", phones: "+91 92625 75128" },
        { name: "Harshita Matkan", phones: "+91 90584 42661" },
      ],
    },
    {
      description:
        "If you are a NON-MAHE student and have any queries, please reach out to outstation.revels@manipal.edu",
      contacts: [{ name: "Shavarni Srivastava", phones: "+91 97001 50301" }],
    },
  ];

  return (
    <>
      <Navbar />
      <Footer />
      <div className="min-h-screen box-border mb-8 p-0 flex flex-col items-center mt-[50px] lg:m-[90px] m-[0px]">
        <div className="">
          <h1 className="font-bold mb-2 text-[#fff] max-lg:mt-[45px] text-2xl md:text-3xl lg:text-4xl m-[30px]">
            Conveners
          </h1>
        </div>
        <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 justify-around gap-4">
          {convenersData.map((convener, index) => (
            <div key={index} className="p-2">
              <ConvenersCard
                name={convener.name}
                pos={convener.pos}
                phone={convener.phone}
                email={convener.email}
                img={convener.img}
              />
            </div>
          ))}
        </div>

        <div className="mt-5 w-full items-center justify-center flex flex-col">
          <h1 className="font-bold text-center text-[#fff] text-2xl md:text-3xl lg:text-4xl">
            Dev Team
          </h1>
          <TechSecCard
            name="Rishabh Jain"
            email="techsec.scmit@manipal.edu"
            img={Rishabh}
            phone="+91 87997 71287"
            pos="Technical Secretary"
          />
          <div className="mt-2 mb-4 w-9/12  flex items-center justify-center">
            <div className="grid auto-rows-auto lg:grid-cols-1 gap-10 md:gap-10 m-[30px] md:flex md:flex-wrap md:place-content-center sm:place-content-center">
              {devTeamData.map((person, index) => (
                <DevTeamCard
                  key={index}
                  img={person.img}
                  name={person.name}
                  pos={person.pos}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 w-full items-center justify-center flex flex-col">
          <div className="mt-2 mb-4 w-11/12 flex flex-wrap justify-center p-5">
            {technicalContacts.map((contactGroup, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white w-72 h-72 m-4 p-4 rounded-lg text-center flex flex-col justify-center"
              >
                <p className="mb-2">{contactGroup.description}</p>
                <div className="flex flex-col items-center">
                  {contactGroup.contacts.map((contact, contactIndex) => (
                    <div key={contactIndex} className="text-center">
                      <p className="font-bold">{contact.name}</p>
                      <a
                        href={`tel:${contact.phones}`}
                        className="text-blue-400 hover:text-blue-300 block mb-2"
                      >
                        {contact.phones}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
