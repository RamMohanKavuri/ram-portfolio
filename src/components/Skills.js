import { FaDocker, FaAws, FaLinux, FaGitAlt, FaShieldAlt } from 'react-icons/fa';
import { SiKubernetes, SiJenkins, SiTerraform, SiGithubactions } from 'react-icons/si';

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
      <h2>Skills & Technologies</h2>

      {skills.map((group, i) => (
        <div key={i} style={styles.group}>
          <h3 style={styles.category}>{group.category}</h3>

          <div style={styles.grid}>
            {group.items.map((skill, j) => (
              <div key={j} style={styles.card}>
                <div style={styles.icon}>{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

const styles = {
  section: { backgroundColor:'#111', padding:'40px 20px' },

  group: { marginBottom:'40px' },

  category: {
    color:'#00bcd4',
    marginBottom:'15px',
    fontSize:'1.2rem'
  },

  grid: {
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit, minmax(120px, 1fr))',
    gap:'20px',
    maxWidth:'800px',
    margin:'0 auto'
  },

  card: {
    background:'#1a1a2e',
    padding:'25px',
    borderRadius:'10px',
    textAlign:'center',
    fontSize:'0.9rem',
    color:'#fff'
  },

  icon: {
    fontSize:'2.5rem',
    color:'#00bcd4',
    marginBottom:'10px'
  }
};

export default Skills;