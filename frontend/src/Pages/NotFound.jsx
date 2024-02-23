const Error = () => {
  return (
    <>
      <div className="min-h-screen max-h-screen flex justify-center items-center flex-col gap-10 text-center">
        <h1 className="text-[#FFFFFF] font-semibold text-[78px]">
          Page not found
        </h1>
        <a
          href="/"
          className="border rounded-[35px] px-[20px] py-[25px] text-[78px] text-[#FFFFFF]"
        >
          Back to Home Page
        </a>
      </div>
    </>
  );
};

export default Error;
