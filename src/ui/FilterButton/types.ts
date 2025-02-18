import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface FilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  textColorHover: string
  color: string
  backgroundHover: string
  borderFocus: string
  idButton?: number
  text?: string
}
