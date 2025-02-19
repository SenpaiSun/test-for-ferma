import { createSlice } from '@reduxjs/toolkit';
import { TasksProps } from './types';

const initialState: TasksProps = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    allTasks: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    changeStatusTask: (state, action) => {
      state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.confirmed = !task.confirmed;
        }
      });
    },
  },
});

export const tasksActions = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer