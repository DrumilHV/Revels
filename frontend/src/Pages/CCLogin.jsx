import { useEffect, useState } from "react";
import Logo from "../assets/revels-logo.png";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./Loading";

const Login = () => {
  const navigate = useNavigate();
  const {
    cc,
    loginUser,
    isLoading,
    categoriesData,
    categoryLoading,
    getCategories,
  } = useAppContext();
  const [formData, setFormData] = useState({
    eventName: "",
    password: "",
    categoryType: "",
    categoryName: "",
    eventNameOptions: [],
    categoryOptions: [],
  });

  useEffect(() => {
    if (cc) {
      setTimeout(() => {
        if (cc) navigate("/cc/scanner");
      }, 3000);
    }
  }, [cc, navigate]);

  if (!categoriesData) {
    if (!categoryLoading) {
      getCategories();
    }
    return <LoadingPage />;
  }

  const handleCategoryTypeChange = (event) => {
    const selectedCategoryType = event.target.value;
    const selectedCategory = categoriesData.find(
      (category) => category.category_type === selectedCategoryType
    );

    setFormData({
      ...formData,
      categoryType: selectedCategoryType,
      categoryName: "",
      eventName: "",
      categoryOptions: selectedCategory.categories.map(
        (category) => category.category_name
      ),
      eventNameOptions: [],
    });
  };

  const handleCategoryNameChange = (event) => {
    const selectedCategoryName = event.target.value;
    const selectedCategory = categoriesData.find(
      (category) => category.category_type === formData.categoryType
    );

    const selectedEvents = selectedCategory.categories.find(
      (category) => category.category_name === selectedCategoryName
    ).events;

    setFormData({
      ...formData,
      categoryName: selectedCategoryName,
      eventName: "",
      eventNameOptions: selectedEvents,
    });
  };

  const handleEventNameChange = (event) => {
    setFormData({
      ...formData,
      eventName: event.target.value,
    });
  };

  const handlePasswordChange = (event) => {
    setFormData({
      ...formData,
      password: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("test");
    const { eventName, password } = formData;
    loginUser({ name: eventName, password });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden overscroll-y-hidden py-auto px-6 bg-none md:bg-hero-background bg-bottom">
      <div className="relative h-[600px] w-[1000px] rounded-3xl flex items-center justify-center border-2 bigCard">
        <div className="absolute left-32 p-8 rounded-3xl w-96 h-[450px] shadow-2xl shadow-black-800 hidden lg:block lg:flex lg:flex-col justify-center items-center gap-1 leftCard">
          <img
            className={
              "h-[300px] w-[300px] justify-self-center max-[990px]:right-[1%] right-[15%] transition-all duration-300 ease-in"
            }
            src={Logo}
            alt="Revels 24"
          />
          <h1 className="font-bold text-2xl">Revels 24</h1>
        </div>
        <div className="absolute lg:right-32 p-8 rounded-3xl sm:w-96 h-[500px] shadow-2xl shadow-black-800 rightCard">
          <form onSubmit={handleSubmit} disabled={isLoading}>
            <h2 className="text-2xl text-center text-white font-bold mb-4">
              CC Login
            </h2>
            <div className="mb-4">
              <label className="block text-white text-sm mb-1">
                Category Type
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleCategoryTypeChange}
                value={formData.categoryType}
                placeholder="Category Type"
              >
                <option value="" disabled hidden>
                  Select Category Type
                </option>
                {categoriesData.map((category) => (
                  <option
                    key={category.category_type}
                    value={category.category_type}
                  >
                    {category.category_type}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm mb-1">
                Category Name
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleCategoryNameChange}
                value={formData.categoryName}
                disabled={!formData.categoryType}
                placeholder="Category Name"
              >
                <option value="" disabled hidden>
                  Select Category Name
                </option>
                {formData.categoryOptions.map((categoryName) => (
                  <option key={categoryName} value={categoryName}>
                    {categoryName}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm mb-1">
                Event Name
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleEventNameChange}
                value={formData.eventName}
                disabled={!formData.categoryName}
                placeholder="Event Name"
              >
                <option value="" disabled hidden>
                  Select Event Name
                </option>
                {formData.eventNameOptions.map((eventName) => (
                  <option key={eventName} value={eventName}>
                    {eventName}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handlePasswordChange}
                value={formData.password}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black mt-4 text-white px-4  py-2 rounded hover:-translate-y-0.5 duration-300 hover:shadow-md hover:shadow-slate-900"
              disabled={!formData.eventName || !formData.password}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
