const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-4 px-6 text-center">
      <p className="text-sm">
        Have any questions or feedback? <br className="lg:hidden" /> Please fill
        out{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf5-SPjnXysx0GvLzx0TTITwVmURtlLwCGvv6xwnp5uvRyjPg/viewform"
          className="text-blue-400 hover:text-blue-300 z-[100]"
          target="_blank"
          rel="noopener noreferrer"
        >
          this form
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
