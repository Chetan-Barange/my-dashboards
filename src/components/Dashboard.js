import React, { useState } from "react";
import {
  FaChevronRight,
  FaChartBar,
  FaPlus,
  FaBell,
  FaEllipsisV,
  FaTimes,
  FaRedoAlt,
} from "react-icons/fa";
import SearchBar from "./SearchBar";
import AddWidgetModal from "./AddWidgetModal";
import AddCategoryWidget from "./AddCategoryWidget";
import WidgetGrid from "./WidgetGrid";

const Dashboard = () => {
  
  const [isAddCategoryWidgetsModalOpen, setIsAddCategoryWidgetsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isWidgetModalOpen, setIsWidgetModalOpen] = useState(false);
  const [widgets, setWidgets] = useState({
    CSPM: [],
    CWPP: [],
    'Registry Scan': [],
  });
  const [isAddWidgetOpen, setIsAddWidgetOpen] = useState(false);

  const handleAddCategoryWidget = () => {
    setIsAddCategoryWidgetsModalOpen(!isAddCategoryWidgetsModalOpen);
  };

  const handleAddWidget = () => {
    setIsWidgetModalOpen(!isWidgetModalOpen);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredWidgets = (widgets) =>
    widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  
  const handleRemoveWidget = (category, index) => {
    const updatedWidgets = { ...widgets };
    updatedWidgets[category].splice(index, 1);
    setWidgets(updatedWidgets);
  };

  const addWidget = (widget) => {
    setWidgets((prevWidgets) => ({
      ...prevWidgets,
      [widget.category]: [...prevWidgets[widget.category], widget],
    }));
  };
  
  const handleRefresh = () => {
    window.location.reload();
  };

  // const onChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  return (
    <div>
      <div className="flex justify-between items-center mx-4">
        <div className="flex items-center px-8 space-x-2 my-2">
          <p className="text-gray-500 font-semibold">HOME</p>
          <span>
            <FaChevronRight className="mt-1 text-gray-500" />
          </span>
          <p className="font-bold">Dashboard V2</p>
        </div>
        <div className="flex items-center space-x-2">
          <SearchBar setSearchTerm={setSearchTerm} />

          <FaBell className="text-gray-700 text-xl m-2" />
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">CNAPP Dashboard</h1>
          <div className="flex items-center space-x-2">
            <button
              className="px-4 py-1 text-black bg-white border text-black rounded-md"
              onClick={handleAddCategoryWidget}
            >
              Add Widgets +
            </button>
            <button
              onClick={handleRefresh}
              className="p-2 text-black bg-white border rounded-md flex items-center"
            >
              <FaRedoAlt />
            </button>
            <button className="p-2 text-black bg-white border rounded-md">
              <FaEllipsisV />
            </button>
            <div className="relative">
              <select className="p-2 rounded-md cursor-pointer border text-blue-900 border-blue-900">
                <option>Last 2 days</option>
                <option>Last week</option>
                <option>Last month</option>
              </select>
            </div>
          </div>
        </div>
        <h3 className="font-semibold px-2">CSPM Executive Dashboard</h3>
        <div className="grid grid-cols-3 gap-6 p-2">
          <div className="col-span-1 bg-white p-4 rounded-lg shadow justify-center">
            <p className="text-sm font-semibold mb-2">Cloud Accounts</p>
            <div className="flex items-center">
              <div className="relative flex items-center justify-center">
                <div
                  className="w-24 h-24 rounded-full border-12 border-transparent bg-clip-border 
                              before:absolute before:content-[''] before:w-full before:h-full 
                              before:rounded-full before:border-8 before:border-transparent 
                              before:border-l-blue-500 before:border-t-blue-500 
                              before:border-b-blue-100 before:border-r-blue-100"
                >
                  <div className="absolute flex-col text-center p-7 text-black-800">
                    <p className="text-xl font-bold ">2 </p>
                    <p className="text-sm">Total</p>
                  </div>
                </div>
              </div>

              <div className="ml-16 ">
                <div className="flex py-1">
                  <p className="bg-blue-500 px-3 rounded-lg mx-2"></p>
                  <p>Connected (2)</p>
                </div>
                <div className="flex py-1">
                  <p className="bg-blue-100 px-3 rounded-lg mx-2"></p>
                  <p>Not Connected (2)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-white p-4 rounded-lg shadow">
            <p className="text-xm font-semibold mb-2">
              Cloud Account Risk Assessment
            </p>
            <div className="flex items-center">
              <div className="relative flex items-center justify-center">
                <div
                  className="w-24 h-24 rounded-full border-12 border-transparent bg-clip-border 
                                before:absolute before:content-[''] before:w-full before:h-full 
                                before:rounded-full before:border-8 before:border-transparent 
                                before:border-l-yellow-300 before:border-t-red-500 
                                before:border-b-green-500 before:border-r-green-500"
                >
                  <div className="absolute flex-col text-center p-6 text-black-800">
                    <p className="text-xl font-bold ">9659</p>
                    <p className="text-sm">Total</p>
                  </div>
                </div>
              </div>
              <div className="ml-16 font-semibold ">
                <div className="flex py-1">
                  <p className="bg-red-500 px-3 rounded-lg mx-2"></p>
                  <p>Failed (1689)</p>
                </div>
                <div className="flex ">
                  <p className="bg-yellow-300 px-3 rounded-lg mx-2"></p>
                  <p>Warning (681)</p>
                </div>
                <div className="flex py-1 ">
                  <p className="bg-gray-300 px-3 rounded-lg mx-2"></p>
                  <p>Not Available (36)</p>
                </div>
                <div className="flex ">
                  <p className="bg-green-500 px-3 rounded-lg mx-2"></p>
                  <p>Passed (7253)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-white p-4 rounded-lg shadow">
            <button
              onClick={handleAddWidget}
              className="w-full h-full  rounded-lg text-gray-400 flex items-center justify-center"
            >
              <div className="border-2 flex  text-sm border-gray-300 text-gray-500 font-semibold rounded-lg px-3 py-1">
                {" "}
                <p className="py-1">
                  <FaPlus />{" "}
                </p>{" "}
                <p className="py-1">Add Widget</p>{" "}
              </div>
            </button>
          </div>
        </div>

        <h3 className="font-semibold p-2 mt-2">CWPP Dashboard</h3>
        <div className="grid grid-cols-3 gap-6 p-2">
          <div className="col-span-1 bg-white p-4 rounded-lg shadow flex flex-col space-y-6">
            <p className="text-sm font-semibold mb-2">
              Top 5 Namespace Specific Alerts
            </p>
            <div className="flex flex-col items-center py-2 ">
              <FaChartBar className="text-3xl text-gray-300 mb-2" />
              <p className="pb-4">No Graph data available!</p>
            </div>
          </div>
          <div className="col-span-1 bg-white p-4 rounded-lg shadow flex flex-col space-y-6">
            <p className="text-sm font-semibold mb-2">Workload Alerts</p>
            <div className="flex flex-col items-center py-2 ">
              <FaChartBar className="text-3xl text-gray-300 mb-2" />
              <p className="pb-4">No Graph data available!</p>
            </div>
          </div>

          <div className="col-span-1 bg-white p-4 rounded-lg shadow">
            <button
              onClick={handleAddWidget}
              className="w-full h-full  rounded-lg text-gray-400 flex items-center justify-center"
            >
              <div className="border-2 flex  text-sm border-gray-300 text-gray-500 font-semibold rounded-lg px-3 py-1">
                {" "}
                <p className="py-1">
                  <FaPlus />{" "}
                </p>{" "}
                <p className="py-1">Add Widget</p>{" "}
              </div>
            </button>
          </div>
        </div>

        <h3 className="font-semibold p-2 mt-2">Registry Scan</h3>
        <div className="grid grid-cols-3 gap-6 p-2">
          <div className="col-span-1 bg-white p-4 rounded-lg shadow flex flex-col space-y-6">
            <p className="text-sm font-semibold mb-2">image Risk Assessment</p>
            <div className="text-lg font-semibold mb-2">
              1470 Total Vulnerabilities
            </div>
            <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
              <div
                className="absolute top-0 left-0 h-full bg-red-600"
                style={{ width: "1.5%" }}
              ></div>

              <div
                className="absolute top-0 h-full bg-orange-500"
                style={{ left: "1.5%", width: "10.2%" }}
              ></div>

              <div
                className="absolute top-0 h-full bg-yellow-400"
                style={{ left: "11.7%", width: "77%" }}
              ></div>

              <div
                className="absolute top-0 h-full bg-gray-300"
                style={{ left: "88.7%", width: "11.3%" }}
              ></div>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <span className="w-4 h-4 bg-red-600 block rounded-lg"></span>
                <span className="text-sm">Critical (9)</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="w-4 h-4 bg-orange-500 block rounded-lg"></span>
                <span className="text-sm">High (150)</span>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-white p-4 rounded-lg shadow flex flex-col space-y-6">
            <p className="text-sm font-semibold mb-2">Image Security Issues</p>
            <div className="text-lg font-semibold mb-2">
              1470 Total Vulnerabilities
            </div>
            <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
              <div
                className="absolute top-0 left-0 h-full bg-red-600"
                style={{ width: "1.5%" }}
              ></div>

              <div
                className="absolute top-0 h-full bg-orange-500"
                style={{ left: "1.5%", width: "10.2%" }}
              ></div>

              <div
                className="absolute top-0 h-full bg-yellow-400"
                style={{ left: "11.7%", width: "77%" }}
              ></div>

              <div
                className="absolute top-0 h-full bg-gray-300"
                style={{ left: "88.7%", width: "11.3%" }}
              ></div>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <span className="w-4 h-4 bg-red-600 block rounded-full"></span>
                <span className="text-sm">Critical (9)</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="w-4 h-4 bg-orange-500 block rounded-full"></span>
                <span className="text-sm">High (150)</span>
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-white p-4 rounded-lg shadow">
            <button
              onClick={handleAddWidget}
              className="w-full h-full  rounded-lg text-gray-400 flex items-center justify-center"
            >
              <div className="border-2 flex  text-sm border-gray-300 text-gray-500 font-semibold rounded-lg px-3 py-1">
                {" "}
                <p className="py-1">
                  <FaPlus />{" "}
                </p>{" "}
                <p className="py-1">Add Widget</p>{" "}
              </div>
            </button>
          </div>
        </div>

        <div className="bg-gray-100 min-h-screen p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold">CNAPP Dashboard</h1>
            <div className="flex items-center space-x-2">
              <button
                className="px-4 py-1 text-black bg-white border text-black rounded-md"
                onClick={handleAddCategoryWidget}
              >
                Add Widgets +
              </button>
              <button
                onClick={handleRefresh}
                className="p-2 text-black bg-white border rounded-md flex items-center"
              >
                <FaRedoAlt />
              </button>
              <button className="p-2 text-black bg-white border rounded-md">
                <FaEllipsisV />
              </button>
            </div>
          </div>
          {Object.entries(widgets).map(([category, widgets]) => (
            
        <div key={category}>
          <h3 className="font-semibold px-2">{category} Dashboard</h3>
          <div className="grid grid-cols-3 gap-6 p-2">
            {widgets.map((widget, index) => (
              <div
                key={index}
                className="col-span-1 bg-white p-4 rounded-lg shadow relative"
              >
                <button
                  onClick={() => handleRemoveWidget(category, index)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-red-400"
                >
                  <FaTimes />
                </button>
                <p className="text-sm font-semibold mb-2">{widget.name}</p>
                <p>{widget.text}</p>
              </div>
            ))}
            <div className="col-span-1 bg-white p-4 rounded-lg shadow">
              <button
                onClick={handleAddWidget}
                className="w-full h-full rounded-lg text-gray-400 flex items-center justify-center"
              >
                <div className="border-2 flex text-sm border-gray-300 text-gray-500 font-semibold rounded-lg px-3 py-1">
                  <p className="p-1">
                    <FaPlus />
                  </p>
                  <p className="py-1">Add Widget</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      ))}
      <SearchBar setSearchTerm={setSearchTerm} />
      <WidgetGrid
        widgets={widgets}
        searchTerm={searchTerm}
        handleRemoveWidget={handleRemoveWidget}
        handleAddWidget={handleAddWidget}
      />

          <AddWidgetModal
            isOpen={isWidgetModalOpen}
            onClose={handleAddWidget}
            addWidget={addWidget}
            widgets={widgets}
          /> 
        </div>
        <AddCategoryWidget isOpen={isAddCategoryWidgetsModalOpen} 
        onClose={handleAddCategoryWidget} 
        addWidget={addWidget}
         />
      </div>
    </div>
  );
};

export default Dashboard;
