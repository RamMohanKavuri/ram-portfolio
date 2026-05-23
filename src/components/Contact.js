import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(
      'service_ztk502e',
      'template_mhj1euw',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Ram Mohan',
      },
      'BhRC2xROGeuw_tGoo'
    )
    .then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      setStatus('error');
    });
  };

  return (
    <section id="contact" style={styles.section}>

      <p style={styles.sectionLabel}>GET IN TOUCH</p>
      <h2 style={styles.heading}>Let's Connect</h2>
      <p style={styles.subHeading}>
        I'm actively looking for{' '}
        <strong style={{ color: '#00bcd4' }}>DevOps / Cloud / DevSecOps</strong>{' '}
        opportunities. Drop a message and I'll get back to you within 24 hours.
      </p>

      <div style={styles.wrapper}>

        <div style={styles.formCard}>
          <h3 style={styles.formTitle}>Send a Message</h3>

          <form onSubmit={handleSubmit}>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Smith"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Message</label>
              <textarea
                name="message"
                placeholder="Hi Ram, I have a DevOps opportunity at..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                style={{ ...styles.input, resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              style={status === 'sending' ? { ...styles.submitBtn, opacity: 0.7 } : styles.submitBtn}
            >
              {status === 'sending' ? '⏳ Sending...' : '🚀 Send Message'}
            </button>

            {status === 'success' && (
              <p style={styles.successMsg}>
                ✅ Message sent! I'll reply within 24 hours.
              </p>
            )}

            {status === 'error' && (
              <p style={styles.errorMsg}>
                ❌ Something went wrong. Please email me directly below.
              </p>
            )}

          </form>
        </div>

        <div style={styles.infoCard}>

          <h3 style={styles.formTitle}>Direct Links</h3>

          <div style={styles.availability}>
            🟢 Available for immediate joining
          </div>
          <div style={{ ...styles.availability, marginTop: '8px' }}>
            🌐 Open to remote and onsite roles
          </div>

          <div style={styles.links}>

            <a href="mailto:rammohankavuri430@gmail.com" style={styles.link}>
              <div style={styles.linkIcon}>
                <FaEnvelope />
              </div>
              <div>
                <p style={styles.linkLabel}>Email</p>
                <p style={styles.linkValue}>rammohankavuri430@gmail.com</p>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/ram-mohan-kavuri-489884259/"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              <div style={styles.linkIcon}>
                <FaLinkedin />
              </div>
              <div>
                <p style={styles.linkLabel}>LinkedIn</p>
                <p style={styles.linkValue}>ram-mohan-kavuri</p>
              </div>
            </a>

            <a 
              href="https://github.com/RamMohanKavuri"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              <div style={styles.linkIcon}>
                <FaGithub />
              </div>
              <div>
                <p style={styles.linkLabel}>GitHub</p>
                <p style={styles.linkValue}>RamMohanKavuri</p>
              </div>
            </a>

          </div>

          <a 
            href="/ram-portfolio/Ram_Mohan_Kavuri_DevOps_resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={styles.resumeBtn}
          >
            📄 Download My Resume
          </a>

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
    marginBottom: '15px',
  },
  subHeading: {
    color: '#aaa',
    fontSize: '1rem',
    maxWidth: '550px',
    margin: '0 auto 50px',
    lineHeight: '1.7',
  },
  wrapper: {
    display: 'flex',
    gap: '30px',
    maxWidth: '900px',
    margin: '0 auto',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  formCard: {
    background: '#1a1a2e',
    padding: '35px',
    borderRadius: '12px',
    flex: '1',
    minWidth: '300px',
    textAlign: 'left',
  },
  infoCard: {
    background: '#1a1a2e',
    padding: '35px',
    borderRadius: '12px',
    flex: '1',
    minWidth: '280px',
    textAlign: 'left',
  },
  formTitle: {
    color: '#ffffff',
    fontSize: '1.1rem',
    marginBottom: '20px',
    fontWeight: '600',
  },
  inputGroup: {
    marginBottom: '18px',
  },
  label: {
    display: 'block',
    color: '#aaa',
    fontSize: '0.85rem',
    marginBottom: '6px',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: '11px 14px',
    backgroundColor: '#0d0d1a',
    border: '1px solid rgba(0,188,212,0.3)',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '0.95rem',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  },
  submitBtn: {
    width: '100%',
    padding: '13px',
    backgroundColor: '#00bcd4',
    color: '#000',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '5px',
  },
  successMsg: {
    color: '#4caf50',
    marginTop: '12px',
    fontSize: '0.9rem',
    textAlign: 'center',
  },
  errorMsg: {
    color: '#f44336',
    marginTop: '12px',
    fontSize: '0.9rem',
    textAlign: 'center',
  },
  availability: {
    backgroundColor: 'rgba(0,188,212,0.1)',
    border: '1px solid rgba(0,188,212,0.3)',
    color: '#00bcd4',
    padding: '8px 14px',
    borderRadius: '6px',
    fontSize: '0.85rem',
    fontWeight: '500',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginTop: '24px',
    marginBottom: '28px',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    textDecoration: 'none',
    color: '#ccc',
    backgroundColor: '#0d0d1a',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  linkIcon: {
    color: '#00bcd4',
    fontSize: '1.3rem',
    flexShrink: 0,
  },
  linkLabel: {
    color: '#aaa',
    fontSize: '0.75rem',
    margin: 0,
    marginBottom: '2px',
  },
  linkValue: {
    color: '#fff',
    fontSize: '0.9rem',
    margin: 0,
  },
  resumeBtn: {
    display: 'block',
    textAlign: 'center',
    backgroundColor: 'transparent',
    border: '2px solid #00bcd4',
    color: '#00bcd4',
    padding: '12px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.95rem',
  },
};

export default Contact;