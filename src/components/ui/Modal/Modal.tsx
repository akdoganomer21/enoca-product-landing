import styles from "./Modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        {title && <h3 className={styles.title}>{title}</h3>}

        <div className={styles.content}>{children}</div>

        <button
          onClick={onClose}
          className={styles.close}
          aria-label="Close modal"
        >
          ✖
        </button>
      </div>
    </div>
  );
};
