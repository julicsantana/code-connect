"use client"; // Error components must be Client Components

import Image from "next/image";
import { useEffect } from "react";
import image from "../../public/404.png";
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
      <h1 className={styles.title}>Ops! Página não encontrada.</h1>
      <p className={styles.subtitle}>
        Você pode voltar ao feed e continuar buscando projetos incríveis!
      </p>
      <Link className={styles.link} href={"/"}>
        <ArrowBack />
        Voltar ao feed
      </Link>
    </div>
  );
}
