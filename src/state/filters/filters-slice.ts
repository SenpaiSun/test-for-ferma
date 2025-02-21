import { createSlice } from '@reduxjs/toolkit';
import { FilterProps } from './types';

const initialState: FilterProps = {
  filter: 'All',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload
    }
  },
});

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer