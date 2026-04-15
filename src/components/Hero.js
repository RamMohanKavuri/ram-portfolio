import { Link } from 'react-scroll';

function Hero() {
  return (
    <section id="hero" style={styles.section}>
      <p style={styles.tagline}>🚀 Building Secure & Scalable Cloud Systems</p>

      <h1 style={styles.name}>
        Hi, I'm <span style={styles.highlight}>Ram Mohan Kavuri</span>
      </h1>

      <h2 style={styles.role}>
        DevSecOps Engineer | AWS • Docker • Kubernetes • CI/CD
      </h2>

      <p style={styles.desc}>
        I design and deploy secure cloud infrastructure, automate CI/CD pipelines,
        and implement DevSecOps practices to build scalable and reliable systems.
      </p>

      <div style={styles.buttons}>
        <Link to="projects" smooth={true} duration={500}>
          <button style={styles.btnPrimary}>View Projects 🚀</button>
        </Link>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button style={styles.btnSecondary}>Download Resume 📄</button>
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight:'100vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    background:'linear-gradient(135deg, #0a0a0a, #1a1a2e)',
    padding:'0 20px'
  },
  tagline: { fontSize:'1rem', color:'#00bcd4', marginBottom:'10px' },
  name: { fontSize:'3.5rem', fontWeight:'bold', margin:'10px 0' },
  highlight: { color:'#00bcd4' },
  role: { fontSize:'1.5rem', color:'#aaa', marginBottom:'20px' },
  desc: {
    fontSize:'1.1rem',
    color:'#ccc',
    maxWidth:'600px',
    marginBottom:'30px',
    lineHeight:'1.6'
  },
  buttons: { display:'flex', gap:'15px' },
  btnPrimary: {
    padding:'12px 30px',
    backgroundColor:'#00bcd4',
    color:'#000',
    border:'none',
    borderRadius:'5px',
    cursor:'pointer'
  },
  btnSecondary: {
    padding:'12px 30px',
    backgroundColor:'transparent',
    color:'#00bcd4',
    border:'1px solid #00bcd4',
    borderRadius:'5px',
    cursor:'pointer'
  }
};

export default Hero;