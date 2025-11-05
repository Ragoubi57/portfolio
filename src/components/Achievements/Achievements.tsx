import styles from './Achievements.module.css';
import { FaCertificate, FaLanguage, FaUsers, FaAws, FaCloud } from 'react-icons/fa';
import { SiNvidia, SiCoursera, SiCisco } from 'react-icons/si';

const certificates = [
  { name: "NVIDIA Data Engineering", icon: <SiNvidia />, color: "#76B900" },
  { name: "Coursera Machine Learning", icon: <SiCoursera />, color: "#0056D2" },
  { name: "AWS Cloud Practitioner", icon: <FaAws />, color: "#FF9900" },
  { name: "Azure AI Fundamentals", icon: <FaCloud />, color: "#0078D4" },
  { name: "CISCO CCNA", icon: <SiCisco />, color: "#1BA0D7" },
  { name: "DataCamp ML & Java", icon: <FaCertificate />, color: "#03EF62" },
];

const languages = [
  { name: "English", level: "C1 (TOEIC 975/990)" },
  { name: "French", level: "Fluent" },
  { name: "Arabic", level: "Native" },
];

const activities = [
  "Junior Enterprise Member - Business & Tech Projects",
  "Public Relations Manager at Sup'Cast - Tech Events & Workshops",
];

export const Achievements = () => {
  return (
    <section className={styles.achievementsSection}>
      <h2 className={styles.title}>Certifications & Achievements</h2>
      
      <div className={styles.grid}>
        {/* Certificates */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaCertificate className={styles.headerIcon} />
            <h3>Professional Certifications</h3>
          </div>
          <div className={styles.certificatesGrid}>
            {certificates.map((cert, index) => (
              <div key={index} className={styles.certificate} style={{ borderColor: cert.color }}>
                <span className={styles.certIcon} style={{ color: cert.color }}>
                  {cert.icon}
                </span>
                <span className={styles.certName}>{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaLanguage className={styles.headerIcon} />
            <h3>Languages</h3>
          </div>
          <div className={styles.languagesList}>
            {languages.map((lang, index) => (
              <div key={index} className={styles.languageItem}>
                <span className={styles.langName}>{lang.name}</span>
                <span className={styles.langLevel}>{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaUsers className={styles.headerIcon} />
            <h3>Leadership & Activities</h3>
          </div>
          <ul className={styles.activitiesList}>
            {activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
