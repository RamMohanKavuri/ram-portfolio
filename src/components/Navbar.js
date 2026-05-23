import { Link } from 'react-scroll';
import { useState } from 'react';

function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>RAM MOHAN KAVURI</h1>
      <ul style={styles.ul}>
        {['hero', 'about', 'skills', 'projects', 'contact'].map((sec) => (
          <li key={sec} style={styles.li}>
            <Link
              to={sec}
              smooth={true}
              duration={500}
              spy={true}
              activeStyle={styles.activeLink}
              style={
                hoveredLink === sec 
                  ? { ...styles.link, ...styles.linkHover } 
                  : styles.link
              }
              onMouseEnter={() => setHoveredLink(sec)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles = {
  nav: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: '15px 10%', 
    backgroundColor: '#0a0a0a', 
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    position: 'sticky', 
    top: 0, 
    zIndex: 999 
  },
  logo: { 
    color: '#00bcd4', 
    fontSize: '1.4rem',
    fontWeight: 'bold',
    letterSpacing: '1px'
  },
  ul: { 
    display: 'flex', 
    listStyle: 'none', 
    gap: '30px',
    margin: 0,
    padding: 0
  },
  li: { 
    display: 'inline-block' 
  },
  link: { 
    color: '#aaa', 
    textDecoration: 'none', 
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer', 
    transition: 'all 0.25s ease' 
  },
  linkHover: { 
    color: '#00bcd4',
  },
  activeLink: {
    color: '#00bcd4',
    borderBottom: '2px solid #00bcd4',
    paddingBottom: '4px'
  }
};

export default Navbar;