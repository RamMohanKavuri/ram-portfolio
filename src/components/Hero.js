import { Link } from 'react-scroll';

function Hero() {
  return (
    <section id="hero" style={styles.section}>
      <p style={styles.greeting}>👋 Hello, I'm</p>
      <h1 style={styles.name}>Ram</h1>
      <h2 style={styles.role}>Aspiring DevSecOps Engineer</h2>
      <p style={styles.desc}>
        Passionate about Cloud, Security, CI/CD Pipelines & Automation.
      </p>
      <Link to="projects" smooth={true} duration={500}>
        <button style={styles.btn}>View My Work 🚀</button>
      </Link>
    </section>
  );
}

const styles = {
  section: { minHeight:'100vh', display:'flex', flexDirection:'column',
    justifyContent:'center', background:'linear-gradient(135deg, #0a0a0a, #1a1a2e)' },
  greeting: { fontSize:'1.2rem', color:'#00bcd4' },
  name: { fontSize:'4rem', fontWeight:'bold', margin:'10px 0' },
  role: { fontSize:'1.8rem', color:'#00bcd4', marginBottom:'20px' },
  desc: { fontSize:'1.1rem', color:'#aaa', maxWidth:'500px', marginBottom:'30px' },
  btn: { padding:'12px 30px', backgroundColor:'#00bcd4', color:'#000',
    border:'none', borderRadius:'5px', fontSize:'1rem', cursor:'pointer' },
};

export default Hero;