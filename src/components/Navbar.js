import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>RAM</h1>
      <ul style={styles.ul}>
        {['hero','about','skills','projects','contact'].map((sec) => (
          <li key={sec} style={styles.li}>
            <Link to={sec} smooth={true} duration={500} style={styles.link}>
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles = {
  nav: { display:'flex', justifyContent:'space-between', alignItems:'center',
    padding:'15px 10%', backgroundColor:'#111', position:'sticky', top:0, zIndex:999 },
  logo: { color:'#00bcd4', fontSize:'1.8rem' },
  ul: { display:'flex', listStyle:'none', gap:'30px' },
  li: { cursor:'pointer' },
  link: { color:'#fff', textDecoration:'none', fontSize:'1rem',
    cursor:'pointer', transition:'color 0.3s' },
};

export default Navbar;