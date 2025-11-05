import { useInView } from 'react-intersection-observer';
import styles from './ScrollAnimator.module.css';

// This component can wrap any other component (its 'children')
export const ScrollAnimator = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only happen once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  return (
    <div 
      ref={ref} 
      // Conditionally apply the 'visible' class when the element is in view
      className={`${styles.container} ${inView ? styles.visible : ''}`}
    >
      {children}
    </div>
  );
};