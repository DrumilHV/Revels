//Sponsors.jsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SponsorCard from "../components/SponsorCard";
import PropTypes from "prop-types";

const Sponsors = ({ sponsor_data }) => {
  Sponsors.propTypes = {
    sponsor_data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  return (
    <>
      <Navbar />
      <Footer />
      <div className="min-h-screen max-h-screen overflow-y-auto md:p-10 md:pb-20 px-4 pb-20 no-scrollbar lg:mt-[50px] sm:mt-[400px] md:mt-[400px]">
        <div className="px-6">
          <h1 className="text-md p-6 text-[#FFFFFF] font-medium text-center text-3xl">
            Sponsors Title
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Rendering sponsor cards */}
            {sponsor_data.map((sponsor, index) => (
              <div key={index} className="md:w-full">
                <SponsorCard
                  name={sponsor.name}
                  image={sponsor.image}
                  description={sponsor.description}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="px-6">
          <h1 className="text-md p-6 text-[#FFFFFF] font-medium text-center text-3xl">
            Co-Partners
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Rendering sponsor cards */}
            {sponsor_data.map((sponsor, index) => (
              <div key={index} className="md:w-full">
                <SponsorCard
                  name={sponsor.name}
                  image={sponsor.image}
                  description={sponsor.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;

// // data
// const sponsors = [
//   {
//     name: "Sponsor A",
//     image: "/revels-logo.png",
//     description: "Description of Sponsor A\n",
//   },
//   {
//     name: "Sponsor B",
//     image: "/revels-logo.png",
//     description:
//       "Description of Sponsor B\nLorem ipsum dolor sit amet, consecuis aute irure dolor sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labou",
//   },
//   {
//     name: "Sponsor C",
//     image: "/revels-logo.png",
//     description:
//       "Description of Sponsor C\nLorem ipsum dolor sit amet, consecuis aute irure dolor sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labou,C",
//   },
//   {
//     name: "Sponsor D",
//     image: "/revels-logo.png",
//     description:
//       "Description of Sponsor D\nLorem ipsum dolor sit amet, consecuis aute irure dolor sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labou",
//   },
//   {
//     name: "Sponsor E",
//     image: "/revels-logo.png",
//     description:
//       "Description of Sponsor E\nLorem ipsum dolor sit amet, consecuis aute irure dolor sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labou",
//   },
//   // Add more sponsors as needed
// ];
