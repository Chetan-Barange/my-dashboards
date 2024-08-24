import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../store/dashboardSlice';

function Widget({ widget, category }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryName: category, widgetId: widget.id }));
  };

  return (
    <div className="bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-200">
      <h3 className="text-lg font-semibold">{widget.name}</h3>
      <p>{widget.text}</p>
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Widget;
