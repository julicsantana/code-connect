"use client"; // Error components must be Client Components

import Image from "next/image";
import { useEffect } from "react";
import image from "../../public/500.png";
import styles from "./error.module.css";
import Link from "next/link";
import ArrowBack from "@/components/icons/ArrowBack";

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
