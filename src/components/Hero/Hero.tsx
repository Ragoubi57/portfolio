import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.introText}>
          <p className={styles.greeting}>Hi, my name is</p>
          <h1 className={styles.name}>Mohamed Ali Ragoubi.</h1>
          <h2 className={styles.tagline}>I build intelligent applications.</h2>
          <p className={styles.bio}>
            I'm a final-year <strong>ICT Engineering student at Sup'Com</strong>, specializing in 
            <strong> AI/ML</strong> and <strong>Full-Stack Development</strong>. From implementing 
            diffusion models from scratch to building production-grade data pipelines, I create 
            software that's both functional and intelligent.
          </p>
          <a href="#contact" className={styles.ctaButton}>
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className={styles.photoContainer}>
        {}
        <img 
          src={`${import.meta.env.BASE_URL}githubpfp.jpg`}
          alt="Mohamed Ali Ragoubi" 
          className={styles.photo} 
        />
      </div>
    </section>
  );
};