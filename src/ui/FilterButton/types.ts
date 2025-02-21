import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface FilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  textColorHover: string
  colorButton: string
  backgroundHover: string
  borderFocus: string
  idButton?: number
  textButton?: string
  state: 'All' | 'Completed' | 'Uncompleted'
  changeFilter: (state: 'All' | 'Completed' | 'Uncompleted') => void
  filters: 'All' | 'Completed' | 'Uncompleted'
}
