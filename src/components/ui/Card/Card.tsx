import styles from './Card.module.scss';

type CardProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export const Card = ({ title, description, children }: CardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.desc}>{description}</p>}
      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
};
