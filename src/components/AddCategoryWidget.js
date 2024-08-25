import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AddCategoryWidget = ({ isOpen, onClose, addWidget }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [category, setCategory] = useState('CSPM');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    addWidget({ name: widgetName, text: widgetText, category });
    toast.success('Widget Added Successfully');
    onClose();
    setWidgetName('');
    setWidgetText('');
  };

  const handleCancel = () => {
    onClose();
    setWidgetName('');
    setWidgetText('');
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-1/3 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between text-black mb-4">
          <h2 className="text-black font-semibold">Add Widget</h2>
          <h2 className="text-black cursor-pointer" onClick={onClose}>
            <FaTimes />
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="px-4 py-2">
          <div className="mb-4">
            <label className="block text-gray-700">Widget Name</label>
            <input
              type="text"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              className="mt-1 p-2 border border-gray-500 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Widget Text</label>
            <textarea
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              className="mt-1 p-2 border border-gray-500 rounded-md w-full"
              rows="3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 p-2 border border-gray-500 rounded-md w-full"
              required
            >
              <option value="CSPM">CSPM</option>
              <option value="CWPP">CWPP</option>
              <option value="Registry Scan">Registry Scan</option>
            </select>
          </div>
          <div className="flex justify-end space-x-4 mb-4">
            <button
              type="button"
              className="px-8 py-2 text-black border border-gray-700 rounded-lg"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-2 bg-dark-navy-blue text-white rounded-lg"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryWidget;
