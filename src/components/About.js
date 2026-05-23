function About() {
  return (
    <section id="about" style={styles.section}>

      <p style={styles.sectionLabel}>WHO I AM</p>
      <h2 style={styles.heading}>About Me</h2>

      <div style={styles.wrapper}>

        <div style={styles.leftCol}>

          <div style={styles.avatarBox}>
            <div style={styles.avatar}>RMK</div>
            <div style={styles.avatarBadge}>🟢 Available for Hire</div>
          </div>

          <div style={styles.infoCards}>
            <div style={styles.infoRow}>
              <span style={styles.infoIcon}>📍</span>
              <div>
                <p style={styles.infoLabel}>Location</p>
                <p style={styles.infoValue}>Hyderabad, India</p>
              </div>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoIcon}>🎓</span>
              <div>
                <p style={styles.infoLabel}>Education</p>
                <p style={styles.infoValue}>B.Tech ECE Graduate</p>
              </div>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoIcon}>💼</span>
              <div>
                <p style={styles.infoLabel}>Looking For</p>
                <p style={styles.infoValue}>DevOps / Cloud / DevSecOps Roles</p>
              </div>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoIcon}>⚡</span>
              <div>
                <p style={styles.infoLabel}>Availability</p>
                <p style={styles.infoValue}>Immediate Joining</p>
              </div>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoIcon}>🌐</span>
              <div>
                <p style={styles.infoLabel}>Work Mode</p>
                <p style={styles.infoValue}>Remote or Onsite</p>
              </div>
            </div>
          </div>

        </div>

        <div style={styles.rightCol}>

          <h3 style={styles.subTitle}>
            Fresher DevOps Engineer passionate about building
            automated, secure cloud infrastructure.
          </h3>

          <p style={styles.para}>
            I am a B.Tech ECE graduate from Hyderabad with strong hands-on
            experience in DevOps and cloud technologies. I specialize in designing
            CI/CD pipelines, containerizing applications with Docker and Kubernetes,
            and automating infrastructure using Terraform and GitHub Actions on AWS.
          </p>

          <p style={styles.para}>
            My most complex project is a mission-critical Incident Management System
            that handles 12,000 signals per second using FastAPI, PostgreSQL,
            MongoDB, Redis, and Docker Compose — demonstrating my ability to build
            real production-grade systems, not just tutorials.
          </p>

          <p style={styles.para}>
            I am actively pursuing AWS Cloud Practitioner certification and am
            passionate about DevSecOps practices including server hardening,
            SSH security, and firewall configuration. I am looking for a full-time
            DevOps or Cloud Engineer role where I can contribute from day one.
          </p>

          <div style={styles.highlights}>
            <div style={styles.highlight}>
              <span style={styles.highlightNum}>3+</span>
              <span style={styles.highlightText}>DevOps Projects</span>
            </div>
            <div style={styles.highlight}>
              <span style={styles.highlightNum}>15+</span>
              <span style={styles.highlightText}>GitHub Repos</span>
            </div>
            <div style={styles.highlight}>
              <span style={styles.highlightNum}>8+</span>
              <span style={styles.highlightText}>Tools Mastered</span>
            </div>
            <div style={styles.highlight}>
              <span style={styles.highlightNum}>0</span>
              <span style={styles.highlightText}>Days to Join</span>
            </div>
          </div>

          <div style={styles.btnRow}>
            <a
              href="/ram-portfolio/Ram_Mohan_Kavuri_DevOps_resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={styles.btnPrimary}
            >
              📄 Download Resume
            </a>
            <a
              href="https://github.com/RamMohanKavuri"
              target="_blank"
              rel="noreferrer"
              style={styles.btnSecondary}
            >
              💻 View GitHub
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#0a0a0a',
    padding: '80px 20px',
    textAlign: 'center',
  },
  sectionLabel: {
    color: '#00bcd4',
    fontSize: '0.8rem',
    letterSpacing: '3px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  heading: {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    color: '#ffffff',
    marginBottom: '50px',
  },
  wrapper: {
    display: 'flex',
    gap: '40px',
    maxWidth: '1100px',
    margin: '0 auto',
    flexWrap: 'wrap',
    justifyContent: 'center',
    textAlign: 'left',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    minWidth: '240px',
    flex: '0 0 260px',
  },
  avatarBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0,188,212,0.15)',
    border: '3px solid #00bcd4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#00bcd4',
    letterSpacing: '1px',
  },
  avatarBadge: {
    backgroundColor: 'rgba(0,188,212,0.1)',
    border: '1px solid rgba(0,188,212,0.4)',
    color: '#00bcd4',
    padding: '4px 14px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  infoCards: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: '#1a1a2e',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  infoIcon: {
    fontSize: '1.2rem',
    flexShrink: 0,
  },
  infoLabel: {
    color: '#777',
    fontSize: '0.72rem',
    margin: '0 0 2px 0',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  infoValue: {
    color: '#fff',
    fontSize: '0.88rem',
    margin: 0,
    fontWeight: '500',
  },
  rightCol: {
    flex: '1',
    minWidth: '300px',
  },
  subTitle: {
    color: '#00bcd4',
    fontSize: 'clamp(1rem, 2vw, 1.15rem)',
    fontWeight: '500',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  para: {
    color: '#bbb',
    lineHeight: '1.8',
    fontSize: '0.97rem',
    marginBottom: '16px',
  },
  highlights: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    margin: '30px 0',
  },
  highlight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    border: '1px solid rgba(0,188,212,0.2)',
    borderRadius: '10px',
    padding: '16px 20px',
    minWidth: '80px',
    flex: '1',
  },
  highlightNum: {
    color: '#00bcd4',
    fontSize: '1.8rem',
    fontWeight: '700',
    lineHeight: '1',
    marginBottom: '6px',
  },
  highlightText: {
    color: '#aaa',
    fontSize: '0.75rem',
    textAlign: 'center',
    lineHeight: '1.3',
  },
  btnRow: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    marginTop: '10px',
  },
  btnPrimary: {
    display: 'inline-block',
    padding: '12px 28px',
    backgroundColor: '#00bcd4',
    color: '#000',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '0.95rem',
  },
  btnSecondary: {
    display: 'inline-block',
    padding: '12px 28px',
    backgroundColor: 'transparent',
    color: '#00bcd4',
    border: '2px solid #00bcd4',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.95rem',
  },
};

export default About;