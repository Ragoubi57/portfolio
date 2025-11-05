import { FaPython, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaJava, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiPytorch, SiTensorflow, SiFastapi, SiAngular, SiMongodb, SiHuggingface, SiCplusplus, SiApachespark, SiPostgresql, SiScikitlearn, SiPandas, SiNumpy } from 'react-icons/si';
import styles from './Skills.module.css';

// We define our skills here in a structured way
const skillCategories = [
  {
    title: "AI & Data Science",
    skills: [
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "HuggingFace", icon: <SiHuggingface /> },
      { name: "scikit-learn", icon: <SiScikitlearn /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
    ]
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "C/C++", icon: <SiCplusplus /> },
      { name: "Java", icon: <FaJava /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "SQL", icon: <FaDatabase /> },
    ]
  },
  {
    title: "Tools & Frameworks",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "PySpark", icon: <SiApachespark /> },
      { name: "Git", icon: <FaGitAlt /> },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Supabase", icon: <FaDatabase /> },
    ]
  }
];

export const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.title}>Technologies I Use</h2>
      <div className={styles.skillsContainer}>
        {skillCategories.map(category => (
          <div key={category.title} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.skillsGrid}>
              {category.skills.map(skill => (
                <div key={skill.name} className={styles.skillCard}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};