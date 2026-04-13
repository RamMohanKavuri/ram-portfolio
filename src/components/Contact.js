import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2>Contact Me</h2>
      <div style={styles.card}>
        <p style={styles.text}>Feel free to reach out for opportunities or collaborations!</p>
        <div style={styles.links}>
          <a href="mailto:your@email.com" style={styles.link}><FaEnvelope /> your@email.com</a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" style={styles.link}><FaGithub /> GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" style={styles.link}><FaLinkedin /> LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { backgroundColor:'#0a0a0a' },
  card: { background:'#1a1a2e', padding:'40px', borderRadius:'10px',
    maxWidth:'600px', margin:'0 auto', textAlign:'center' },
  text: { color:'#ccc', fontSize:'1.1rem', marginBottom:'30px' },
  links: { display:'flex', flexDirection:'column', gap:'15px', alignItems:'center' },
  link: { color:'#00bcd4', textDecoration:'none', fontSize:'1.1rem',
    display:'flex', alignItems:'center', gap:'10px' },
};

export default Contact;