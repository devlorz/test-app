import { FC } from 'react';
import styles from './LandingPage.module.css';

const LandingPage: FC = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.hero}>
        <h1>Welcome to Our Modern React App</h1>
        <p>
          A powerful and flexible React TypeScript application built with Vite.
          Start building amazing web experiences with modern tools and best practices.
        </p>
      </div>
      
      <div className={styles.features}>
        <div className={styles.featureCard}>
          <h3>React + TypeScript</h3>
          <p>
            Take advantage of type safety and modern React features for robust application development.
          </p>
        </div>
        
        <div className={styles.featureCard}>
          <h3>Vite Powered</h3>
          <p>
            Enjoy lightning-fast hot module replacement and optimized builds for better development experience.
          </p>
        </div>
        
        <div className={styles.featureCard}>
          <h3>Modular Architecture</h3>
          <p>
            Well-structured codebase with reusable components and clean separation of concerns.
          </p>
        </div>
      </div>
      
      <div className={styles.cta}>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
