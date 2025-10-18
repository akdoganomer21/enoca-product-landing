import styles from './Hero.module.scss';
import { Button } from '../../ui/Button/Button';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Powering Your <span>Next Energy</span> Innovation ⚡
        </h1>
        <p className={styles.subtitle}>
          Manage, monitor and optimize your energy systems — clean, simple, and smart.
        </p>

        <div className={styles.actions}>
          <Button label="Get Started" variant="primary" />
          <Button label="Learn More" variant="outline" />
        </div>
      </div>

      <div className={styles.imageContainer}>
  <img
    src="/src/assets/photo.jpg"
    alt="Energy innovation illustration"
    className={styles.image}
  />
</div>

    </section>
  );
};
