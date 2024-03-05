// Leaderboard.jsx
/* eslint-disable react/jsx-key */
import { useEffect, useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";
import Footer from "../components/Footer";

const Leaderboard = ({ data }) => {
  Leaderboard.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        eventname: PropTypes.string.isRequired,
        eventRanking: PropTypes.arrayOf(
          PropTypes.shape({
            position: PropTypes.number,
            delegateId: PropTypes.string.isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  };
  const [datas, setDatas] = useState([]);
  const [categoryType, setCategoryType] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(function () {
    async function fetchEventsData() {
      try {
        const res = await fetch(`eventData.json`);
        const datas = await res.json();
        setDatas(datas);
        // console.log(data);
      } catch {
        console.error("Error fetching events data");
      }
    }

    fetchEventsData();
  }, []);

  const onSubmit = async (formData) => {
    try {
      const response = await fetch(
        "http://localhost:17392/leaderboard/fetchleaderboard",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const leaderboardData = await response.json();
        console.log(
          "Fetched data from leaderboard successfully:",
          leaderboardData
        );

        // Filter the leaderboard data based on the form data
        const filteredData = leaderboardData.filter(
          (event) => event.eventname === "New Event"
        );

        console.log("Filtered Data:", filteredData);

        // Update the state with the filtered data
        setFilterData(filteredData);
      } else {
        console.error("Failed to fetch data from leaderboard");
      }
    } catch (error) {
      console.error("Error fetching data from leaderboard:", error);
    }
  };
  // useEffect(() => {
  //   console.log("Filter Data:", filterData);
  // }, [filterData]); // This effect will run whenever filterData changes

  const handleCategoryTypeChange = (e) => {
    setCategoryType(e.target.value);
  };

  const handleCategoryNameChange = (e) => {
    setCategoryName(e.target.value);
    onSubmit(e.target.value);
  };

  const filteredData = useMemo(() => {
    if (!categoryType || !categoryName) {
      return [];
    }
    return data.filter(
      (event) =>
        event.category_type === categoryType &&
        event.category_name === categoryName
    );
  }, [data, categoryType, categoryName]);

  return (
    <>
      <Navbar />
      <Footer />
      <div
        className={`min-h-screen max-h-screen flex flex-col md:items-center px-2 gap-y-8  overflow-hidden overscroll-y-auto pt-32 pb-28 md:pb-0 bg-bottom`}
      >
        <div className="flex flex-col sm:flex-row gap-x-10 md:w-4/5 sm:justify-center py-4 px-6 rounded-lg">
          <select
            value={categoryType}
            onChange={handleCategoryTypeChange}
            className="py-1 px-2 rounded cursor-pointer font-medium text-black focus:outline-none selectCard"
          >
            <option value="" disabled hidden>
              Select Category Type
            </option>
            {datas
              .filter((item) => item.category_type)
              .map((item) => (
                <option key={item.category_type}>{item.category_type}</option>
              ))}
          </select>

          <select
            value={categoryName}
            onChange={handleCategoryNameChange}
            className="py-1 px-2 rounded cursor-pointer font-medium text-black focus:outline-none selectCard"
          >
            <option value="" disabled hidden>
              Select Category Name
            </option>
            {(
              datas.find((item) => item.category_type === categoryType) || {
                categories: [],
              }
            ).categories.map((categoryData) => (
              <option key={categoryData.category_name}>
                {categoryData.category_name}
              </option>
            ))}
          </select>
        </div>

        <div className="justify-center grid md:grid-cols-1 lg:grid-cols-1 gap-x-4 gap-y-8 md:w-4/5 items-start md:h-[500px] overflow-y-auto px-6 rounded-lg py-8 mb-[20px] no-scrollbar overflow-x-hidden">
          {filterData &&
            filterData.map((event, index) => {
              return (
                <div
                  key={index}
                  className="md:ml-[5%] md:mr-[5%] rounded bg-[#EACCAF] px-[10px] py-[10px] bg-opacity-[0.4] no-scrollbar overscroll-y-auto min-w-full mt-0"
                >
                  <div className="">
                    <div className="mb-8">
                      <h3 className="pb-2 font-bold xl:text-3xl md:text-xl text-[#2C2F42] text-center mt-[1%]">
                        {event.eventname}
                      </h3>
                      <table className="table-auto w-full text-[#FFF]">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 text-left xl:text-[27px] md:text-[26px] border-b border-[#2C2F42]">
                              Position
                            </th>
                            <th className="px-4 py-2 text-right xl:text-[27px] md:text-[26px] border-b border-[#2C2F42]">
                              Delegate ID
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {event.eventRanking.map((row, rowIndex) => (
                            <tr key={rowIndex} className="border-b">
                              <td className="px-4 py-2 text-left xl:text-[21px] md:text-[16px] border-b border-[#2C2F42]">
                                {row.position || rowIndex + 1}
                              </td>
                              <td className="px-4 py-2 text-right xl:text-[21px] md:text-[16px] border-b border-[#2C2F42]">
                                {row.delegateId}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
