import PropTypes from "prop-types";

function SponsorCard({ name, image, description }) {
  SponsorCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  return (
    <div className="bg-[#E1D2B6] bg-opacity-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg">
      <div className="flex">
        <div className="w-1/2 py-4 pl-4 items-centre object-center">
          <img src={image} alt={name} className="w-full h-auto object-center" />
        </div>
        <div className="w-1/2 p-4 text-justify">
          <h3 className="text-lg md:text-xl font-semibold mb-2">{name}</h3>
          <p className="text-sm md:text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SponsorCard;
