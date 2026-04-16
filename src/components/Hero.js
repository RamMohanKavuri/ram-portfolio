import { Link } from 'react-scroll';

function Hero() {
  return (
    <section id="hero" style={styles.section}>

      <p style={styles.tagline}>
        🚀 DevSecOps | Cloud | Automation Enthusiast
      </p>

      <h1 style={styles.name}>
        Hi, I'm <span style={styles.highlight}>Ram Mohan Kavuri</span>
      </h1>

      <h2 style={styles.role}>
        Building Secure, Scalable & Automated Cloud Infrastructure
      </h2>

      <p style={styles.desc}>
        I specialize in designing and deploying cloud-native applications using
        AWS, Docker, and Kubernetes. Passionate about automating CI/CD pipelines,
        improving system reliability, and implementing DevSecOps best practices.
      </p>

      <div style={styles.techStack}>
        ⚙️ AWS • Docker • Kubernetes • GitHub Actions • Linux • CI/CD
      </div>

      <div style={styles.buttons}>
        <Link to="projects" smooth={true} duration={500}>
          <button style={styles.btnPrimary}>View My Work 🚀</button>
        </Link>

        <a
          href={process.env.PUBLIC_URL + '/Ram_Mohan_Kavuri_DevOps_resume.pdf'}
          download="Ram_Mohan_Kavuri_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button style={styles.btnSecondary}>Download Resume 📄</button>
        </a>
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
    padding: '0 20px',
  },
  tagline: {
    fontSize: '1rem',
    color: '#00bcd4',
    marginBottom: '10px',
    letterSpacing: '1px',
  },
  name: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    margin: '10px 0',
    color: '#ffffff',
  },
  highlight: {
    color: '#00bcd4',
  },
  role: {
    fontSize: '1.5rem',
    color: '#aaa',
    marginBottom: '20px',
    maxWidth: '700px',
  },
  desc: {
    fontSize: '1.1rem',
    color: '#ccc',
    maxWidth: '650px',
    marginBottom: '20px',
    lineHeight: '1.7',
  },
  techStack: {
    fontSize: '0.95rem',
    color: '#00bcd4',
    marginBottom: '30px',
  },
  buttons: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btnPrimary: {
    padding: '12px 30px',
    backgroundColor: '#00bcd4',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  btnSecondary: {
    padding: '12px 30px',
    backgroundColor: 'transparent',
    color: '#00bcd4',
    border: '2px solid #00bcd4',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
};

export default Hero;