import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface InputTaskProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  value: string
  changeValue: (value: string) => void
  addTask: (text: string) => void
}