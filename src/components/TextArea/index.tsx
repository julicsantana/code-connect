import { ReactNode } from "react";
import style from "./textarea.module.css";

export const Textarea = ({
  children,
  ...rest
}: {
  children?: ReactNode;
  [key: string]: any;
}) => {
  return (
    <textarea className={style.textarea} {...rest}>
      {children}
    </textarea>
  );
};
