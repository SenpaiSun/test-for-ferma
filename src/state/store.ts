import { configureStore } from '@reduxjs/toolkit'
import { tasksReducer } from './cardTasks/tasks-slice'
import { inputReducer } from './input/input-slice'


export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    input: inputReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch