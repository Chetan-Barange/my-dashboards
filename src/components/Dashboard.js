// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Widget from './Widget';
// import AddWidget from './AddWidget';
// import SearchBar from './SearchBar';

// function Dashboard() {
//   const categories = useSelector((state) => state.dashboard.categories);
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredCategories = categories.map((category) => ({
//     ...category,
//     widgets: category.widgets.filter((widget) =>
//       widget.name.toLowerCase().includes(searchTerm.toLowerCase())
//     ),
//   }));

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">My Dynamic Dashboard</h1>
//       <SearchBar setSearchTerm={setSearchTerm} />

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredCategories.map((category) => (
//           <div key={category.name} className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
//             <div className="space-y-4">
//               {category.widgets.map((widget) => (
//                 <Widget key={widget.id} widget={widget} category={category.name} />
//               ))}
//             </div>
//             <AddWidget categoryName={category.name} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React, { useState } from "react";
import {
  FaChevronRight,
  FaChartBar,
  FaPlus,
  FaBell,
  FaEllipsisV,
  FaRedoAlt,
} from "react-icons/fa";
import SearchBar from "./SearchBar";

const AddWidgetModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Add Widget</h2>
        <div className="border-b mb-4">
          <ul className="flex space-x-4 text-gray-700 font-semibold">
            <li className="border-b-2 border-blue-600">CSPM</li>
            <li>CWPP</li>
            <li>Image</li>
            <li>Ticket</li>
          </ul>
        </div>
        <div className="space-y-2">
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                defaultChecked
              />
              <span className="ml-2 text-gray-700">Cloud Accounts</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                defaultChecked
              />
              <span className="ml-2 text-gray-700">Cloud Account Risk Assessment</span>
            </label>
          </div>
        </div>
        <div className="flex justify-end mt-4 space-x-4">
          <button
            className="px-4 py-2 bg-gray-200 text-black rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            onClick={onClose}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [isWidgetModalOpen, setIsWidgetModalOpen] = useState(false);

  const handleAddWidget = () => {
    setIsWidgetModalOpen(!isWidgetModalOpen);
  };

  const handleRefresh = () => {
    window.location.reload(); // Refresh the page
  };

  const data = {
    labels: ["Failed", "Warning", "Not available", "Passed"],
    datasets: [
      {
        data: [1689, 681, 38, 7253],
        backgroundColor: ["#d32f2f", "#fbc02d", "#cfd8dc", "#388e3c"],
        hoverBackgroundColor: ["#e57373", "#fff176", "#eceff1", "#66bb6a"],
      },
    ],
  };

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
          <SearchBar />
          <FaBell className="text-gray-700 text-xl m-2" />
        </div>
      </div>

      <div className="bg-blue-50 min-h-screen p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">CNAPP Dashboard</h1>
          <div className="flex items-center space-x-2">
            <button
              className="px-4 py-2 text-black bg-white border text-black rounded-lg"
              onClick={handleAddWidget}
            >
              Add Widget +
            </button>
            <button
              onClick={handleRefresh}
              className="p-2 text-black bg-white border rounded-lg flex items-center"
            >
              <FaRedoAlt />
            </button>
            <button className="p-2 text-black bg-white border rounded-lg">
              <FaEllipsisV />
            </button>
            <div className="relative">
              <select className="p-2 rounded-lg cursor-pointer border text-blue-900 border-blue-900">
                <option>Last 2 days</option>
                <option>Last week</option>
                <option>Last month</option>
              </select>
            </div>
          </div>
        </div>
        <h3 className='font-semibold px-2'>CSPM Executive Dashboard</h3>
        <div className="grid grid-cols-3 gap-6 p-2">
        
          <div className="col-span-1 bg-white p-4 rounded-lg shadow justify-center">
          
            <p className="text-sm font-semibold mb-2">Cloud Accounts</p>
            <div className="flex items-center">
            <div className="relative flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-12 border-transparent bg-clip-border 
                              before:absolute before:content-[''] before:w-full before:h-full 
                              before:rounded-full before:border-8 before:border-transparent 
                              before:border-l-blue-500 before:border-t-blue-500 
                              before:border-b-blue-100 before:border-r-blue-100">
                <div className="absolute flex-col text-center p-7 text-black-800">
                 <p className='text-xl font-bold '>2 </p>
                 <p className='text-sm'>Total</p>
                </div>
              </div>
            </div>

              
              <div className="ml-16 ">
                <div className='flex py-1'>
                <p className='bg-blue-500 px-3 rounded-lg mx-2'></p><p>Connected (2)</p>
                </div>
                <div className='flex py-1'>
                <p className='bg-blue-100 px-3 rounded-lg mx-2'></p><p>Not Connected (2)</p>
                </div>
                </div>
              </div>
          </div>


          <div className="col-span-1 bg-white p-4 rounded-lg shadow">
            <p className="text-xm font-semibold mb-2">Cloud Account Risk Assessment</p>
            <div className="flex items-center">
              <div className="relative flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-12 border-transparent bg-clip-border 
                                before:absolute before:content-[''] before:w-full before:h-full 
                                before:rounded-full before:border-8 before:border-transparent 
                                before:border-l-yellow-300 before:border-t-red-500 
                                before:border-b-green-500 before:border-r-green-500">
                  <div className="absolute flex-col text-center p-6 text-black-800">
                  <p className='text-xl font-bold '>9659</p>
                  <p className='text-sm'>Total</p>
                  </div>
                </div>
              </div>
              <div className="ml-16 font-semibold ">
                <div className='flex py-1'>
                <p className='bg-red-500 px-3 rounded-lg mx-2'></p><p>Failed (1689)</p>
                </div>
                <div className='flex '>
                <p className='bg-yellow-300 px-3 rounded-lg mx-2'></p><p>Warning (681)</p>
                </div>
                <div className='flex py-1 '>
                <p className='bg-gray-300 px-3 rounded-lg mx-2'></p><p>Not Available (36)</p>
                </div>
                <div className='flex '>
                <p className='bg-green-500 px-3 rounded-lg mx-2'></p><p>Passed (7253)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-white p-4 rounded-lg shadow">
          <button onClick={handleAddWidget} className="w-full h-full  rounded-lg text-gray-400 flex items-center justify-center">
              <div className='border-2 flex  text-sm border-gray-300 text-gray-500 font-semibold rounded-lg px-3 py-1'> <p className='p-1'><FaPlus/> </p> <p className='py-1'>Add Widget</p> </div>
            </button>
          </div>
        </div>

        <h3 className='font-semibold p-2 mt-2'>CWPP Dashboard</h3>
        <div className="grid grid-cols-3 gap-6 p-2">
          <div className="col-span-1 bg-white p-4 rounded-lg shadow flex flex-col space-y-6">
            <p className="text-sm font-semibold mb-2">Top 5 Namespace Specific Alerts</p>
            <div className="flex flex-col items-center py-2 ">
              <FaChartBar className='text-3xl text-gray-300 mb-2'/>
              <p className='pb-4'>No Graph data available!</p>
            </div>
          </div>
          <div className="col-span-1 bg-white p-4 rounded-lg shadow flex flex-col space-y-6">
            <p className="text-sm font-semibold mb-2">Workload Alerts</p>
            <div className="flex flex-col items-center py-2 ">
              <FaChartBar className='text-3xl text-gray-300 mb-2'/>
              <p className='pb-4'>No Graph data available!</p>
            </div>
          </div>

          
          <div className="col-span-1 bg-white p-4 rounded-lg shadow">
            <button onClick={handleAddWidget} className="w-full h-full  rounded-lg text-gray-400 flex items-center justify-center">
              <div className='border-2 flex  text-sm border-gray-300 text-gray-500 font-semibold rounded-lg px-3 py-1'> <p className='p-1'><FaPlus/> </p> <p className='py-1'>Add Widget</p> </div>
            </button>
          </div>
        </div>

        <h3 className='font-semibold p-2 mt-2'>Registry Scan</h3>
        <div className="grid grid-cols-3 gap-6 p-2">
          <div className="col-span-1 bg-white p-4 rounded-lg shadow flex flex-col space-y-6">
            <p className="text-sm font-semibold mb-2">image Risk Assessment</p>
            <div className="text-lg font-semibold mb-2">1470 Total Vulnerabilities</div>
          <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
          
            <div
              className="absolute top-0 left-0 h-full bg-red-600"
              style={{ width: '1.5%' }}
            ></div>
          
            <div
              className="absolute top-0 h-full bg-orange-500"
              style={{ left: '1.5%', width: '10.2%' }}
            ></div>
            
            <div
              className="absolute top-0 h-full bg-yellow-400"
              style={{ left: '11.7%', width: '77%' }}
            ></div>
          
            <div
              className="absolute top-0 h-full bg-gray-300"
              style={{ left: '88.7%', width: '11.3%' }}
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
            <div className="text-lg font-semibold mb-2">1470 Total Vulnerabilities</div>
          <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
          
            <div
              className="absolute top-0 left-0 h-full bg-red-600"
              style={{ width: '1.5%' }}
            ></div>
          
            <div
              className="absolute top-0 h-full bg-orange-500"
              style={{ left: '1.5%', width: '10.2%' }}
            ></div>
            
            <div
              className="absolute top-0 h-full bg-yellow-400"
              style={{ left: '11.7%', width: '77%' }}
            ></div>
          
            <div
              className="absolute top-0 h-full bg-gray-300"
              style={{ left: '88.7%', width: '11.3%' }}
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
            <button onClick={handleAddWidget} className="w-full h-full  rounded-lg text-gray-400 flex items-center justify-center">
              <div className='border-2 flex  text-sm border-gray-300 text-gray-500 font-semibold rounded-lg px-3 py-1'> <p className='p-1'><FaPlus/> </p> <p className='py-1'>Add Widget</p> </div>
            </button>
          </div>
        </div>
        <AddWidgetModal isOpen={isWidgetModalOpen} onClose={handleAddWidget} />
      </div>
    </div>
  );
};

export default Dashboard;
