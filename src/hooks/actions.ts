import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { tasksActions } from '../state/cardTasks/tasks-slice'

const actons = {
  ...tasksActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actons, dispatch)
}
