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
import React from "react";
import { FaChevronRight,FaBell } from 'react-icons/fa'; 
import SearchBar from "./SearchBar";

const Dashboard = () => {
  return (
    <div>
    <div className="flex justify-between mx-4">
      <div className=" flex px-8">
        <p className="text-gray-500 font-semibold">HOME</p>
        <span>
          <FaChevronRight className="mt-1 text-gray-500" />
        </span>
        <p className="font-bold">Dashboard V2</p>
      </div>
      <div className="flex">
        <SearchBar/>
      </div>
      <div className="relative">
  <button className="p-2 border bg-blue-50 border-gray-300 rounded-lg">
    <FaBell className="text-gray-700" />
  </button>
</div>

    </div>  
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">CNAPP Dashboard</h1>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Add Widget</button>
          <div className="relative">
            <select className="p-2 rounded-lg border border-gray-300">
              <option>Last 2 days</option>
              <option>Last week</option>
              <option>Last month</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* CSPM Executive Dashboard */}
        <div className="col-span-1 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Cloud Accounts</h2>
          <div className="flex items-center">
            <div className="w-20 h-20">
              {/* Insert your chart here */}
              <img src="/path/to/your-donut-chart.png" alt="Cloud Accounts Chart" />
            </div>
            <div className="ml-4">
              <p className="text-xl font-semibold">2 Total</p>
              <p>Connected (2)</p>
              <p>Not Connected (2)</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Cloud Account Risk Assessment</h2>
          <div className="flex items-center">
            <div className="w-20 h-20">
              {/* Insert your chart here */}
              <img src="/path/to/your-risk-assessment-chart.png" alt="Risk Assessment Chart" />
            </div>
            <div className="ml-4">
              <p className="text-xl font-semibold">9659 Total</p>
              <p>Failed (1689)</p>
              <p>Warning (681)</p>
              <p>Not Available (36)</p>
              <p>Passed (7253)</p>
            </div>
          </div>
        </div>

        {/* Add more widgets in a similar manner */}
        <div className="col-span-1 bg-white p-4 rounded-lg shadow">
          <button className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg text-gray-400 flex items-center justify-center">
            + Add Widget
          </button>
        </div>

        {/* CWPP Dashboard */}
        <div className="col-span-1 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Top 5 Namespace Specific Alerts</h2>
          <div className="flex items-center justify-center h-full text-gray-400">
            <p>No Graph data available!</p>
          </div>
        </div>
        <div className="col-span-1 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Workload Alerts</h2>
          <div className="flex items-center justify-center h-full text-gray-400">
            <p>No Graph data available!</p>
          </div>
        </div>

        {/* Registry Scan */}
        <div className="col-span-1 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Image Risk Assessment</h2>
          <p>1470 Total Vulnerabilities</p>
          <div className="w-full h-4 bg-gray-200 rounded-lg mt-2">
            {/* Insert your progress bar here */}
            <div className="h-full bg-red-500" style={{ width: '5%' }}></div>
            <div className="h-full bg-yellow-500" style={{ width: '10%' }}></div>
            <div className="h-full bg-green-500" style={{ width: '85%' }}></div>
          </div>
        </div>

        <div className="col-span-1 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-2">Image Security Issues</h2>
          <p>2 Total Images</p>
          <div className="w-full h-4 bg-gray-200 rounded-lg mt-2">
            {/* Insert your progress bar here */}
            <div className="h-full bg-red-500" style={{ width: '20%' }}></div>
            <div className="h-full bg-yellow-500" style={{ width: '40%' }}></div>
            <div className="h-full bg-green-500" style={{ width: '40%' }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>  
  );
};

export default Dashboard;
