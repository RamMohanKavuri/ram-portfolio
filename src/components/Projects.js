const projects = [
  { title:'Portfolio Website', desc:'Built and deployed using React, Docker, GitHub Actions & AWS EC2.',
    tech:'React | Docker | AWS | CI/CD' },
  { title:'CI/CD Pipeline', desc:'Automated build and deploy pipeline using GitHub Actions and AWS ECR.',
    tech:'GitHub Actions | ECR | EC2' },
  { title:'Linux Server Setup', desc:'Configured and secured a Linux server with firewall and SSH hardening.',
    tech:'Linux | Bash | UFW' },
];

function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <h2>Projects</h2>
      <div style={styles.grid}>
        {projects.map((p, i) => (
          <div key={i} style={styles.card}>
            <h3 style={styles.title}>{p.title}</h3>
            <p style={styles.desc}>{p.desc}</p>
            <p style={styles.tech}>{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { backgroundColor:'#111' },
  grid: { display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',
    gap:'25px', maxWidth:'1000px', margin:'0 auto' },
  card: { background:'#1a1a2e', padding:'30px', borderRadius:'10px' },
  title: { color:'#00bcd4', marginBottom:'15px', fontSize:'1.2rem' },
  desc: { color:'#ccc', marginBottom:'15px', lineHeight:'1.7' },
  tech: { color:'#aaa', fontSize:'0.85rem' },
};

export default Projects;