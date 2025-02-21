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
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    addTask: (state, action) => {
      state.tasks.push({
        id: Number(`${Date.now()}${Math.floor(Math.random() * 1000)}`),
        text: action.payload,
        confirmed: false,
        date: new Date().toLocaleDateString(),
      });
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    changeStatusTask: (state, action) => {
      state.tasks.map((task) => {
        if (task.id === action.payload) {
          task.confirmed = !task.confirmed;
        }
      });
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    changeTextTask: (state, action) => {
      console.log(action.payload)
      state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.text = action.payload.valueTextTask;
        }
      });
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
});

export const tasksActions = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer