import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2>Let's Connect</h2>

      <div style={styles.card}>
        <p style={styles.text}>
          I'm actively looking for DevOps / Cloud / DevSecOps opportunities. 
          If you're hiring or have an exciting project, feel free to reach out — 
          I’d be happy to connect and discuss how I can contribute.
        </p>

        <div style={styles.links}>
          <a 
            href="mailto:rammohankavuri430@gmail.com" 
            style={styles.link}
          >
            <FaEnvelope /> rammohankavuri430@gmail.com
          </a>

          <a 
            href="https://github.com/RamMohanKavuri" 
            target="_blank" 
            rel="noreferrer" 
            style={styles.link}
          >
            <FaGithub /> GitHub Portfolio
          </a>

          <a 
            href="https://www.linkedin.com/in/ram-mohan-kavuri-489884259/" 
            target="_blank" 
            rel="noreferrer" 
            style={styles.link}
          >
            <FaLinkedin /> LinkedIn Profile
          </a>
        </div>

        <p style={styles.availability}>
          ⚡ Available for immediate joining | Open to remote & onsite roles
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: { backgroundColor:'#0a0a0a' },

  card: {
    background:'#1a1a2e',
    padding:'40px',
    borderRadius:'10px',
    maxWidth:'600px',
    margin:'0 auto',
    textAlign:'center'
  },

  text: {
    color:'#ccc',
    fontSize:'1.1rem',
    marginBottom:'30px',
    lineHeight:'1.6'
  },

  links: {
    display:'flex',
    flexDirection:'column',
    gap:'15px',
    alignItems:'center'
  },

  link: {
    color:'#00bcd4',
    textDecoration:'none',
    fontSize:'1.1rem',
    display:'flex',
    alignItems:'center',
    gap:'10px'
  },

  availability: {
    marginTop:'25px',
    color:'#00bcd4',
    fontSize:'0.95rem'
  }
};

export default Contact;