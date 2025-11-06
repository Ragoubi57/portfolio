import type { Project } from '../../content/portfolioData';
import styles from './ProjectCard.module.css';
import { FiExternalLink, FiLock } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
}

// Generate gradient placeholder based on project slug
const getGradientForProject = (slug: string) => {
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  ];
  const index = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % gradients.length;
  return gradients[index];
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const hasImage = !!project.imageUrl;
  const hasLink = project.githubUrl || project.demoUrl;
  const linkUrl = project.demoUrl || project.githubUrl; // Prefer demo over GitHub

  return (
    <div 
      className={`${styles.card} ${hasLink ? styles.clickable : ''}`}
      onClick={() => hasLink && window.open(linkUrl, '_blank')}
    >
      <div className={styles.imageContainer}>
        {hasImage ? (
          <img src={`${import.meta.env.BASE_URL}${project.imageUrl}`} alt={project.title} className={styles.img} />
        ) : (
          <div 
            className={styles.placeholder}
            style={{ background: getGradientForProject(project.slug) }}
          >
            <FaCode className={styles.placeholderIcon} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.desc}>{project.shortDescription}</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.tags}>
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          {/* Dynamic Button - More professional labels */}
          {project.status === 'proprietary' ? (
            <div className={styles.proprietaryButton}>
              <FiLock className={styles.icon} /> Internship Project
            </div>
          ) : project.demoUrl ? (
            <div className={styles.button}>
              View Live Demo <FiExternalLink className={styles.icon} />
            </div>
          ) : project.githubUrl ? (
            <div className={styles.button}>
              View on GitHub <FiExternalLink className={styles.icon} />
            </div>
          ) : (
            <div className={styles.academicButton}>
              Academic Project
            </div>
          )}
        </div>
      </div>
    </div>
  );
};