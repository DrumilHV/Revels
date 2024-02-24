const ConvenersCard = ({ name, pos, phone, email, img }) => {
  return (
    <div className="sm:mt-0 md:mt-0">
      <div className="flex justify-center items-center">
        <div className="bg-[#eeb398aa] flex items-center p-2 lg:w-[80%] gap-3 rounded-lg max-h-[399.350px]">
          <div className="img justify-center bg-[#282C52] rounded-lg overflow-hidden w-32 h-32">
            <img className="object-cover w-full h-full" src={img} alt="" />
          </div>
          <div className="convener-details w-auto p-0">
            <p className="text-2xl md:text-2xl font-bold text-[#000000]">
              {name}
            </p>
            <div className="flex flex-col justify-start">
              <p className="text-[#000000c3] text-xl max-sm:pt-[2px] max-sm:text-sm md:text-sm lg:text-xl">
                {pos}
              </p>
              <p className="text-[#000000c3] text-xl max-sm:pt-[2px] max-sm:text-sm md:text-sm lg:text-xl">
                {phone}
              </p>
              <p className="text-[#000000c3] text-xl max-sm:pt-[2px] max-sm:text-sm md:text-sm lg:text-xl overflow-hidden">
                {email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvenersCard;
