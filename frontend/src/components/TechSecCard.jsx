const TechSecCard = ({ img, name, pos, email, phone }) => {
  return (
    <div className="w-80 h-96 bg-[#eeb398aa] flex flex-col rounded-lg items-center justify-center px-1 pt-4 pb-1 overflow-hidden shadow-lg">
      <img
        className="w-9/12 h-48 rounded-lg object-cover"
        src={img}
        alt="tech sec picture"
      />
      <div className="px-2 py-3">
        <p className="text-center text-[#000000] font-bold text-3xl mb-2">
          {name}
        </p>
        <p className="text-center font-light text-2xl text-[#000000]">{pos}</p>
        <p className="text-center font-light text-2xl text-[#000000]">
          {email}
        </p>
        <p className="text-center font-light text-2xl text-[#000000]">
          {phone}
        </p>
      </div>
    </div>
  );
};

export default TechSecCard;
