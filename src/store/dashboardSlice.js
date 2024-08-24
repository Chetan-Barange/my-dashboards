import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 1, name: 'Widget 1', text: 'This is Widget 1' },
        { id: 2, name: 'Widget 2', text: 'This is Widget 2' },
      ],
    },
  ],
  categories: [
    {
      name: 'CWPP Dashboard',
      widgets: [
        { id: 1, name: 'Widget 1', text: 'This is Widget 1' },
        { id: 2, name: 'Widget 2', text: 'This is Widget 2' },
      ],
    },
  ],
  categories: [
    {
      name: 'Registry Scan',
      widgets: [
        { id: 1, name: 'Widget 1', text: 'This is Widget 1' },
        { id: 2, name: 'Widget 2', text: 'This is Widget 2' },
      ],
    },
  ],

};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryName, widget } = action.payload;
      const category = state.categories.find(
        (cat) => cat.name === categoryName
      );
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryName, widgetId } = action.payload;
      const category = state.categories.find(
        (cat) => cat.name === categoryName
      );
      if (category) {
        category.widgets = category.widgets.filter(
          (widget) => widget.id !== widgetId
        );
      }
    },
  },
});

export const { addWidget, removeWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;
