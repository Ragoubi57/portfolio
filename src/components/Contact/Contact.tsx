import styles from './Contact.module.css';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Let's Build Something Together</h2>
      
      <p className={styles.description}>
        I'm actively seeking an end-of-study internship in AI/ML Engineering or Full-Stack Development starting from <strong>February 2026</strong>.
        Whether you have a question, an opportunity, or just want to connect, my inbox is always open.
      </p>

      {/* Main Call to Action: Download CV */}
      <a 
        href="MohamedAliRagoubi_CV.pdf"
        download 
        className={styles.button}
      >
        Download CV <FiDownload className={styles.icon} />
      </a>

      {/* Social Links as secondary actions */}
      <div className={styles.socials}>
        <a href="mailto:ragoubi_dali@yahoo.com" aria-label="Email">
          <FiMail />
        </a>
        <a href="https://github.com/Ragoubi57" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/mohamed-ali-ragoubi-193b282a1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FiLinkedin />
        </a>
      </div>

      {/* Email address displayed below icons */}
      <p className={styles.email}>ragoubi_dali@yahoo.com</p>
    </section>
  );
};