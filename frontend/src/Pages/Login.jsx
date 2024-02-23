//login page
import { useState } from "react";
import Logo from "../assets/revels-logo.png";

const Login = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    password: "",
    categoryType: "",
    categoryName: "",
    eventNameOptions: [],
    categoryOptions: [],
  });

  const categoriesData = [
    {
      categories: [
        {
          category_name: "XVENTURE",
          events: ["HURDLE HAVEN", "TRAIL AND TAIL"],
        },
        {
          category_name: "LENSATION",
          events: ["PHOTO STORIES", "PHOTO EXHIBIT"],
        },
        {
          category_name: "KALAKRITI",
          events: ["COLLAGE MAKING", "ALPANA", "PIXEL QUEST"],
        },
        {
          category_name: "IRIDESCENT",
          events: ["JEOPARDY"],
        },
        {
          category_name: "HAUTE COUTURE",
          events: ["REVELS ROYALTY"],
        },
        {
          category_name: "FOOTLOOSE",
          events: [
            "STREET DANCE BATTLE-DOWN UNDER",
            "NACHLE VE-SOLO DANCE (EASTERN)",
            "SWAY IT OFF-SOLO DANCE (WESTERN)",
          ],
        },
        {
          category_name: "ERGO",
          events: ["GENERAL QUIZ", "THE ENIGMA QUIZ", "JAM", "POTPOURRI"],
        },
        {
          category_name: "DRAMEBAAZ",
          events: ["SPOTLIGHT", "MAD ADS", "CHARADES"],
        },
        {
          category_name: "CRESCENDO",
          events: ["UNPLUGGED", "ZAMIR", "REVELS IDOL"],
        },
        {
          category_name: "ANUBHUTI",
          events: ["LEHZA", "TARK VITARK"],
        },
        {
          category_name: "ANIMANIA",
          events: ["SQUID GAME"],
        },
        {
          category_name: "AMPERSAND",
          events: ["BACK TO THE FUTURE"],
        },
      ],
      category_type: "GENERAL",
    },
    {
      categories: [
        {
          category_name: "PRE REVELS EVENTS",
          events: ["CURTAIN CALL (DRAMEBAAZ)", "ROCK MOB (CRESCENDO)"],
        },
        {
          category_name: "WORKSHOP",
          events: [
            "CALLIGRAPHY",
            "ASTROPHOTOGRAPHY",
            "KANNADA LEARNING WORKSHOP",
            "HENNA ART",
            "BALL DANCING",
            "TRIP PLANNING",
            "CHILDHOOD GAMES",
            "ORIGAMI",
            "STANDUP SCRIPT WRITING",
          ],
        },
        {
          category_name: "TUG OF WAR",
          events: ["TUG OF WAR (MEN)(MIT STUDENTS ONLY)"],
        },
        {
          category_name: "CHESS(MIT)",
          events: ["CHESS (MEN AND WOMEN)(MIT STUDENTS ONLY)"],
        },
        {
          category_name: "BASKETBALL(MIT)",
          events: [
            "BASKETBALL (WOMEN)(MIT STUDENTS ONLY)",
            "BASKETBALL (MEN)(MIT STUDENTS ONLY)",
          ],
        },
        {
          category_name: "FUTSAL",
          events: ["FUTSAL (MEN)(MIT STUDENTS ONLY)"],
        },
        {
          category_name: "BOX CRICKET",
          events: ["BOX CRICKET (MEN)(MIT STUDENTS ONLY)"],
        },
        {
          category_name: "THROWBALL",
          events: ["THROWBALL (WOMEN)(NON-MIT REGISTRATIONS ONLY)"],
        },
        {
          category_name: "ATHLETICS",
          events: [
            "ATHLETICS (MEN)(NON-MIT REGISTRATIONS ONLY)",
            "ATHLETICS (WOMEN) (NON-MIT REGISTRATIONS ONLY)",
          ],
        },
        {
          category_name: "LAWN TENNIS",
          events: [
            "LAWN TENNIS MIXED DOUBLES(NON-MIT)",
            "LAWN TENNIS (MEN)(NON-MIT REGISTRATIONS ONLY)",
            "LAWN TENNIS (WOMEN) (NON-MIT REGISTRATIONS ONLY)",
          ],
        },
        {
          category_name: "SQUASH",
          events: ["SQUASH (MEN)(NON-MIT REGISTRATIONS ONLY)"],
        },
        {
          category_name: "HOCKEY",
          events: [
            "HOCKEY (MEN)(NON-MIT REGISTRATIONS ONLY)",
            "HOCKEY (WOMEN) (NON-MIT REGISTRATIONS ONLY)",
          ],
        },
        {
          category_name: "TABLE TENNIS",
          events: [
            "TABLE TENNIS MIXED DOUBLES(NON-MIT)",
            "TABLE TENNIS (MEN)(NON-MIT REGISTRATIONS ONLY)",
            "TABLE TENNIS (WOMEN)(NON-MIT REGISTRATIONS ONLY)",
          ],
        },
        {
          category_name: "VOLLEYBALL",
          events: [
            "VOLLEYBALL (MEN)(NON-MIT REGISTRATIONS ONLY)",
            "VOLLEYBALL (WOMEN) (NON-MIT REGISTRATIONS ONLY)",
          ],
        },
        {
          category_name: "SWIMMING",
          events: [
            "SWIMMING (MEN)(NON-MIT REGISTRATIONS ONLY)",
            "SWIMMING (WOMEN) (NON-MIT REGISTRATIONS ONLY)",
          ],
        },
        {
          category_name: "FOOTBALL",
          events: [
            "FOOTBALL (MEN)(NON-MIT REGISTRATIONS ONLY)",
            "FOOTBALL (WOMEN) (NON-MIT REGISTRATIONS ONLY)",
          ],
        },
        {
          category_name: "CHESS",
          events: ["CHESS (MEN AND WOMEN)(NON-MIT REGISTRATIONS ONLY)"],
        },
        {
          category_name: "BASKETBALL",
          events: [
            "BASKETBALL(WOMEN)(NON-MIT)",
            "BASKETBALL (MEN)(NON-MIT REGISTRATIONS ONLY)",
          ],
        },
        {
          category_name: "CRICKET",
          events: ["CRICKET (MEN)(NON-MIT REGISTRATIONS ONLY)"],
        },
        {
          category_name: "BADMINTON",
          events: [
            "BADMINTON MIXED DOUBLES(NON-MIT)",
            "BADMINTON(WOMEN)(NON MIT ONLY)",
            "BADMINTON (MEN)(NON-MIT REGISTRATIONS ONLY)",
          ],
        },
      ],
      category_type: "SPORTS AND WORKSHOPS",
    },
    {
      categories: [
        {
          category_name: "XVENTURE-FLAGSHIP",
          events: ["LIGHT STRIKE"],
        },
        {
          category_name: "LENSATION-FLAGSHIP",
          events: ["PRODUCT PHOTOGRAPHY"],
        },
        {
          category_name: "KALAKRITI-FLAGSHIP",
          events: ["ABSTRACT ART COMPETITION", "SKETCHORAMA"],
        },
        {
          category_name: "IRIDESCENT-FLAGSHIP",
          events: ["NETFLIX AND NO CHILL"],
        },
        {
          category_name: "HAUTE COUTURE-FLAGSHIP",
          events: ["THEME VOGUE BLITZ"],
        },
        {
          category_name: "FOOTLOOSE-FLAGSHIP",
          events: ["GROOVE-GROUP DANCE"],
        },
        {
          category_name: "ERGO-FLAGSHIP",
          events: ["MITDT"],
        },
        {
          category_name: "DRAMEBAAZ-FLAGSHIP",
          events: ["NUKKAD NATAK", "CURTAIN CALL"],
        },
        {
          category_name: "CRESCENDO-FLAGSHIP",
          events: ["THE BIG BAND THEORY"],
        },
        {
          category_name: "ANUBHUTI-FLAGSHIP",
          events: ["ANTAKSHRI"],
        },
        {
          category_name: "ANIMANIA-FLAGSHIP",
          events: ["CHUNNIN EXAMS"],
        },
        {
          category_name: "AMPERSAND-FLAGSHIP",
          events: ["AIRCRASH"],
        },
      ],
      category_type: "FLAGSHIP",
    },
  ];

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
    console.log(formData);
  };

  return (
    // <div className="flex items-center justify-center h-screen bg-none md:bg-hero-background bg-bottom`">
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
          <h1 className="font-bold text-2xl">Revels' 24</h1>
        </div>
        <div className="absolute lg:right-32 p-8 rounded-3xl sm:w-96 h-[500px] shadow-2xl shadow-black-800 rightCard">
          <form onSubmit={handleSubmit}>
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
                {/* Map through category types */}
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
                {/* Map through category names */}
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
                {/* Map through event names */}
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
