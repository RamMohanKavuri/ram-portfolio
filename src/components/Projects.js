const projects = [
  {
    title: 'DevSecOps Portfolio Website',
    desc: 'Designed and deployed a personal portfolio with a complete CI/CD pipeline. Automated build and deployment using GitHub Actions, containerized with Docker, and hosted on AWS EC2. Implemented version control and continuous delivery for seamless updates.',
    tech: 'JavaScript | React | Docker | GitHub Actions | AWS EC2',
    impact: 'Reduced manual deployment effort by 100% through automation',
    link: 'https://github.com/RamMohanKavuri'
  },

  {
    title: 'CI/CD Pipeline Automation',
    desc: 'Built an end-to-end CI/CD pipeline integrating GitHub Actions with AWS ECR and EC2. Automated code build, Docker image creation, and deployment process ensuring faster and consistent releases.',
    tech: 'GitHub Actions | Docker | AWS ECR | EC2',
    impact: 'Improved deployment speed and reliability with zero manual intervention',
    link: 'https://github.com/RamMohanKavuri'
  },

  {
    title: 'Secure Linux Server Setup',
    desc: 'Configured and hardened a Linux server by implementing SSH security, firewall rules (UFW), and user access controls. Ensured system security and stability for production-like environments.',
    tech: 'Linux | Bash | UFW | SSH Hardening',
    impact: 'Enhanced server security by reducing unauthorized access risks',
    link: 'https://github.com/RamMohanKavuri'
  }
];

function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <h2>Projects</h2>

      <div style={styles.grid}>
        {projects.map((p, i) => (
          <div key={i} style={styles.card}>
            <h3 style={styles.title}>{p.title}</h3>

            <p style={styles.desc}>{p.desc}</p>

            <p style={styles.tech}>{p.tech}</p>

            <p style={styles.impact}>🚀 {p.impact}</p>

            <a 
              href={p.link} 
              target="_blank" 
              rel="noreferrer"
              style={styles.link}
            >
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { backgroundColor:'#111' },

  grid: {
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',
    gap:'25px',
    maxWidth:'1000px',
    margin:'0 auto'
  },

  card: {
    background:'#1a1a2e',
    padding:'30px',
    borderRadius:'10px',
    transition:'0.3s'
  },

  title: {
    color:'#00bcd4',
    marginBottom:'15px',
    fontSize:'1.2rem'
  },

  desc: {
    color:'#ccc',
    marginBottom:'15px',
    lineHeight:'1.7'
  },

  tech: {
    color:'#aaa',
    fontSize:'0.85rem',
    marginBottom:'10px'
  },

  impact: {
    color:'#00bcd4',
    fontSize:'0.9rem',
    marginBottom:'15px'
  },

  link: {
    color:'#00bcd4',
    textDecoration:'none',
    fontSize:'0.9rem'
  }
};

export default Projects;