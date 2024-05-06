import { ReactNode } from "react";
import styles from "./iconbutton.module.css";

export const IconButton = ({
  children,
  disabled,
  ...rest
}: {
  children: ReactNode;
  disabled: boolean;
}) => {
  return (
    <button disabled={disabled} {...rest} className={styles.btn}>
      {children}
    </button>
  );
};
