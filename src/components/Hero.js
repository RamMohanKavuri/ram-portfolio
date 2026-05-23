import { Link } from 'react-scroll';
import { useState } from 'react';

function Hero() {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <section id="hero" style={styles.section}>

      <div style={styles.openBadge}>
        🟢 Open to Full-Time DevOps Roles
      </div>

      <p style={styles.tagline}>
        🚀 DevSecOps | Cloud | Automation Enthusiast
      </p>

      <h1 style={styles.name}>
        Hi, I'm <span style={styles.highlight}>Ram Mohan Kavuri</span>
      </h1>

      <h2 style={styles.role}>
        Fresher DevOps Engineer · Hyderabad
      </h2>

      <p style={styles.desc}>
        Passionate about automating CI/CD pipelines, building cloud-native
        infrastructure on AWS, and implementing DevSecOps best practices using
        Docker, Kubernetes, Terraform and GitHub Actions.
      </p>

      <div style={styles.techStack}>
        <span style={styles.techChip}>🐳 Docker</span>
        <span style={styles.techChip}>☸️ Kubernetes</span>
        <span style={styles.techChip}>☁️ AWS</span>
        <span style={styles.techChip}>⚙️ GitHub Actions</span>
        <span style={styles.techChip}>🔧 Jenkins</span>
        <span style={styles.techChip}>🏗️ Terraform</span>
        <span style={styles.techChip}>🐧 Linux</span>
        <span style={styles.techChip}>🔄 CI/CD</span>
      </div>

      <div style={styles.buttons}>

        <a 
          href="/ram-portfolio/Ram_Mohan_Kavuri_DevOps_resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button
            style={hoveredBtn === 'resume' ? {...styles.btnPrimary, ...styles.btnPrimaryHover} : styles.btnPrimary}
            onMouseEnter={() => setHoveredBtn('resume')}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            📄 Download Resume
          </button>
        </a>

        <Link to="projects" smooth={true} duration={500}>
          <button
            style={hoveredBtn === 'work' ? {...styles.btnSecondary, ...styles.btnSecondaryHover} : styles.btnSecondary}
            onMouseEnter={() => setHoveredBtn('work')}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            🚀 View My Work
          </button>
        </Link>

        <a 
          href="https://www.linkedin.com/in/ram-mohan-kavuri-489884259/"
          target="_blank"
          rel="noreferrer"
        >
          <button
            style={hoveredBtn === 'linkedin' ? {...styles.btnSecondary, ...styles.btnSecondaryHover} : styles.btnSecondary}
            onMouseEnter={() => setHoveredBtn('linkedin')}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            🔗 LinkedIn
          </button>
        </a>

        <a 
          href="https://github.com/RamMohanKavuri"
          target="_blank"
          rel="noreferrer"
        >
          <button
            style={hoveredBtn === 'github' ? {...styles.btnSecondary, ...styles.btnSecondaryHover} : styles.btnSecondary}
            onMouseEnter={() => setHoveredBtn('github')}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            💻 GitHub
          </button>
        </a>

      </div>

      <div style={styles.githubGraph}>
        <p style={styles.graphLabel}>My GitHub Activity</p>
        <img
          src="https://ghchart.rshah.org/00bcd4/RamMohanKavuri"
          alt="Ram Mohan Kavuri GitHub Contribution Graph"
          style={styles.graphImg}
        />
      </div>

    </section>
  );
}

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #0a0a0a, #1a1a2e)',
    padding: '60px 20px',
  },
  openBadge: {
    backgroundColor: 'rgba(0, 188, 212, 0.1)',
    border: '1px solid rgba(0, 188, 212, 0.4)',
    color: '#00bcd4',
    padding: '6px 18px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '20px',
    letterSpacing: '0.5px',
  },
  tagline: {
    fontSize: '1rem',
    color: '#00bcd4',
    marginBottom: '10px',
    letterSpacing: '1px',
  },
  name: {
    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
    fontWeight: 'bold',
    margin: '10px 0',
    color: '#ffffff',
  },
  highlight: {
    color: '#00bcd4',
  },
  role: {
    fontSize: 'clamp(1rem, 3vw, 1.4rem)',
    color: '#aaa',
    marginBottom: '20px',
    maxWidth: '700px',
    fontWeight: '400',
  },
  desc: {
    fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
    color: '#ccc',
    maxWidth: '620px',
    marginBottom: '30px',
    lineHeight: '1.8',
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '35px',
    maxWidth: '700px',
  },
  techChip: {
    backgroundColor: 'rgba(0, 188, 212, 0.1)',
    border: '1px solid rgba(0, 188, 212, 0.3)',
    color: '#00bcd4',
    padding: '5px 14px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '500',
  },
  buttons: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '50px',
  },
  btnPrimary: {
    padding: '13px 32px',
    backgroundColor: '#00bcd4',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
  },
  btnPrimaryHover: {
    backgroundColor: '#00acc1',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(0,188,212,0.4)',
  },
  btnSecondary: {
    padding: '13px 32px',
    backgroundColor: 'transparent',
    color: '#00bcd4',
    border: '2px solid #00bcd4',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
  },
  btnSecondaryHover: {
    backgroundColor: 'rgba(0,188,212,0.1)',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(0,188,212,0.2)',
  },
  githubGraph: {
    marginTop: '10px',
    textAlign: 'center',
  },
  graphLabel: {
    color: '#aaa',
    fontSize: '0.85rem',
    marginBottom: '10px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  graphImg: {
    width: '100%',
    maxWidth: '600px',
    opacity: '0.85',
    borderRadius: '8px',
  },
};

export default Hero;