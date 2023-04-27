import { IconContext } from "react-icons";
import styles from "./styles.module.scss";
import { InputConfig } from "./constants";

export const Input = ({
  attrs = {},
  id,
  placeholder = "",
  slotPersistentIcon,
  type = "text",
  value,
}: InputConfig): JSX.Element => {
  const iconClass =
    typeof slotPersistentIcon !== "undefined"
      ? styles["input--persistentIcon"]
      : "";

  return (
    <div className={styles["u-focus-wrapper"]}>
      {slotPersistentIcon && (
        <IconContext.Provider
          value={{ className: styles.persistentIcon, size: "1rem" }}
        >
          {slotPersistentIcon}
        </IconContext.Provider>
      )}
      <input
        {...attrs}
        className={`${styles.input} ${iconClass}`}
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      <div className={styles["u-focus-indicator"]} />
    </div>
  );
};
