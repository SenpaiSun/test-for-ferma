import { TaskProps } from "../../state/cardTasks/types";

export interface ComponentTasksProps {
  tasks: TaskProps[]
  changeStatusTask: (id: number) => void
  deleteTask: (id: number) => void
  filters: 'All' | 'Completed' | 'Uncompleted'
  changeTextTask: ({ id, valueTextTask }: { id: number; valueTextTask: string; }) => void
}