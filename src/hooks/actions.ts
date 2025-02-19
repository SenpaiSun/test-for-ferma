import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { tasksActions } from '../state/cardTasks/tasks-slice'
import { inputActions } from '../state/input/input-slice'

const actons = {
  ...tasksActions,
  ...inputActions
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actons, dispatch)
}
