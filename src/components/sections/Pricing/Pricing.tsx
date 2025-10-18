import styles from "./Pricing.module.scss";
import { Card } from "../../ui/Card/Card";
import { Button } from "../../ui/Button/Button";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    features: ["Basic analytics", "Community support", "Single user"],
    cta: "Start Free",
    variant: "outline",
  },
  {
    name: "Pro",
    price: "$19",
    features: ["Advanced dashboards", "Priority support", "Up to 5 users"],
    cta: "Upgrade Now",
    variant: "primary",
  },
  {
    name: "Enterprise",
    price: "$49",
    features: ["Custom integrations", "Dedicated manager", "Unlimited users"],
    cta: "Contact Us",
    variant: "secondary",
  },
];

export const Pricing = () => {
  return (
    <section className={styles.pricing} id="pricing">
      <h2 className={styles.heading}>Flexible Pricing for Every Need 💰</h2>
      <p className={styles.subtitle}>
        Choose the plan that fits your energy goals. No hidden fees, cancel
        anytime.
      </p>

      <div className={styles.grid}>
        {PLANS.map((plan, index) => (
          <Card
            key={index}
            title={plan.name}
            description={`${plan.price} / month`}
          >
            <ul className={styles.featureList}>
              {plan.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <Button label={plan.cta} variant={plan.variant as any} />
          </Card>
        ))}
      </div>
    </section>
  );
};
