import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload
    }
  },
});

export const inputActions = inputSlice.actions;
export const inputReducer = inputSlice.reducer