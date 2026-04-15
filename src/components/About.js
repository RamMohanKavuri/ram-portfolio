function About() {
  return (
    <section id="About" style={styles.section}>
      <h2>About Me</h2>
      <div style={styles.card}>
        <p style={styles.text}>
          I am a DevSecOps enthusiast with hands-on experience in building and 
          securing cloud-based applications. I specialize in AWS, CI/CD automation, 
          containerization, and Linux system management. 

          I have worked on real-world projects involving Docker, Kubernetes, and 
          GitHub Actions to automate deployments and improve system reliability.

          I am passionate about implementing secure and scalable infrastructure, 
          and continuously learning modern DevOps practices to deliver efficient 
          and production-ready solutions.
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

export default About;