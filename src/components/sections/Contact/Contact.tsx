import { useState } from 'react';
import styles from './Contact.module.scss';
import { Button } from '../../ui/Button/Button';
import { Input } from '../../ui/Input/Input';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basit doğrulama
    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Yalancı submit
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.heading}>Get in Touch 📬</h2>
      <p className={styles.subtitle}>
        Have questions or feedback? Fill out the form below and we’ll get back to you.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Name"
          placeholder="Your name"
          value={form.name}
          name="name"
          onChange={handleChange}
        />
        <Input
          label="Email"
          placeholder="you@example.com"
          value={form.email}
          name="email"
          onChange={handleChange}
        />
        <div className={styles.textareaGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}
        {submitted && <p className={styles.success}>✅ Message sent successfully (mock)!</p>}

        <Button type="submit" label="Send Message" variant="primary" />
      </form>
    </section>
  );
};
