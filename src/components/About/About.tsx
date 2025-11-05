import styles from './About.module.css';
import { FaGraduationCap, FaTrophy, FaAward } from 'react-icons/fa';

export const About = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.title}>About Me</h2>
      
      <div className={styles.content}>
        <div className={styles.bio}>
          <p>
            I'm a final-year <strong>ICT Engineering student</strong> at <strong>Sup'Com</strong> (Higher School of Communications of Tunis),
            one of Tunisia's most prestigious engineering schools. My journey into technology began with a competitive
            edge:I ranked <strong>51st out of 1,178 candidates</strong> in the National Engineering Entrance Exam.
          </p>
          <p>
            My passion lies at the intersection of <strong>Artificial Intelligence</strong> and <strong>Software Engineering</strong>.
            I specialize in building production-ready ML systems, from implementing diffusion models from scratch to
            deploying containerized data pipelines processing thousands of records in real-time.
          </p>
          <p>
            When I'm not coding, you'll find me contributing to my school's <strong>Junior Enterprise</strong> or managing
            public relations at <strong>Sup'Cast</strong>, where I help organize tech events and workshops.
          </p>
        </div>

        <div className={styles.education}>
          <div className={styles.educationCard}>
            <FaGraduationCap className={styles.icon} />
            <div className={styles.educationContent}>
              <h3>Engineering Degree, ICT</h3>
              <p className={styles.school}>Sup'Com - Higher School of Communications of Tunis</p>
              <p className={styles.period}>2023 - 2026</p>
            </div>
          </div>

          <div className={styles.educationCard}>
            <FaTrophy className={styles.icon} />
            <div className={styles.educationContent}>
              <h3>Preparatory Program, Physics & Chemistry</h3>
              <p className={styles.school}>ESSTHS, Hammam Sousse</p>
              <p className={styles.period}>2021 - 2023</p>
              <p className={styles.achievement}>
                <FaAward className={styles.awardIcon} />
                National Entrance Exam: Ranked <strong>51/1,178</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
