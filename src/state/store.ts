import { configureStore } from '@reduxjs/toolkit'
import { tasksReducer } from './cardTasks/tasks-slice'


export const store = configureStore({
  reducer: {
    cardTasks: tasksReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch