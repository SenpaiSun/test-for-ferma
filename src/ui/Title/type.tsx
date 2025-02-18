import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  text: string
}