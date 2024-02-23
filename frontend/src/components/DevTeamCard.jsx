const DevTeamCard = ({ img, name, pos }) => {
  return (
    <div className="w-80 h-66 bg-[#eeb398aa] flex flex-col rounded-lg items-center justify-center px-1 pt-4 pb-1 overflow-hidden shadow-lg">
      <img
        className="w-10/12 h-40 rounded-lg object-cover"
        src={img}
        alt="dev team picture"
      />
      <div className="px-2 py-3">
        <p className="text-center text-[#000000] font-bold text-3xl mb-2">
          {name}
        </p>
        <p className="text-center font-light text-2xl text-[#000000]">{pos}</p>
      </div>
    </div>
  );
};

export default DevTeamCard;
