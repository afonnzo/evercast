import styles from "../styles.module.css";

export function Button({ isTransparent, children }) {
  return (
    <button
      className={`${styles.Button} 
      ${isTransparent === true ? styles.Button1 : null} `}
    >
      {children}
    </button>
  );
}
