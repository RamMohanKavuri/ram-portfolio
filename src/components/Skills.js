import { FaDocker, FaAws, FaLinux, FaGitAlt, FaShieldAlt } from 'react-icons/fa';
import { SiKubernetes, SiJenkins, SiTerraform } from 'react-icons/si';

const skills = [
  { icon: <FaDocker />, name: 'Docker' },
  { icon: <FaAws />, name: 'AWS' },
  { icon: <FaLinux />, name: 'Linux' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <FaShieldAlt />, name: 'DevSecOps' },
  { icon: <SiKubernetes />, name: 'Kubernetes' },
  { icon: <SiJenkins />, name: 'Jenkins' },
  { icon: <SiTerraform />, name: 'Terraform' },
];

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div style={styles.grid}>
        {skills.map((skill, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.icon}>{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  grid: { display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(120px, 1fr))',
    gap:'20px', maxWidth:'800px', margin:'0 auto' },
  card: { background:'#1a1a2e', padding:'25px', borderRadius:'10px',
    textAlign:'center', fontSize:'1rem', color:'#fff' },
  icon: { fontSize:'2.5rem', color:'#00bcd4', marginBottom:'10px' },
};

export default Skills;