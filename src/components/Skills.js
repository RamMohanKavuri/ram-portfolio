import { FaDocker, FaAws, FaLinux, FaGitAlt, FaShieldAlt } from 'react-icons/fa';
import { SiKubernetes, SiJenkins, SiTerraform, SiGithubactions, SiGnubash } from 'react-icons/si';

const skills = [
  {
    category: 'Cloud & Infrastructure',
    items: [
      { icon: <FaAws />, name: 'AWS (EC2, ECR)' },
      { icon: <SiTerraform />, name: 'Terraform (Basics)' }
    ]
  },
  {
    category: 'CI/CD & Automation',
    items: [
      { icon: <SiGithubactions />, name: 'GitHub Actions' },
      { icon: <SiJenkins />, name: 'Jenkins (Basic)' }
    ]
  },
  {
    category: 'Containers & Orchestration',
    items: [
      { icon: <FaDocker />, name: 'Docker' },
      { icon: <SiKubernetes />, name: 'Kubernetes (Basics)' }
    ]
  },
  {
    category: 'Systems & Version Control',
    items: [
      { icon: <FaLinux />, name: 'Linux (Ubuntu)' },
      { icon: <SiGnubash />, name: 'Bash Scripting' },
      { icon: <FaGitAlt />, name: 'Git & GitHub' }
    ]
  },
  {
    category: 'Security & DevSecOps',
    items: [
      { icon: <FaShieldAlt />, name: 'DevSecOps Practices' }
    ]
  }
];

function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.mainHeading}>Skills & Technologies</h2>

      {skills.map((group, i) => (
        <div key={i} style={styles.group}>
          <h3 style={styles.category}>{group.category}</h3>

          <div style={styles.grid}>
            {group.items.map((skill, j) => (
              <div key={j} style={styles.card}>
                <div style={styles.icon}>{skill.icon}</div>
                <p style={styles.skillName}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

const styles = {
  section: { 
    backgroundColor: '#0a0a0a', 
    padding: '60px 20px',
    textAlign: 'center'
  },

  mainHeading: {
    color: '#ffffff',
    fontSize: '2rem',
    marginBottom: '40px',
    fontWeight: '600'
  },

  group: { 
    marginBottom: '40px',
    maxWidth: '800px',
    margin: '0 auto 40px auto',
    textAlign: 'left'
  },

  category: {
    color: '#00bcd4',
    marginBottom: '20px',
    fontSize: '1.2rem',
    borderLeft: '3px solid #00bcd4',
    paddingLeft: '10px',
    fontWeight: '600'
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
    gap: '20px',
    width: '100%'
  },

  card: {
    background: '#1a1a2e',
    padding: '25px 15px',
    borderRadius: '10px',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.02)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  icon: {
    fontSize: '2.5rem',
    color: '#00bcd4',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  skillName: {
    margin: 0,
    lineHeight: '1.4',
    fontWeight: '500'
  }
};

export default Skills;