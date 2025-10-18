import styles from './Features.module.scss';
import { Card } from '../../ui/Card/Card';
import { Button } from '../../ui/Button/Button';

const FEATURES = [
  {
    title: 'Smart Monitoring',
    description: 'Track your system performance in real-time with visual insights.',
  },
  {
    title: 'Energy Optimization',
    description: 'Save up to 30% by optimizing energy consumption intelligently.',
  },
  {
    title: 'Seamless Integration',
    description: 'Connect with your existing devices and systems effortlessly.',
  },
  {
    title: 'Secure Cloud Access',
    description: 'Access your dashboard safely from anywhere in the world.',
  },
];

export const Features = () => {
  return (
    <section className={styles.features} id="features">
      <h2 className={styles.heading}>Features That Power Innovation ⚙️</h2>
      <p className={styles.subtitle}>
        Explore the core benefits of our solution that make your energy systems smarter.
      </p>

      <div className={styles.grid}>
        {FEATURES.map((feature, index) => (
          <Card key={index} title={feature.title} description={feature.description}>
            <Button label="Learn More" variant="outline" />
          </Card>
        ))}
      </div>
    </section>
  );
};
