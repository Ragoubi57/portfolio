import styles from './Experience.module.css';

const experiences = [
  {
    role: "Hardware Architecture Exploration for TinyML Intern",
    company: "Sup'Com - Higher School of Communication of Tunis",
    location: "Tunis, Tunisia",
    period: "September - December 2025",
    type: "Supervised Project",
    achievements: [
      "Profiled ML performance (RAM/CPU/energy) on Xilinx, STM32, & Jetson to create TinyML deployment guides",
      "Deployed models via TensorFlow Lite Micro, delivering a full technical report and functional demonstration"
    ]
  },
  {
    role: "AI & Web Development Intern",
    company: "SFM Technologies",
    location: "Tunis, Tunisia",
    period: "Summer 2024",
    type: "",
    achievements: [
      "Built a conversational AI (Python, FastAPI, LangChain) with a RAG pipeline & secure agent for MySQL queries",
      "Developed a full-stack test environment (Angular, SSH Tunneling) prepared for Docker containerization"
    ]
  },
  {
    role: "Web Development Intern",
    company: "Startup ViZmerald",
    location: "Tunis, Tunisia",
    period: "Summer 2024",
    type: "",
    achievements: [
      "Developed a 3D web app in an Agile team, increasing customer engagement by 20%",
      "Analyzed frameworks (WordPress, Verge3D, React) and created detailed deployment documentation"
    ]
  }
];

export const Experience = () => {
  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.title}>Professional Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experienceCard}>
            <div className={styles.period}>{exp.period}</div>
            <div className={styles.content}>
              <h3 className={styles.role}>{exp.role}</h3>
              <div className={styles.company}>
                {exp.company} · {exp.location}
                {exp.type && <span className={styles.type}> ({exp.type})</span>}
              </div>
              <ul className={styles.achievements}>
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
