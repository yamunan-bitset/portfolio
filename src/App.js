import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const interests = [
  {
    title: "Pure Mathematics",
    description: "Algebra, Analysis, Number Theory",
    icon: "🔢"
  },
  {
    title: "Theoretical and Experimental Physics",
    description: "Exploring the fundamental laws of nature",
    icon: "🔬"
  },
  {    
    title: "Scientific Computing and Programming",
    description: "Using programming to solve complex scientific problems",
    icon: "💻"
  }
];

const education = [
  {
    degree: "B.Sc. Mathematics (Expected)",
    institution: "University Name",
    score: "Expected",
    duration: "2025 - Present"
  },
  {
    degree: "IB Diploma",
    institution: "Berlin International School",
    score: "IB43",
    duration: "2023 - 2025"
  },
  {
    degree: "Cambridge IGCSE",
    institution: "Berlin International School",
    achievements: "5 A* and 1 A",
    duration: "2021 - 2023"
  }
];

const awards = [
  {
    title: "Kant Prize",
    description: "ZeroBears: Studying the phenomenon of neutron spallation, and its detection",
    year: 2025
  },
  {
    title: "Kant Prize in Natural Sciences",
    description: "Application of Fractional Calculus in Optimisation and Calculus of Variations",
    year: 2025
  },
  {
    title: "IGCSE Additional Mathematics High Achievement Award",
    description: "Top Score in Germany",
    year: 2023
  }
];

const publications = [
  {
    title: "Neutron Spallation Optimum Geometry for High Energy Proton interactions with GEANT4",
    year: 2025,
    authors: "Anirudh, Aadith, ...",
    journal: "Journal of Nuclear Physics"
  },
  {
    title: "Application of Fractional Calculus to determine the Optimum Hill with Friction",
    year: 2025,
    authors: "Anirudh",
    journal: "Applied Mathematics and Mechanics"
  }
];

const projects = [
  {
    title: "CoDesi",
    description: "An online platform (https://codesi.online) for interested students to learn the basics of programming in Python3."
  }
];

function App() {
  // Enable smooth scrolling for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="App" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Banner/Navbar at the very top */}
      <nav className="App-navbar" style={{
        background: 'rgba(30, 41, 59, 0.95)',
        color: '#fff',
        padding: '24px 0 20px 0',
        boxShadow: '0 4px 24px rgba(30,41,59,0.08)',
        marginBottom: 24
      }}>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          padding: 0,
          margin: 0,
          justifyContent: 'center',
          gap: '18px'
        }}>
          {[
            { href: "#about", icon: "👤", label: "About" },
            { href: "#interests", icon: "💡", label: "Interests" },
            { href: "#education", icon: "🎓", label: "Education" },
            { href: "#experience", icon: "🧑‍💼", label: "Experience" },
            { href: "#projects", icon: "🛠️", label: "Projects" },
            { href: "#publications", icon: "📚", label: "Publications" },
            { href: "#contact", icon: "✉️", label: "Contact" }
          ].map((item, idx) => (
            <li key={item.label}>
              <a
                className="App-link"
                href={item.href}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '1.08rem',
                  padding: '8px 18px',
                  borderRadius: '22px',
                  background: idx === 0 ? 'rgba(99,102,241,0.18)' : 'transparent',
                  transition: 'background 0.2s, color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(99,102,241,0.25)'}
                onMouseOut={e => e.currentTarget.style.background = idx === 0 ? 'rgba(99,102,241,0.18)' : 'transparent'}
              >
                <span role="img" aria-label={item.label}>{item.icon}</span> {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <section id="about" style={{
        display: 'flex',
        alignItems: 'center',
        margin: '40px 0',
        justifyContent: 'center',
        background: 'transparent',
        borderRadius: '0',
        boxShadow: 'none',
        padding: '32px 24px',
        maxWidth: 900,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <img
          src="./Anirudh_cropped.jpg"
          alt="Profile"
          style={{
            width: 140,
            height: 140,
            borderRadius: '50%',
            objectFit: 'cover',
            marginRight: 32,
            boxShadow: '0 4px 16px rgba(99,102,241,0.18)',
            border: '4px solid #6366f1'
          }}
        />
        <div>
          <h2 style={{ color: '#3730a3', marginBottom: 8 }}>About Me</h2>
          <p style={{ color: '#334155', fontSize: '1.08rem', lineHeight: 1.7 }}>
            I am a passionate student with a strong interest in mathematics and physics. I enjoy exploring complex problems, finding elegant solutions, and writing proofs.
            My goal and career aspirations are to contribute to the field of mathematics or physics through research.
            Currently, I am working as an intern at the Max-Born Institute in Berlin, where I am gaining valuable experience in experimental physics, especially in the field of non-linear optics and attosecond physics.
          </p>
        </div>
      </section>
      {/* Interests Section */}
      <section id="interests" style={{
        background: 'transparent',
        borderRadius: '0',
        boxShadow: 'none',
        padding: '28px 24px',
        maxWidth: 850,
        margin: '40px auto'
      }}>
        <h2 style={{ color: '#3730a3', marginBottom: 12, marginLeft: 0, textAlign: 'left' }}>Interests</h2>
        <ul style={{ color: '#334155', fontSize: '1.05rem', paddingLeft: 0 }}>
          {interests.map((interest, idx) => (
            <li
              key={idx}
              style={{
                marginBottom: 12,
                padding: '12px 18px',
                borderRadius: '10px',
                background: 'rgba(99,102,241,0.07)',
                listStyle: 'none',
                borderLeft: '4px solid #6366f1',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <span style={{ fontSize: '1.4em' }}>{interest.icon}</span>
              <span>
                <strong style={{ color: '#6366f1' }}>{interest.title}</strong>
                {interest.description && (
                  <span style={{ color: '#64748b', marginLeft: 6, fontSize: '0.98em' }}>
                    – {interest.description}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </section>
      {/* Education Section */}
      <section id="education" style={{
        background: 'transparent',
        borderRadius: '0',
        boxShadow: 'none',
        padding: '28px 24px',
        maxWidth: 850,
        margin: '40px auto'
      }}>
        <h2 style={{ color: '#3730a3', marginBottom: 12, marginLeft: 0, textAlign: 'left' }}>Education</h2>
        <ul style={{ color: '#334155', fontSize: '1.05rem', paddingLeft: 0 }}>
          {education.map((edu, idx) => (
            <li
              key={idx}
              style={{
                marginBottom: 18,
                padding: '16px 20px',
                borderRadius: '12px',
                background: 'rgba(99,102,241,0.07)',
                boxShadow: '0 1px 4px rgba(99,102,241,0.06)',
                listStyle: 'none',
                position: 'relative',
                borderLeft: '4px solid #6366f1'
              }}
            >
              <strong style={{ color: '#6366f1' }}>{edu.degree}</strong>, {edu.institution}<br />
              {/* Only show score/achievements if present */}
              {edu.score && (
                <>
                  <span style={{ fontSize: '0.98rem', color: '#64748b' }}>{edu.score}</span><br />
                </>
              )}
              {edu.achievements && (
                <>
                  <span style={{ fontSize: '0.98rem', color: '#64748b' }}>{edu.achievements}</span><br />
                </>
              )}
              <span style={{ fontSize: '0.98rem', color: '#64748b' }}>{edu.duration}</span>
            </li>
          ))}
        </ul>
      </section>
      {/* Awards & Honours Section */}
      <section id="awards" style={{
        background: 'transparent',
        borderRadius: '0',
        boxShadow: 'none',
        padding: '28px 24px',
        maxWidth: 850,
        margin: '40px auto'
      }}>
        <h2 style={{ color: '#3730a3', marginBottom: 12, marginLeft: 0, textAlign: 'left' }}>Awards & Honours</h2>
        <ul style={{ color: '#334155', fontSize: '1.05rem', paddingLeft: 0 }}>
          {awards.map((award, idx) => (
            <li
              key={idx}
              style={{
                marginBottom: 18,
                padding: '16px 20px',
                borderRadius: '12px',
                background: 'rgba(99,102,241,0.07)',
                boxShadow: '0 1px 4px rgba(99,102,241,0.06)',
                listStyle: 'none',
                position: 'relative',
                borderLeft: '4px solid #6366f1'
              }}
            >
              <strong style={{ color: '#6366f1' }}>{award.title}</strong><br />
              {award.description}<br />
              <span style={{ fontSize: '0.98rem', color: '#64748b' }}>{award.year}</span>
            </li>
          ))}
        </ul>
      </section>
      {/* Experience Section */}
      <section id="experience" style={{
        background: 'transparent',
        borderRadius: '0',
        boxShadow: 'none',
        padding: '28px 24px',
        maxWidth: 850,
        margin: '40px auto'
      }}>
        <h2 style={{ color: '#3730a3', marginBottom: 12, marginLeft: 0, textAlign: 'left' }}>Experience</h2>
        <ul style={{ color: '#334155', fontSize: '1.05rem', paddingLeft: 0 }}>
          <li
            style={{
              marginBottom: 18,
              padding: '16px 20px',
              borderRadius: '12px',
              background: 'rgba(99,102,241,0.07)',
              boxShadow: '0 1px 4px rgba(99,102,241,0.06)',
              listStyle: 'none',
              position: 'relative',
              borderLeft: '4px solid #6366f1'
            }}
          >
            <strong style={{ color: '#6366f1' }}>Intern</strong>, Max-Born Institute, Berlin<br />
            Experimental physics, non-linear optics, attosecond physics.<br />
            <span style={{ fontSize: '0.98rem', color: '#64748b' }}>July 2025 - Present</span>
          </li>
          <li
            style={{
              marginBottom: 18,
              padding: '16px 20px',
              borderRadius: '12px',
              background: 'rgba(99,102,241,0.07)',
              boxShadow: '0 1px 4px rgba(99,102,241,0.06)',
              listStyle: 'none',
              position: 'relative',
              borderLeft: '4px solid #6366f1'
            }}
          >
            <strong style={{ color: '#6366f1' }}>Intern</strong>, Rolls-Royce Deutschland, Dahlewitz<br />
            FEM and CFD simulations, CAD modelling, Unittesting in Python3.<br />
            <span style={{ fontSize: '0.98rem', color: '#64748b' }}>June 2023 - July 2023</span>
          </li>
        </ul>
      </section>
      {/* Projects Section */}
      <section id="projects" style={{
        background: 'transparent',
        borderRadius: '0',
        boxShadow: 'none',
        padding: '28px 24px',
        maxWidth: 850,
        margin: '40px auto'
      }}>
        <h2 style={{ color: '#3730a3', marginBottom: 12, marginLeft: 0, textAlign: 'left' }}>Projects</h2>
        <ul style={{ color: '#334155', fontSize: '1.05rem', paddingLeft: 0 }}>
          {projects.map((project, idx) => (
            <li
              key={idx}
              style={{
                marginBottom: 18,
                padding: '16px 20px',
                borderRadius: '12px',
                background: 'rgba(99,102,241,0.07)',
                boxShadow: '0 1px 4px rgba(99,102,241,0.06)',
                listStyle: 'none',
                position: 'relative',
                borderLeft: '4px solid #6366f1'
              }}
            >
              <strong style={{ color: '#6366f1' }}>{project.title}</strong>: {project.description}
            </li>
          ))}
        </ul>
      </section>
      {/* Publications Section */}
      <section id="publications" style={{
        background: 'transparent',
        borderRadius: '0',
        boxShadow: 'none',
        padding: '28px 24px',
        maxWidth: 850,
        margin: '40px auto'
      }}>
        <h2 style={{ color: '#3730a3', marginBottom: 12, marginLeft: 0, textAlign: 'left' }}>Publications</h2>
        <ul style={{ color: '#334155', fontSize: '1.05rem', paddingLeft: 0 }}>
          {publications.map((pub, idx) => (
            <li
              key={idx}
              style={{
                marginBottom: 18,
                padding: '16px 20px',
                borderRadius: '12px',
                background: 'rgba(99,102,241,0.07)',
                boxShadow: '0 1px 4px rgba(99,102,241,0.06)',
                listStyle: 'none',
                position: 'relative',
                borderLeft: '4px solid #6366f1'
              }}
            >
              <strong style={{ color: '#6366f1' }}>{pub.title}</strong> ({pub.year})<br />
              <span style={{ fontSize: '0.98rem', color: '#64748b' }}>{pub.authors}</span> <br />
              <span style={{ fontSize: '0.98rem', color: '#64748b' }}>{pub.journal}</span>
            </li>
          ))}
        </ul>
      </section>
      {/* Contact Section */}
      <section id="contact" style={{
        background: 'transparent',
        borderRadius: '0',
        boxShadow: 'none',
        padding: '28px 24px',
        maxWidth: 850,
        margin: '40px auto'
      }}>
        <h2 style={{ color: '#3730a3', marginBottom: 12, marginLeft: 0, textAlign: 'left' }}>Contact</h2>
        <p style={{ color: '#334155', fontSize: '1.05rem' }}>
          Email: <a href="mailto:yamunan.bitset@gmail.com" style={{ color: '#6366f1', textDecoration: 'underline' }}>yamunan.bitset@gmail.com</a>
        </p>
        <p style={{ color: '#334155', fontSize: '1.05rem' }}>
          LinkedIn: <a href="https://www.linkedin.com/in/anirudh-yamunan-govindarajan-6266a8280/" target="_blank" rel="noopener noreferrer" style={{ color: '#6366f1', textDecoration: 'underline' }}>Anirudh Yamunan Govindarajan</a>
        </p>
      </section>
    </div>
  );
}

export default App;
