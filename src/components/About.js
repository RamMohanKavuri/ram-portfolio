function About() {
  return (
    <section id="about" style={styles.section}>
      <h2>About Me</h2>
      <div style={styles.card}>
        <p style={styles.text}>
          I'm a fresher and recent graduate passionate about <strong>DevSecOps</strong>,
          Cloud Security, and Automation. I love building secure CI/CD pipelines,
          working with Linux environments, and deploying applications on AWS.
          Currently looking for opportunities to grow and contribute in a
          fast-paced tech environment.
        </p>
        <div style={styles.info}>
          <p>📍 Location: Mohali, India</p>
          <p>🎓 Recent Graduate</p>
          <p>💼 Open to: DevSecOps Internships</p>
          <p>🕒 Available: Night Shift / UK Shift</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { backgroundColor:'#111' },
  card: { background:'#1a1a2e', padding:'40px', borderRadius:'10px',
    maxWidth:'800px', margin:'0 auto' },
  text: { fontSize:'1.1rem', lineHeight:'1.9', color:'#ccc', marginBottom:'25px' },
  info: { display:'flex', flexDirection:'column', gap:'10px',
    color:'#00bcd4', fontSize:'1rem' },
};

export default About;