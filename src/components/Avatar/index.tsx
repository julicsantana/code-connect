import Image from "next/image";
import styles from "./avatar.module.css";

export const Avatar = ({ name, imageSrc }: { name: string; imageSrc: any }) => {
  return (
    <ul className={styles.author}>
      <li>
        <Image
          src={imageSrc}
          alt={`Avatar do(a) ${name}`}
          width={32}
          height={32}
        />
      </li>
      <li>@{name}</li>
    </ul>
  );
};
