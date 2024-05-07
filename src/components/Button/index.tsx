import { ReactElement, ReactNode } from "react";
import styles from "./button.module.css";

export const Button = ({
  children,
  ...rest
}: {
  children: ReactNode;
  [key: string]: any;
}) => {
  return <button className={styles.btn}>{children}</button>;
};
