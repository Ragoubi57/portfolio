import { useState } from 'react';
import { projects } from '../../content/portfolioData';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './Projects.module.css';

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  // This function determines the class for each card based on its position
  const getCardClass = (index: number) => {
    if (index === activeIndex) return styles.active;
    if (index === (activeIndex - 1 + projects.length) % projects.length) return styles.prev;
    if (index === (activeIndex + 1) % projects.length) return styles.next;
    return styles.hidden;
  };

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.title}>Projects Showcase</h2>
      
      <div className={styles.carouselContainer}>
        <div className={styles.carouselViewport}>
          {projects.map((project, index) => (
            <div 
              key={project.slug} 
              className={`${styles.cardContainer} ${getCardClass(index)}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button onClick={handlePrev} className={`${styles.arrow} ${styles.left}`}>‹</button>
        <button onClick={handleNext} className={`${styles.arrow} ${styles.right}`}>›</button>
      </div>

      {/* Navigation Dots */}
      <div className={styles.dots}>
        {projects.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${activeIndex === index ? styles.activeDot : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};