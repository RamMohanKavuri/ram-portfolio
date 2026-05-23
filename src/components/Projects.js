const projects = [
  {
    title: 'Mission-Critical Incident Management System',
    desc: 'Built a production-grade incident management platform handling 12,000 signals/sec with real-time ingestion, debouncing, and state machine workflow. Features FastAPI backend, PostgreSQL/TimescaleDB, MongoDB data lake, Redis cache, and React dashboard — all orchestrated with Docker Compose.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'React'],
    impact: 'Handles 12,000 signals/sec with zero crashes using asyncio backpressure handling',
    github: 'https://github.com/RamMohanKavuri/incident-management-system',
    live: null,
    badge: 'Most Complex'
  },
  {
    title: 'DevSecOps Portfolio CI/CD Pipeline',
    desc: 'Designed and deployed a personal portfolio with a complete CI/CD pipeline. Automated build and deployment using GitHub Actions, containerized with Docker, and hosted on AWS EC2. Implemented version control and continuous delivery for seamless zero-downtime updates.',
    tech: ['GitHub Actions', 'Docker', 'AWS EC2', 'React', 'CI/CD'],
    impact: 'Reduced manual deployment effort by 100% through full automation',
    github: 'https://github.com/RamMohanKavuri',
    live: 'https://rammohankavuri.github.io/ram-portfolio/',
    badge: 'Live'
  },
  {
    title: 'Secure Linux Server Hardening',
    desc: 'Configured and hardened a Linux server implementing SSH security, UFW firewall rules, fail2ban, and strict user access controls. Documented a repeatable security checklist for production-like environments following CIS benchmark guidelines.',
    tech: ['Linux', 'Bash', 'UFW', 'SSH', 'fail2ban', 'Shell Scripting'],
    impact: 'Reduced unauthorized access risks with layered security controls',
    github: 'https://github.com/RamMohanKavuri',
    live: null,
    badge: 'DevSecOps'
  }
];

function Projects() {
  return (
    <section id="projects" style={styles.section}>

      <p style={styles.sectionLabel}>WHAT I HAVE BUILT</p>
      <h2 style={styles.heading}>Projects</h2>
      <p style={styles.subHeading}>
        Real DevOps projects involving automation, containerization, and cloud infrastructure.
      </p>

      <div style={styles.grid}>
        {projects.map((p, i) => (
          <div key={i} style={styles.card}>

            <div style={styles.cardTop}>
              <span style={styles.badge}>{p.badge}</span>
              <h3 style={styles.title}>{p.title}</h3>
              <p style={styles.desc}>{p.desc}</p>
            </div>

            <div style={styles.cardBottom}>
              <div style={styles.techRow}>
                {p.tech.map((t) => (
                  <span key={t} style={styles.techChip}>{t}</span>
                ))}
              </div>

              <p style={styles.impact}>
                <span style={styles.impactIcon}>🚀</span> {p.impact}
              </p>

              <div style={styles.links}>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.linkBtn}
                >
                  💻 GitHub
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    style={{...styles.linkBtn, ...styles.linkBtnPrimary}}
                  >
                    🌐 Live Demo
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      <div style={styles.moreProjects}>
        <p style={styles.moreText}>Want to see more?</p>
        <a
          href="https://github.com/RamMohanKavuri"
          target="_blank"
          rel="noreferrer"
          style={styles.moreBtn}
        >
          View All Repositories on GitHub
        </a>
      </div>

    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#0d0d1a',
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
    marginBottom: '15px',
  },
  subHeading: {
    color: '#aaa',
    fontSize: '1rem',
    maxWidth: '550px',
    margin: '0 auto 50px',
    lineHeight: '1.7',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'left',
  },
  card: {
    background: '#1a1a2e',
    borderRadius: '12px',
    border: '1px solid rgba(0,188,212,0.15)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.2s ease, border-color 0.2s ease',
    overflow: 'hidden',
  },
  cardTop: {
    padding: '28px 28px 0 28px',
  },
  cardBottom: {
    padding: '0 28px 28px 28px',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: 'rgba(0,188,212,0.15)',
    border: '1px solid rgba(0,188,212,0.4)',
    color: '#00bcd4',
    fontSize: '0.72rem',
    fontWeight: '600',
    padding: '3px 10px',
    borderRadius: '20px',
    letterSpacing: '0.5px',
    marginBottom: '12px',
  },
  title: {
    color: '#ffffff',
    marginBottom: '12px',
    fontSize: '1.1rem',
    fontWeight: '600',
    lineHeight: '1.4',
  },
  desc: {
    color: '#bbb',
    marginBottom: '20px',
    lineHeight: '1.7',
    fontSize: '0.92rem',
  },
  techRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '7px',
    marginBottom: '16px',
  },
  techChip: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#aaa',
    padding: '3px 10px',
    borderRadius: '4px',
    fontSize: '0.78rem',
    fontWeight: '500',
  },
  impact: {
    color: '#00bcd4',
    fontSize: '0.88rem',
    marginBottom: '20px',
    lineHeight: '1.5',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '6px',
  },
  impactIcon: {
    flexShrink: 0,
  },
  links: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  linkBtn: {
    display: 'inline-block',
    padding: '9px 20px',
    backgroundColor: 'transparent',
    border: '1px solid rgba(0,188,212,0.5)',
    color: '#00bcd4',
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '0.88rem',
    fontWeight: '500',
  },
  linkBtnPrimary: {
    backgroundColor: '#00bcd4',
    color: '#000',
    border: '1px solid #00bcd4',
    fontWeight: '600',
  },
  moreProjects: {
    marginTop: '50px',
    textAlign: 'center',
  },
  moreText: {
    color: '#aaa',
    fontSize: '0.95rem',
    marginBottom: '14px',
  },
  moreBtn: {
    display: 'inline-block',
    padding: '12px 30px',
    border: '2px solid #00bcd4',
    color: '#00bcd4',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.95rem',
  },
};

export default Projects;