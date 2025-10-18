import { useState } from 'react';
import styles from './Accordion.module.scss';

type AccordionProps = {
  question: string;
  answer: string;
};

export const Accordion = ({ question, answer }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <button
        className={styles.header}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className={styles.icon}>{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div className={styles.body}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};
