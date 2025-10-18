import styles from "./Button.module.scss";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        styles[variant],
        disabled && styles.disabled
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
