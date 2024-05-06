import Image from "next/image";
import styles from "./aside.module.css";
import logo from "./logo.png";
import Link from "next/link";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Link href={"/"}>
        <Image alt="Logo" src={logo} />
      </Link>
    </aside>
  );
};
