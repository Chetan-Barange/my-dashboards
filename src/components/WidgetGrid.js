// src/components/WidgetGrid.js
import React from 'react';
import { FaTimes, FaPlus } from 'react-icons/fa';

const WidgetGrid = ({ widgets, searchTerm, handleRemoveWidget, handleAddWidget }) => {
  return (
    <>
      {Object.entries(widgets).map(([category, widgetList]) => {
        const filteredWidgets = widgetList.filter(
          widget =>
            widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            widget.text.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
          <div key={category}>
          <h1 className="text-xl pt-4 font-semibold">{category} Dashboard</h1>
            <div className="grid grid-cols-3 gap-6 p-2">
              {filteredWidgets.length > 0 ? (
                filteredWidgets.map((widget, index) => (
                  <div
                    key={index}
                    className="col-span-1 bg-white rounded-md shadow relative"
                  >
                    <button
                      onClick={() => handleRemoveWidget(category, index)}
                      className="absolute top-3 right-3 text-gray-500 hover:text-red-400"
                    >
                      <FaTimes />
                    </button>
                    <div className='p-4 ml-2'>
                    <p className="text-sm flex space-x-2  font-semibold ">Widget Name : <p> {widget.name}</p></p>
                    <p className="text-sm flex font-semibold ">Widget Text : <p> {widget.text}</p></p>
                    </div>
                    
                  </div>
                ))
              ) : (
                <div className="col-span-1 bg-white rounded-md shadow relative">
                    <p className="col-span-3 p-4 text-center text-gray-500">No widgets found.</p>
               </div>
                
              )}

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
        );
      })}
    </>
  );
};

export default WidgetGrid;

