import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    title: "Breast Cancer CNN",
    text: "Built a transfer-learning image classifier for breast ultrasound images and tuned the model with an emphasis on malignant-case recall.",
    tags: ["Python", "TensorFlow", "ResNet50"],
    link: "https://github.com/HaileyZweedyk/Breast-Cancer-Classification-Convolutional-Neural-Network"
  },
  {
    title: "Diabetes Classification",
    text: "Compared tree-based machine learning models on 100,000 patient records, focusing on predictive performance and class imbalance.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    link: "https://github.com/HaileyZweedyk/Diabetes-Classification-Data-Mining-Project"
  },
  {
    title: "EQUIP (Equine-Assisted Therapy Utilization and Intervention Platform)",
    text: "Work in progress: Developing an application that allows therapists to analyze which horse characteristics are most effective for specific patient needs, using a combination of data analysis and visualization.",
    tags: ["Python", "Streamlit", "Microsoft Azure"],
    link: ""
  }
];

function App() {
  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#top"><span>Hailey</span>Zweedyk.dev</a>
        <nav>
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#education">EDUCATION</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <main id="top">

        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">COMPUTER SCIENCE STUDENT · CLASS OF 2026</p>
            <h1>Hailey<br /><em>Zweedyk</em></h1>
            <p className="intro">
              Computer Science student interested in data science, machine learning,
              and turning data into useful insights. I enjoy building projects
              that combine analysis, visualization, and practical problem solving.
            </p>
            <div className="actions">
              <a className="button primary" href="#projects">VIEW MY PROJECTS</a>
              <a className="button secondary" href="#contact">GET IN TOUCH</a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="stat-grid">
              <div className="stat"><strong>03</strong><span>Featured projects</span></div>
              <div className="stat"><strong>3.25</strong><span>GPA</span></div>
              <div className="stat"><strong>2026</strong><span>Graduation year</span></div>
              <div className="stat"><strong>ML</strong><span>Primary interest</span></div>
            </div>

            <div className="proficiency">
              <div className="panel-title">SELF-ASSESSED PROFICIENCY</div>
              {[
                ["Python", 92],
                ["Pandas", 84],
                ["PyTorch", 68],
                ["SQL", 65],
                ["Tableau", 45]
              ].map(([name, value]) => (
                <div className="skill-row" key={name}>
                  <span>{name}</span>
                  <div className="bar"><i style={{width: `${value}%`}} /></div>
                  <b>{value}</b>
                </div>
              ))}
            </div>
            <a
              href="/Resume-Final.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-link"
            >
              VIEW RESUME ↗
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="section about" id="about">
          <div className="section-label">
            01 / ABOUT
          </div>

          <div className="about-content">
            <h2>
              Turning data into<br />
              <em>meaningful impact.</em>
            </h2>

            <p className="section-description">
              I'm a Computer Science student with a growing focus on data science
              and machine learning. Through my projects, I've explored how data
              and technology can be used to better understand complex problems,
              particularly in the medical field.
            </p>

            <p className="section-description">
              I'm especially interested in using data to create solutions that
              have a meaningful impact on people's lives, whether that's improving
              how we understand health data, uncovering patterns, or making complex
              information easier to understand.
            </p>
          </div>
        </section>
        
        {/* SKILLS SECTION */}
        <section className="skills-section" id="skills">
          <div className="skills-header">
            <p className="section-label">02 / SKILLS</p>
            <h2>Technical Stack</h2>
          </div>

          <div className="skills-grid">

            <div className="skill-category">
              <h3>LANGUAGES</h3>
              <div className="skill-tags">
                <span>Python</span>
                <span>SQL</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>ML / AI</h3>
              <div className="skill-tags">
                <span>Tensorflow</span>
                <span>scikit-learn</span>
                <span>Classification</span>
                <span>Regression</span>
                <span>Transfer Learning</span>
                <span>Model Evaluation</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>DATA TOOLS</h3>
              <div className="skill-tags">
                <span>Pandas</span>
                <span>NumPy</span>
                <span>SciPy</span>
                <span>Google Colab</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>VISUALIZATION</h3>
              <div className="skill-tags">
                <span>Matplotlib</span>
                <span>Seaborn</span>
                <span>Tableau</span>
                <span>Streamlit</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>CLOUD / DEV</h3>
              <div className="skill-tags">
                <span>Azure</span>
                <span>Docker</span>
                <span>Git</span>
                <span>Linux</span>
                <span>VS Code</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>DATABASES</h3>
              <div className="skill-tags">
                <span>SQL Server</span>
              </div>
            </div>

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section" id="projects">
          <div className="section-label">03 / PROJECTS</div>
          <div className="projects">
            {projects.map((project, i) => (
              <article className="project" key={project.title}>
                <div className="project-number">0{i + 1}</div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
                <a href={project.link} target="_blank" rel="noreferrer">VIEW PROJECT GITHUB ↗</a>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="section education" id="education">
          <div className="section-label">04 / EDUCATION</div>
          <div className="education-card">
            <div>
              <p className="panel-title">B.S. COMPUTER SCIENCE</p>
              <h2>Grand Valley State University</h2>
              <br />
              <p><b>Relevant Coursework:</b> Data Mining, Machine Learning, Database, Statistics, Python, Data Visualization</p>
            </div>
            <div className="education-meta">
              <span>2023 — 2026</span>
              <span>Expected December 2026</span>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="section experience" id="experience">
          <div className="section-label">05 / EXPERIENCE</div>
          <div className="experience-card">
            <div>
              <p className="panel-title">APPLIED INNOVATION</p>
              <h2>Network Connectivity Intern</h2>
              <br />
              <ul>
                <li><p>Diagnosed network connectivity issues involving DHCP, DNS, and SMTP for multifunction printers.</p></li>
                <li><p>Remotely installed and configured printer drivers and software while guiding end users through technical issues.</p></li>
                <li><p>Escalated cases requiring advanced troubleshooting to customer IT teams or internal leadership.</p></li>
                <li><p>Maintained first-contact resolution rate of <b>80%</b></p></li>
              </ul>
            </div>
            <div className="experience-meta">
              <span>May 2026 - Present</span>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>

          <h2>
            Let's build something<br />
            <em>meaningful.</em>
          </h2>

          <div className="contact-links">

            <a
              href="mailto:haileyzweedyk@gmail.com"
              className="contact-link"
            >
              <div>
                <span className="contact-label">EMAIL</span>
                <span className="contact-value">haileyzweedyk@gmail.com</span>
              </div>

              <span className="contact-arrow">→</span>
            </a>

            <a
              href="https://www.linkedin.com/in/haileyzweedyk/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div>
                <span className="contact-label">LINKEDIN</span>
                <span className="contact-value">
                  linkedin.com/in/haileyzweedyk
                </span>
              </div>

              <span className="contact-arrow">→</span>
            </a>

            <a
              href="https://github.com/HaileyZweedyk"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div>
                <span className="contact-label">GITHUB</span>
                <span className="contact-value">
                  github.com/HaileyZweedyk
                </span>
              </div>

              <span className="contact-arrow">→</span>
            </a>

          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 · HAILEY ZWEEDYK PORTFOLIO</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
