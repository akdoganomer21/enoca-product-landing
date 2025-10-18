import { Contact } from './components/sections/Contact/Contact';
import { useState, useEffect } from 'react';
import './styles/global.scss';

// 🧱 UI Components
import { Button } from './components/ui/Button/Button';
import { Input } from './components/ui/Input/Input';
import { Card } from './components/ui/Card/Card';
import { Accordion } from './components/ui/Accordion/Accordion';
import { Modal } from './components/ui/Modal/Modal';

// 🧩 Landing Sections
import { Hero } from './components/sections/Hero/Hero';
import { Features } from './components/sections/Features/Features';
import { Pricing } from './components/sections/Pricing/Pricing';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🌗 Tema değişimini uygula
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      {/* 🏠 Hero Section */}
      <Hero />

      <main
        style={{
          padding: '2rem',
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        }}
      >
        {/* 🎨 Tema Geçiş Butonu */}
        <div style={{ textAlign: 'center' }}>
          <Button
            label={`Toggle ${theme === 'light' ? '🌙' : '☀️'}`}
            variant="primary"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
        </div>

        {/* 🧩 Form Elements */}
        <section>
          <h2>Form Elements</h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              maxWidth: 320,
              margin: '0 auto',
            }}
          >
            <Input label="Email" placeholder="Enter your email" />
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <Button label="Submit" variant="primary" onClick={() => setIsModalOpen(true)} />
              <Button label="Cancel" variant="outline" />
            </div>
          </div>
        </section>

        {/* 🃏 Card Component Showcase */}
        <section>
          <h2>Card Component</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
            }}
          >
            <Card title="Free Plan" description="Basic features for getting started.">
              <Button label="Try Now" variant="outline" />
            </Card>

            <Card title="Pro Plan" description="Unlock all premium features.">
              <Button
                label="Learn More"
                variant="secondary"
                onClick={() => setIsModalOpen(true)}
              />
            </Card>

            <Card title="Enterprise Plan" description="Advanced tools for your business.">
              <Button label="Contact Sales" variant="primary" />
            </Card>
          </div>
        </section>

        {/* ⚙️ Features Section */}
        <Features />

        {/* 💰 Pricing Section */}
        <Pricing />

        {/* ❓ FAQ Section (Accordion) */}
        <section>
          <h2>FAQ Section</h2>
          <Accordion
            question="How does billing work?"
            answer="You’ll be billed monthly and can cancel anytime without extra fees."
          />
          <Accordion
            question="Can I upgrade later?"
            answer="Yes, you can switch to a higher plan whenever you want."
          />
          <Accordion
            question="Do you offer refunds?"
            answer="Yes, within the first 14 days of purchase."
          />
        </section>

        {/* 🪟 Modal */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Modal Example">
          <p>This is a sample modal window 🎉</p>
          <Button label="Close" variant="primary" onClick={() => setIsModalOpen(false)} />
        </Modal>

        <Contact />
        {/* ⚡ Footer */}
        <footer style={{ textAlign: 'center', opacity: 0.6, marginTop: '2rem' }}>
          <p>© 2025 React UI Kit | Built by Şahmeran 🐉</p>
        </footer>
      </main>
    </>
  );
}

export default App;
