"use client"; // Error components must be Client Components

import Image from "next/image";
import { useEffect } from "react";
import image from "../../public/500.png";
import styles from "./error.module.css";
import Link from "next/link";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.wrapper}>
      <Image alt="Error" src={image} />
      <h1 className={styles.title}>Opa! Um erro ocorreu.</h1>
      <p className={styles.subtitle}>
        Não conseguimos carregar a página, volte para seguir navegando.
      </p>
      <Link className={styles.link} href={"/"}>
        <ArrowBack />
        Voltar ao feed
      </Link>
    </div>
  );
}

export const ArrowBack = ({ color = "#81fe88" }) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5117 5.76172V7.23828H3.37109L7.55469 11.457L6.5 12.5117L0.488281 6.5L6.5 0.488281L7.55469 1.54297L3.37109 5.76172H12.5117Z"
        fill={color}
      />
    </svg>
  );
};
