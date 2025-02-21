import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { tasksActions } from '../state/cardTasks/tasks-slice'
import { inputActions } from '../state/input/input-slice'
import { filterActions } from '../state/filters/filters-slice'

const actons = {
  ...tasksActions,
  ...inputActions,
  ...filterActions
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actons, dispatch)
}
