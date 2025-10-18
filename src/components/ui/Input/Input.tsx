import styles from './Input.module.scss';
import React from 'react';

type InputProps = {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
};

export const Input = ({
  label,
  placeholder = '',
  value,
  onChange,
  type = 'text',
  name,
}: InputProps) => {
  // Controlled mı, uncontrolled mı belirle
  const isControlled = onChange !== undefined;

  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      {isControlled ? (
        // Controlled input (Contact form vs)
        <input
          id={name}
          name={name}
          className={styles.input}
          type={type}
          placeholder={placeholder}
          value={value ?? ''}
          onChange={onChange}
        />
      ) : (
        // Uncontrolled input (demo veya statik alanlar)
        <input
          id={name}
          name={name}
          className={styles.input}
          type={type}
          placeholder={placeholder}
          defaultValue={value ?? ''}
        />
      )}
    </div>
  );
};
