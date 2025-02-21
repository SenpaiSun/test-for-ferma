export interface TasksProps {
  tasks: TaskProps[]
}

export interface TaskProps {
  id: number
  text: string
  confirmed: boolean
  date: string
}