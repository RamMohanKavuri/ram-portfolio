import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Ram Mohan Kavuri</p>
        <p style={styles.tagline}>
          Built with React • DevOps Practices • Deployed on Cloud
        </p>
      </footer>
    </>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '30px 20px',
    background: '#0a0a0a',
    borderTop: '1px solid #1a1a2e',
    color: '#aaa'
  },
  tagline: {
    fontSize: '0.9rem',
    marginTop: '5px',
    color: '#00bcd4'
  }
};

export default App;