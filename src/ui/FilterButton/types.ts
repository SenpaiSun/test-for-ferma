import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface FilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  textColorHover: string
  colorButton: string
  backgroundHover: string
  borderFocus: string
  idButton?: number
  textButton?: string
}
