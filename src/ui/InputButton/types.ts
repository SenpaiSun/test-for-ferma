import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface InputButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  value: string
  addTask: (text: string) => void
  changeValue: (value: string) => void
}