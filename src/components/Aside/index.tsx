import Image from "next/image";
import styles from "./aside.module.css";
import logo from "./logo.png";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      {/* <img alt="Logo" src="/logo.png" /> */}
      <Image alt="Logo" src={logo} />
    </aside>
  );
};
