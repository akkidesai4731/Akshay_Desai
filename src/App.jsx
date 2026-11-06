import React, { useState } from "react";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2,
  Cpu, Database, Globe2, Terminal, BriefcaseBusiness, GraduationCap,
  Award, ExternalLink, Download, Send, CheckCircle2, Zap, Layers3
} from "lucide-react";

const profile = {
  name: "Akshay Mahadev Desai",
  role: "SCADA Engineer · MERN Stack Developer",
  location: "Dombivli, Maharashtra, India",
  email: "akkidesai4731@gmail.com",
  phone: "+91 84118 43550",
  linkedin: "https://www.linkedin.com/in/akshay-desai-b256581b5",
  github: "https://github.com/akkidesai4731",
};

const skills = [
  { title: "Frontend", icon: Globe2, items: ["JavaScript", "React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"] },
  { title: "Backend", icon: Code2, items: ["Node.js", "Express.js", "REST APIs", "CRUD Operations", "JWT Authentication", "RBAC"] },
  { title: "Database", icon: Database, items: ["MongoDB", "MySQL", "MS-SQL", "JSON", "Data Logging"] },
  { title: "Tools & Platforms", icon: Terminal, items: ["Git & GitHub", "Linux", "Postman", "npm", "Copilot", "Prompt Engineering"] },
  { title: "Industrial Automation", icon: Cpu, items: ["SCADA", "Schneider EcoStruxure", "HMI Development", "PLC Communication", "Alarm Management", "21 CFR Reports"] },
];

const projects = [
  {
    number: "01", type: "FULL-STACK · MERN", name: "E-Kart",
    description: "An electronics-focused e-commerce platform with product browsing, shopping cart management and Razorpay payment integration.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Razorpay"],
    link: "https://github.com/akkidesai4731",
    accent: "blue",
  },
  {
    number: "02", type: "AI · CHATBOT", name: "Restaurant Management Chatbot",
    description: "A rule-based chatbot built during the IBM SkillsBuild internship to support restaurant reservations, menu queries and personalized recommendations.",
    stack: ["IBM Watson Studio", "Chatbot", "AI-ML"],
    link: "https://github.com/akkidesai4731",
    accent: "violet",
  },
  {
    number: "03", type: "FRONTEND · REACT", name: "Portfolio System",
    description: "A responsive personal portfolio website showcasing professional skills, projects, education and social profiles, with a downloadable resume.",
    stack: ["React.js", "JavaScript", "HTML5", "CSS3"],
    link: "https://github.com/akkidesai4731",
    accent: "orange",
  },
];

const experience = [
  {
    date: "JUL 2025 — PRESENT", role: "SCADA Engineer", company: "Pinnacle Industrial Controls",
    points: [
      "Developing and implementing SCADA systems for pharmaceutical machines using Schneider Electric EcoStruxure Machine Expert SCADA.",
      "Designing reports using the 21 CFR Report Tool and MS-SQL database.",
      "Working on HMI screen development, PLC communication, real-time machine monitoring, alarm management and data logging.",
    ],
  },
  {
    date: "6 MONTHS", role: "MERN Stack Developer Intern", company: "SpeedUp Infotech",
    points: [
      "Built knowledge of responsive and dynamic web application development using MongoDB, Express.js, React.js and Node.js.",
      "Practiced REST API development, CRUD operations and frontend-backend integration.",
    ],
  },
  {
    date: "1 MONTH", role: "Web Development Intern", company: "CodeSoft",
    points: ["Learned and developed a restaurant landing page."],
  },
  {
    date: "1 MONTH", role: "AI-ML Intern", company: "IBM SkillsBuild",
    points: ["Built a rule-based chatbot for a restaurant management system."],
  },
];

const education = [
  { year: "2021 — 2025", degree: "B.E. Electronics & Telecommunication Engineering", school: "Finolex Academy of Management and Technology, Ratnagiri", score: "CGPA 7.99" },
  { year: "2020 — 2021", degree: "Higher Secondary Certificate (HSC)", school: "RSB Junior College, Sawantwadi", score: "82.17%" },
  { year: "2018 — 2019", degree: "Secondary School Certificate (SSC)", school: "Divya Joyti English Medium School, Banda", score: "83.40%" },
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const nav = [["About", "#about"], ["Skills", "#skills"], ["Experience", "#experience"], ["Projects", "#projects"], ["Education", "#education"], ["Contact", "#contact"]];

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">A<span>.</span></span><span>AKSHAY<span className="brand-muted"> / PORTFOLIO</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>{nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}</nav>
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> OPEN TO OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>Akshay<br/><span>Desai.</span></h1>
            <h2 className="hero-role">SCADA Engineer <i>×</i> MERN Stack Developer</h2>
            <p className="hero-intro">I build reliable automation solutions and modern web experiences. I enjoy connecting technology, solving real-world problems, and continuously learning along the way.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href="/Akshay_Desai_Resume.pdf" download><Download size={16}/> Download resume</a>
            </div>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={12}/></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={12}/></a>
              <a href={`mailto:${profile.email}`}><Mail size={17}/> Email</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-grid" />
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="hero-card">
              <div className="card-top"><span>PROFILE.SYS</span><span className="live-dot">● LIVE</span></div>
              <div className="avatar"><span>AD</span><div className="avatar-spark">✳</div></div>
              <h3>Akshay Desai</h3><p>Engineer · Developer · Learner</p>
              <div className="card-divider" />
              <div className="profile-line"><span>BASED IN</span><b>{profile.location}</b></div>
              <div className="profile-line"><span>FOCUS</span><b>Web & Industrial Tech</b></div>
              <div className="profile-line"><span>EXPERIENCE</span><b>SCADA Engineering</b></div>
              <div className="code-stamp"><Code2 size={15}/> BUILDING WHAT'S NEXT</div>
            </div>
            <div className="float-tag tag-top"><Zap size={14}/> Problem solver</div>
            <div className="float-tag tag-bottom"><Layers3 size={14}/> Full-stack mindset</div>
          </div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
        </section>

        <section className="about section-wrap section-pad" id="about">
          <SectionTitle eyebrow="01 / ABOUT ME" title={<>Engineering meets <em>curiosity.</em></>} subtitle="A little about the person behind the projects." />
          <div className="about-grid">
            <div className="about-main"><p className="large-copy">I’m an Electronics & Telecommunication Engineering graduate with hands-on experience in <strong>SCADA systems</strong> and a growing focus on <strong>full-stack web development.</strong></p><p>My work spans industrial automation, HMI development, PLC communication and database-backed reporting. Alongside that, I build web applications with the MERN stack, focusing on responsive interfaces, useful features and clean integrations.</p><p>I’m motivated by learning new technologies, taking on meaningful challenges and contributing to teams that value innovation.</p></div>
            <div className="stat-grid">
              <div className="stat-card"><strong>7.99</strong><span>BE CGPA</span></div>
              <div className="stat-card"><strong>2025</strong><span>GRADUATE</span></div>
              <div className="stat-card"><strong>4</strong><span>INTERNSHIPS / EXPOSURES</span></div>
              <div className="stat-card"><strong>∞</strong><span>WILLINGNESS TO LEARN</span></div>
            </div>
          </div>
        </section>

        <section className="skills-section section-pad" id="skills"><div className="section-wrap">
          <SectionTitle eyebrow="02 / TOOLKIT" title={<>Skills & <em>technologies.</em></>} subtitle="The tools and technologies I use to bring ideas to life." />
          <div className="skills-grid">{skills.map(({title, icon: Icon, items}) => <article className="skill-card" key={title}><div className="skill-icon"><Icon size={20}/></div><h3>{title}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
        </div></section>

        <section className="section-wrap section-pad" id="experience">
          <SectionTitle eyebrow="03 / JOURNEY" title={<>Experience & <em>internships.</em></>} subtitle="Where I’ve learned, contributed and grown." />
          <div className="timeline">{experience.map((item, i) => <article className="timeline-item" key={item.company}><div className="timeline-marker">{i === 0 ? <BriefcaseBusiness size={17}/> : <Layers3 size={17}/>}</div><div className="timeline-content"><div className="timeline-meta"><span>{item.date}</span><span className="timeline-index">0{i+1}</span></div><h3>{item.role}</h3><h4>{item.company}</h4><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}</div>
        </section>

        <section className="projects-section section-pad" id="projects"><div className="section-wrap">
          <SectionTitle eyebrow="04 / SELECTED WORK" title={<>Projects I’m <em>proud of.</em></>} subtitle="A few things I’ve worked on across web development and AI." />
          <div className="projects-grid">{projects.map(project => <article className={`project-card ${project.accent}`} key={project.number}><div className="project-top"><span>{project.number} / PROJECT</span><a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.name}`}><ArrowUpRight size={20}/></a></div><div className="project-art"><div className="art-window"><div className="window-dots"><i/><i/><i/></div><div className="art-lines"><span/><span/><span/><span/></div><div className="art-orb">{project.number}</div></div></div><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map(s => <span key={s}>{s}</span>)}</div><a className="project-link" href={project.link} target="_blank" rel="noreferrer">View GitHub <ExternalLink size={14}/></a></article>)}</div>
          <p className="project-note">Project links currently point to my GitHub profile. Replace them with individual repository or live-demo URLs when available.</p>
        </div></section>

        <section className="section-wrap section-pad" id="education">
          <SectionTitle eyebrow="05 / EDUCATION" title={<>The learning <em>foundation.</em></>} subtitle="My academic background and achievements." />
          <div className="education-layout"><div className="education-list">{education.map((item, i) => <article className="education-item" key={item.degree}><div className="edu-icon"><GraduationCap size={19}/></div><div><span className="edu-year">{item.year}</span><h3>{item.degree}</h3><p>{item.school}</p></div><strong>{item.score}</strong></article>)}</div>
          <aside className="achievements"><div className="achievement-heading"><Award size={20}/><span>HIGHLIGHTS</span></div><ul><li><CheckCircle2/> Secured 1st Rank in Project Competition conducted by the EXTC Department.</li><li><CheckCircle2/> Participated in the National Hackathon conducted by Gharda Institute of Technology.</li><li><CheckCircle2/> Member of the Department of Lifelong Learning and Extension (DLLE) unit.</li></ul><div className="cert-title">CERTIFICATIONS</div><p>Complete Web Development Bootcamp — Udemy (Angela Yu)</p><p>MERN Stack Web Development — SpeedUp Infotech</p></aside></div>
        </section>

        <section className="contact-section section-pad" id="contact"><div className="section-wrap contact-wrap"><div><span className="eyebrow">06 / GET IN TOUCH</span><h2>Have a project<br/>or opportunity?<br/><em>Let’s connect.</em></h2><p>I’m always interested in discussing technology, collaboration and new opportunities.</p><a className="button button-primary" href={`mailto:${profile.email}`}>Say hello <Send size={16}/></a></div><div className="contact-details"><a href={`mailto:${profile.email}`}><span><Mail/></span><div><small>EMAIL</small><b>{profile.email}</b></div><ArrowUpRight/></a><a href={`tel:${profile.phone.replaceAll(" ", "")}`}><span><Terminal/></span><div><small>PHONE</small><b>{profile.phone}</b></div><ArrowUpRight/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span><Linkedin/></span><div><small>LINKEDIN</small><b>Connect with me</b></div><ArrowUpRight/></a><a href={profile.github} target="_blank" rel="noreferrer"><span><Github/></span><div><small>GITHUB</small><b>Explore my repositories</b></div><ArrowUpRight/></a></div></div></section>
      </main>
      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span><span>AKSHAY<span className="brand-muted"> / PORTFOLIO</span></span></a><span>Designed & built with React.js · © {new Date().getFullYear()} Akshay Desai</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  );
}