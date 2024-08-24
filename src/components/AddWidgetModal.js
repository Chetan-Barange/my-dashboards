import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const AddWidgetModal = ({ isOpen, onClose, addWidget, widgets }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const [category, setCategory] = useState("CSPM");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    addWidget({ name: widgetName, text: widgetText, category });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-end z-50">
      <div className="bg-white h-full w-1/3 rounded-l-lg shadow-lg relative">
        <div className="flex justify-between bg-dark-navy-blue mb-2">
          <h2 className="text-white px-6 p-3">Add Widget</h2>
          <h2 className="text-white px-6 p-3 cursor-pointer" onClick={onClose}>
            <FaTimes />
          </h2>
        </div>
        <div className="border-b m-4">
          <p className="p-2">
            Personalize your dashboard by adding the following widget
          </p>
          <ul className="flex ,y-2 space-x-8 px-4 text-gray-700 font-semibold">
            <li className="border-b-2 pb-2 text-sm cursor-pointer border-blue-600">CSPM</li>
            <li className=" text-sm cursor-pointer ">CWPP</li>
            <li className=" text-sm cursor-pointer ">Image</li>
            <li className=" text-sm cursor-pointer ">Ticket</li>
          </ul>
        </div>
        {Object.entries(widgets).map(([category, widgets]) => (
          <div className="space-y-2 m-4 px-4 text-sm">
            <div key={category}>
              {widgets.map((widget, index) => (
                <label className="inline-flex items-center my-1 border border-1 border-gray-200 p-2 rounded-sm w-full">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    defaultChecked
                  />
                  <span key={index} className="ml-2 text-gray-700">
                    {widget.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 right-8 flex justify-end text-sm font-semibold space-x-4">
          <button
            className="px-6 py-2 text-gray-700 border border-1 border-dark-navy-blue rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 bg-dark-navy-blue text-white rounded-md"
            onClick={handleSubmit}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;
