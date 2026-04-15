function About() {
  return (
    <section id="about" style={styles.section}>
      <h2>About Me</h2>

      <div style={styles.card}>
        <p style={styles.text}>
          I am a DevSecOps enthusiast with hands-on experience in building and 
          securing cloud-based applications. I specialize in AWS, CI/CD automation, 
          containerization, and Linux system management.

          I have worked on real-world projects involving Docker, Kubernetes, and 
          GitHub Actions to automate deployments and improve system reliability.

          I am passionate about implementing secure and scalable infrastructure 
          and continuously learning modern DevOps practices.
        </p>

        <div style={styles.info}>
          <p>⚙️ Skills: AWS | Docker | Kubernetes | Jenkins | GitHub Actions | Linux</p>
          <p>📍 Location: India</p>
          <p>💼 Open to: DevOps / Cloud / DevSecOps Roles</p>
          <p>🚀 Focus: Automation, Security & Scalable Infrastructure</p>
        </div>
      </div>
    </section>
  );
}

/* ✅ THIS WAS MISSING — VERY IMPORTANT */
const styles = {
  section: {
    padding: '80px 10%',
    textAlign: 'center'
  },
  card: {
    background: '#1a1a2e',
    padding: '30px',
    borderRadius: '10px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  text: {
    color: '#ccc',
    lineHeight: '1.6',
    marginBottom: '20px'
  },
  info: {
    color: '#aaa',
    lineHeight: '1.8'
  }
};

export default About;