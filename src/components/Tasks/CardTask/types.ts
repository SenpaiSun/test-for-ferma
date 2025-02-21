export interface CardTaskProps {
  id: number
  text: string
  confirmed: boolean
  date: string
  changeStatusTask: (id: number) => void
  deleteTask: (id: number) => void
  changeTextTask: ({id, valueTextTask}: {id: number, valueTextTask: string}) => void
}