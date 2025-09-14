import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const interests = [
  {
    title: "Mathematics",
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
    degree: "B.Sc. Mathematics",
    institution: "National University of Singapore",
    score: "Expected",
    duration: "2025 - 2029 (expected)"
  },
  {
    degree: "IB Diploma",
    institution: "Berlin International School",
    score: "IB44",
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
  /*
  {
    title: "Fractional model for Liquid Sloshing Dynamics",
    year: 2025,
    authors: "Anirudh, Aadith",
    journal: "Journal of Nuclear Physics"
  },
  {
    title: "Application of Fractional Calculus to determine the Optimum Hill with Friction",
    year: 2025,
    authors: "Anirudh",
    journal: "Applied Mathematics and Mechanics"
  }*/
 {
  title: "Sorry... Still in publication!",
  year: 2025,
  authors: "-",
  journal: "-"
 }
];

const projects = [
  {
    title: "UFOpticSim",
    description: "A PyPI package (https://pypi.org/project/UFOpticSim/) for simulating ultrafast laser optics, which calculates chirping and pulse duration before and after propagation."
  },
  {
    title: "CoDesi",
    description: "An online platform (https://codesi.online) for interested students to learn the basics of programming in Python3."
  }
];

const experience = [
  {
    title: "Intern",
    company: "Max-Born Institute, Berlin",
    description: "Experimental Physics, Non-Linear Optics, Ultrafast Laser Physics.",
    duration: "June 2025 - August 2025"
  },
  {
    title: "Intern",
    company: "Rolls-Royce Deutschland, Dahlewitz",
    description: "FEM and CFD simulations, CAD modelling, Unittesting in Python3.",
    duration: "June 2023 - July 2023"
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
    <div className="App" style={{ background: '#f8fafc', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
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
            I am a passionate student with a strong interest in mathematics and physics. I enjoy finding elegant solutions, exploring complex problems, and writing proofs.
            My goal and career aspirations are to contribute to the field of mathematics or physics through research.
            Currently, I am working as an intern at the Max-Born Institute in Berlin, where I am gaining valuable experience in experimental physics, especially in the field of femtosecond physics.
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
        <h2 style={{ color: '#a37330ff', marginBottom: 12, marginLeft: 0, textAlign: 'left' }}>Interests</h2>
        <ul style={{ color: '#334155', fontSize: '1.05rem', paddingLeft: 0 }}>
          {interests.map((interest, idx) => (
            <li
              key={idx}
              style={{
                marginBottom: 18,
                padding: '14px 24px',
                borderRadius: '4px',
                background: 'linear-gradient(90deg, #e0e7ff 60%, #f8fafc 100%)',
                boxShadow: '0 2px 12px rgba(99,102,241,0.08)',
                listStyle: 'none',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(162, 222, 217, 1)';
                e.currentTarget.style.background = 'linear-gradient(90deg, #788c92ff 10%, #e0e7ff 100%)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(99,102,241,0.08)';
                e.currentTarget.style.background = 'linear-gradient(90deg, #e0e7ff 60%, #f8fafc 100%)';
                e.currentTarget.style.color = '#334155';
              }}
            >
              <span style={{
                fontSize: '1.7em',
                filter: 'drop-shadow(0 2px 4px #6366f1aa)'
              }}>{interest.icon}</span>
              <span>
                <strong style={{ color: '#6366f1', fontSize: '1.08em', letterSpacing: '0.5px' }}>{interest.title}</strong>
                {interest.description && (
                  <span style={{ color: '#64748b', marginLeft: 8, fontSize: '1em', fontStyle: 'italic' }}>
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
        <h2 style={{ color: '#a37330ff', marginBottom: 12, marginLeft: 0, textAlign: 'left' }}>Education</h2>
        <ul style={{ color: '#334155', fontSize: '1.05rem', paddingLeft: 0 }}>
          {education.map((edu, idx) => (
            <li
              key={idx}
              style={{
                marginBottom: 18,
                padding: '18px 28px',
                borderRadius: '8px',
                background: 'linear-gradient(90deg, #e0e7ff 60%, #f8fafc 100%)',
                boxShadow: '0 2px 12px rgba(99,102,241,0.08)',
                listStyle: 'none',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(162, 222, 217, 1)';
                e.currentTarget.style.background = 'linear-gradient(90deg, #788c92ff 10%, #e0e7ff 100%)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(99,102,241,0.08)';
                e.currentTarget.style.background = 'linear-gradient(90deg, #e0e7ff 60%, #f8fafc 100%)';
                e.currentTarget.style.color = '#334155';
                }}
              >
                <span style={{
                fontSize: '2em',
                filter: 'drop-shadow(0 2px 4px #6366f1aa)'
                }}>🎓</span>
                <span>
                <strong style={{ color: '#6366f1', fontSize: '1.12em', letterSpacing: '0.5px' }}>{edu.degree}</strong>
                <span style={{ color: '#64748b', marginLeft: 8, fontSize: '1em', fontStyle: 'italic' }}>
                  – {edu.institution}
                </span>
                <br />
                {edu.score && (
                  <span style={{ fontSize: '0.98rem', color: '#64748b' }}>{edu.score}<br /></span>
                )}
                {edu.achievements && (
                  <span style={{ fontSize: '0.98rem', color: '#64748b' }}>{edu.achievements}<br /></span>
                )}
                <span style={{ fontSize: '0.98rem', color: '#64748b' }}>{edu.duration}</span>
                </span>
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
                borderRadius: '8px',
                background: 'rgba(99,102,241,0.07)',
                boxShadow: '0 1px 4px rgba(99,102,241,0.06)',
                listStyle: 'none',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
                overflow: 'hidden'
                }}
                onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(162, 222, 217, 1)';
                e.currentTarget.style.background = 'linear-gradient(90deg, #788c92ff 10%, #e0e7ff 100%)';
                e.currentTarget.style.color = '#fff';
                }}
                onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 1px 4px rgba(99,102,241,0.06)';
                e.currentTarget.style.background = 'rgba(99,102,241,0.07)';
                e.currentTarget.style.color = '#334155';
                }}
                >
                <span style={{
                  fontSize: '1.7em',
                  filter: 'drop-shadow(0 2px 4px #6366f1aa)'
                }}>🏅</span>
                <span>
                  <strong style={{ color: '#6366f1', fontSize: '1.08em', letterSpacing: '0.5px' }}>{award.title}</strong>
                  <span style={{ color: '#64748b', marginLeft: 8, fontSize: '1em', fontStyle: 'italic' }}>
                  – {award.description}
                  </span>
                  <br />
                  <span style={{ fontSize: '0.98rem', color: '#64748b' }}>{award.year}</span>
                </span>
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
                {experience.map((exp, idx) => (
                  <li
                  key={idx}
                  style={{
                    marginBottom: 18,
                    padding: '16px 20px',
                    borderRadius: '12px',
                    background: 'linear-gradient(90deg, #e0e7ff 60%, #f8fafc 100%)',
                    boxShadow: '0 2px 12px rgba(99,102,241,0.08)',
                    listStyle: 'none',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 6px 24px rgba(162, 222, 217, 1)';
                    e.currentTarget.style.background = 'linear-gradient(90deg, #788c92ff 10%, #e0e7ff 100%)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(99,102,241,0.08)';
                    e.currentTarget.style.background = 'linear-gradient(90deg, #e0e7ff 60%, #f8fafc 100%)';
                    e.currentTarget.style.color = '#334155';
                  }}
                  >
                  <span style={{
                    fontSize: '1.7em',
                    filter: 'drop-shadow(0 2px 4px #6366f1aa)'
                  }}>🧑‍💼</span>
                  <span>
                    <strong style={{ color: '#6366f1', fontSize: '1.08em', letterSpacing: '0.5px' }}>{exp.title}</strong>, {exp.company}<br />
                    <span style={{ color: '#64748b', fontSize: '1em', fontStyle: 'italic' }}>
                    {exp.description}
                    </span>
                    <br />
                    <span style={{ fontSize: '0.98rem', color: '#64748b' }}>{exp.duration}</span>
                  </span>
                  </li>
                ))}
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
                  background: 'linear-gradient(90deg, #e0e7ff 60%, #f8fafc 100%)',
                  boxShadow: '0 2px 12px rgba(99,102,241,0.08)',
                  listStyle: 'none',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '18px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                  overflow: 'hidden'
                  }}
                  onMouseOver={e => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(162, 222, 217, 1)';
                  e.currentTarget.style.background = 'linear-gradient(90deg, #788c92ff 10%, #e0e7ff 100%)';
                  e.currentTarget.style.color = '#fff';
                  }}
                  onMouseOut={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(99,102,241,0.08)';
                  e.currentTarget.style.background = 'linear-gradient(90deg, #e0e7ff 60%, #f8fafc 100%)';
                  e.currentTarget.style.color = '#334155';
                  }}
                >
                  <span style={{
                  fontSize: '1.7em',
                  filter: 'drop-shadow(0 2px 4px #6366f1aa)'
                  }}>🛠️</span>
                  <span>
                  <strong style={{ color: '#6366f1', fontSize: '1.08em', letterSpacing: '0.5px' }}>{project.title}</strong>
                  <span style={{ color: '#64748b', marginLeft: 8, fontSize: '1em', fontStyle: 'italic' }}>
                    – {project.description}
                  </span>
                  </span>
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
                  background: 'linear-gradient(90deg, #e0e7ff 60%, #f8fafc 100%)',
                  boxShadow: '0 2px 12px rgba(99,102,241,0.08)',
                  listStyle: 'none',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '18px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                  overflow: 'hidden'
                  }}
                  onMouseOver={e => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(162, 222, 217, 1)';
                  e.currentTarget.style.background = 'linear-gradient(90deg, #788c92ff 10%, #e0e7ff 100%)';
                  e.currentTarget.style.color = '#fff';
                  }}
                  onMouseOut={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(99,102,241,0.08)';
                  e.currentTarget.style.background = 'linear-gradient(90deg, #e0e7ff 60%, #f8fafc 100%)';
                  e.currentTarget.style.color = '#334155';
                    }}
                  >
                    <span style={{
                    fontSize: '1.7em',
                    filter: 'drop-shadow(0 2px 4px #6366f1aa)'
                    }}>📚</span>
                    <span>
                    <strong style={{ color: '#6366f1', fontSize: '1.08em', letterSpacing: '0.5px' }}>{pub.title}</strong>
                    <span style={{ color: '#64748b', marginLeft: 8, fontSize: '1em', fontStyle: 'italic' }}>
                      ({pub.year})
                    </span>
                    <br />
                    <span style={{ fontSize: '0.98rem', color: '#64748b' }}>{pub.authors}</span> <br />
                    <span style={{ fontSize: '0.98rem', color: '#64748b' }}>{pub.journal}</span>
                    </span>
                  </li>
                  ))}
                  </ul>
                  </section>
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
