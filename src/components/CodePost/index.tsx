import styles from "./code-post.module.css";

export const CodePost = ({ markdown }: { markdown: string }) => {
  return (
    <div className={styles.codeContent}>
      <h3>Código:</h3>
      <div
        className={styles.code}
        dangerouslySetInnerHTML={{ __html: markdown }}></div>
    </div>
  );
};
