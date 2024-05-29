import styles from "./style.module.scss";
import { ButtonHTMLAttributes } from "react";
interface props extends ButtonHTMLAttributes<HTMLButtonElement> {}
export const ButtonControl = ({
  type,
  style,
  disabled,
  children,
  ...props
}: props) => {
  return (
    <button
      type={type ?? "button"}
      className={`${styles.button} ${style}`}
      {...props}
    >
      {children}
    </button>
  );
};
