import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Download, Database, Workflow, BarChart3, MapPin } from 'lucide-react';
import './styles.css';

const skills = [
  { group: 'Analytics & BI', items: ['Power BI', 'Metabase', 'Tableau', 'Advanced Excel', 'KPI Design', 'Data Storytelling'] },
  { group: 'Data & Programming', items: ['SQL', 'Python', 'Pandas', 'NumPy', 'PL/SQL', 'BigQuery'] },
  { group: 'Data Engineering', items: ['dbt', 'Apache Airflow', 'DLT', 'Amazon Redshift', 'PostgreSQL', 'ETL / ELT'] },
  { group: 'Ways of working', items: ['Data Modelling', 'Root Cause Analysis', 'A/B Testing', 'Data Quality', 'Git', 'CI/CD'] },
];

const projects = [
  {
    number: '01', type: 'BUSINESS CASE STUDY', title: 'Understanding E-commerce Trends',
    description: 'Explored a 100K-order Brazilian retail dataset to understand order growth, customer behaviour and marketplace performance across 2016–2018.',
    tags: ['BigQuery', 'SQL', 'Excel', 'Business Analysis'],
    outcome: 'Analysed a 226% increase in orders in 2018 compared with 2017.',
    href: 'https://github.com/Varun-A-Menon-98/Target-Business-Case-Study', linkLabel: 'View case study', icon: BarChart3
  },
  {
    number: '02', type: 'DATA ANALYSIS PROJECT', title: 'YouTube Data Science Content Analysis',
    description: 'Built a Python workflow using the YouTube API to collect and analyse metrics from 3,000+ videos across leading data science creators.',
    tags: ['Python', 'YouTube API', 'Power BI', 'Data Cleaning'],
    outcome: 'Turned raw video metrics into an interactive dashboard for content comparison.',
    href: 'https://github.com/Varun-A-Menon-98/Youtube_Data_Analysis', linkLabel: 'View project', icon: BarChart3
  },
  {
    number: '03', type: 'ANALYTICS ENGINEERING', title: 'Modern Analytics & Reporting Layer',
    description: 'A representative overview of my analytics engineering work: layered dbt transformations, governed KPI definitions and reporting-ready datasets on Amazon Redshift.',
    tags: ['dbt', 'Redshift', 'SQL', 'Power BI'],
    outcome: '70+ dbt models maintained for reporting and Power BI migration.',
    href: 'mailto:varunmenon116@gmail.com?subject=Analytics%20engineering%20work', linkLabel: 'Discuss the work', icon: Database
  },
  {
    number: '04', type: 'DATA PIPELINE', title: 'PostgreSQL → Redshift with DLT',
    description: 'Replaced a managed ingestion connector with a Python-based DLT pipeline, adding data-quality checks and a more cost-efficient ingestion path.',
    tags: ['Python', 'DLT', 'PostgreSQL', 'Amazon Redshift'],
    outcome: 'Reduced integration costs by approximately $400 per month.',
    href: 'mailto:varunmenon116@gmail.com?subject=DLT%20pipeline%20details', linkLabel: 'Discuss the pipeline', icon: Workflow
  },
];

const experience = [
  {
    period: 'JAN 2025 — NOV 2026', role: 'Analytics Engineer', company: 'Commversion', location: 'Mumbai, India', current: false,
    bullets: [
      "Built Python/BeautifulSoup4-based website content extraction for an AI-agent search capability and integrated Giosg and LiveChat APIs using token-based pagination.",
      "Implemented asynchronous batch processing for PII redaction, adding custom logging, exception handling and failure tracking across DLT ingestion and other pipelines.",
      "Developed a Plotly Dash operations dashboard integrating warehouse datasets with real-time GA4 data, saving the Operations team approximately 3 hours daily.",
      "Collaborated with Operations, Client Success and business stakeholders to gather reporting requirements, define KPIs and translate business questions into reliable data and dashboard outputs.",
      "Analysed First Response Time, customer intent and conversion trends using statistical testing, A/B testing and regression to identify performance drivers and improvement opportunities.",
      "Developed 70+ dbt models in Amazon Redshift for chat, lead, revenue and conversion datasets; delivered Power BI and Metabase KPI dashboards across 450+ clients.",
      "Built Python reconciliation scripts to compare legacy and new-system records, helping shorten the soft-launch-to-product-launch timeline by 2 months.",
      "Improved Python/SQL data-quality checks and dbt/Airflow workflows, reducing processing time by 60% and saving approximately 240 hours annually.",
      "Used Sentence Transformers and cosine similarity to compare AI-agent and human responses, identify knowledge-base gaps and contribute to a 6% conversion increase.",
      "Replaced Fivetran with DLT for PostgreSQL-to-Redshift ingestion, reducing integration costs by approximately $400 per month."
    ]
  },
  {
    period: 'AUG 2023 — FEB 2024', role: 'Freelance Data Analyst', company: 'Independent projects', location: 'Remote', current: false,
    bullets: [
      'Analysed five years of pet-store data using statistical methods to identify commercial opportunities, contributing to an 8.5% improvement in client profitability.',
      'Reviewed one year of supermarket data to investigate customer segmentation and revenue patterns; analysis informed actions associated with 9% revenue growth in the following month.'
    ]
  },
  {
    period: 'MAR 2021 — MAY 2023', role: 'System Engineer', company: 'Tata Consultancy Services', location: 'India', current: false,
    bullets: [
      'Analysed loan portfolios for Lloyds Bank, Halifax and MBNA using PL/SQL, helping identify seven underperforming products.',
      'Supported reporting and operational analysis, including Excel and Power BI reporting workflows.',
      'Prepared MIS and operational performance reports for TCS iON Live Chat, reconciling agent-level performance data with overall operational metrics, investigating discrepancies and validating reporting outputs to support performance monitoring and business decisions.',
      'Contributed to the migration of a legacy banking application to a Spring Boot microservices architecture, improving scalability and deployment efficiency.'
    ]
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');
  useEffect(() => {
    const sections = ['home','about','experience','projects','skills','contact'];
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1));
    }), { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="header">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">VM</span><span>VARUN MENON<span className="brand-sub">DATA & ANALYTICS</span></span></a>
      <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        {['Home','About','Experience','Projects','Skills','Contact'].map(item => <a key={item} className={active===item?'nav-link active':'nav-link'} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
        <a className="nav-resume" href="/Varun-A-Menon-Resume.pdf" target="_blank" rel="noreferrer">Resume <Download size={14}/></a>
      </nav>
    </header>

    <main>
      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> OPEN TO DATA & ANALYTICS OPPORTUNITIES</div>
          <h1>Making data<br/><span className="gradient-text">work smarter.</span></h1>
          <p className="hero-lede">I’m Varun Menon — Analytics Engineer who turns complex data into reliable pipelines, meaningful metrics and decisions people can act on.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button button-quiet" href="#contact">Let’s connect <ArrowDownRight size={17}/></a></div>
          <div className="hero-meta"><span><MapPin size={14}/> India</span><span className="meta-divider"/><span>4+ years in IT</span><span className="meta-divider"/><span>3+ years in analytics</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract data architecture illustration">
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>
          <div className="core-card"><div className="core-top"><span className="tiny-dot"/><span className="tiny-dot"/><span className="tiny-dot"/><span className="core-label">DATA SYSTEM / 01</span></div><div className="core-icon"><Database size={34}/></div><div className="core-title">From raw data<br/>to clear direction.</div><div className="core-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="core-foot"><span>PIPELINE STATUS</span><span className="live-label">● OPTIMISED</span></div></div>
          <div className="float-chip chip-sql"><span className="chip-icon">⌘</span> SQL <b>↗</b></div><div className="float-chip chip-python"><span className="chip-icon">Py</span> Python <b>↗</b></div><div className="float-chip chip-bi"><BarChart3 size={15}/> BI & INSIGHTS</div>
          <div className="art-caption">ENGINEERING × ANALYTICS × IMPACT</div>
        </div>
        <a className="scroll-cue" href="#about"><span className="scroll-line"/> SCROLL TO EXPLORE</a>
      </section>

      <section id="about" className="section section-wrap">
        <div className="section-kicker">01 / ABOUT</div><div className="section-heading"><h2>Curious about the<br/><span className="muted-heading">why behind the numbers.</span></h2><p className="section-intro">I work across the analytics lifecycle — from understanding a business question to shaping the data model, validating the numbers and delivering the final insight.</p></div>
        <div className="about-grid">
          <div className="about-note"><span className="quote-mark">“</span><p>Good analytics is more than a dashboard. It is a trusted data foundation, a clear definition of success and an answer that helps someone make a better decision.</p><span className="note-signature">— MY APPROACH</span></div>
          <div className="about-points"><div className="about-point"><span className="point-index">01</span><div><h3>Build dependable data foundations</h3><p>Transformations, ingestion workflows, data quality and models that teams can trust.</p></div></div><div className="about-point"><span className="point-index">02</span><div><h3>Make metrics meaningful</h3><p>Translate stakeholder questions into clear KPIs, analysis and reporting experiences.</p></div></div><div className="about-point"><span className="point-index">03</span><div><h3>Connect analysis to outcomes</h3><p>Investigate performance, uncover drivers and communicate findings with context.</p></div></div></div>
        </div>
        <div className="stat-strip"><div><strong>70<span>+</span></strong><small>dbt models maintained</small></div><div><strong>50<span>%</span></strong><small>higher dashboard adoption</small></div><div><strong>$400</strong><small>monthly integration savings</small></div><div><strong>240<span>h</span></strong><small>annual processing time saved</small></div></div>
      </section>

      <section id="experience" className="section section-wrap">
        <div className="section-kicker">02 / EXPERIENCE</div><div className="section-heading"><h2>Where I’ve<br/><span className="muted-heading">made an impact.</span></h2><p className="section-intro">A mix of analytics engineering, business intelligence, operational analysis and technology delivery.</p></div>
        <div className="timeline">{experience.map((job,i)=><article className="timeline-item" key={job.company}><div className="timeline-marker"><span>{String(i+1).padStart(2,'0')}</span></div><div className="timeline-content"><div className="job-top"><div><div className="job-period">{job.period}</div><h3>{job.role}</h3><div className="job-company">{job.company} <span>·</span> {job.location}</div></div><span className="job-type">{i===0?'FULL-TIME':i===1?'CONTRACT / PROJECTS':'FULL-TIME'}</span></div><ul>{job.bullets.map((b,j)=><li key={j}>{b}</li>)}</ul></div></article>)}</div>
      </section>

      <section id="projects" className="section section-wrap">
        <div className="section-kicker">03 / SELECTED WORK</div><div className="section-heading"><h2>Work that turns<br/><span className="muted-heading">questions into clarity.</span></h2><p className="section-intro">A selection of public projects and representative work from my analytics engineering experience.</p></div>
        <div className="project-grid">{projects.map(p=>{const Icon=p.icon;return <article className="project-card" key={p.number}><div className="project-top"><span className="project-number">/{p.number}</span><span className="project-type">{p.type}</span><span className="project-icon"><Icon size={20}/></span></div><h3>{p.title}</h3><p className="project-description">{p.description}</p><div className="project-tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="project-outcome"><span>OUTCOME</span><p>{p.outcome}</p></div><a className="project-link" href={p.href} target={p.href.startsWith('http')?'_blank':undefined} rel="noreferrer">{p.linkLabel} <ArrowUpRight size={16}/></a></article>})}</div>
        <p className="project-disclaimer">Selected metrics are based on work and project summaries in my resume. Some professional work is not publicly shareable; I can walk through the approach and architecture in a conversation.</p>
      </section>

      <section id="skills" className="section section-wrap">
        <div className="section-kicker">04 / TOOLKIT</div><div className="section-heading"><h2>The tools behind<br/><span className="muted-heading">the thinking.</span></h2><p className="section-intro">A practical toolkit spanning data analysis, transformation, orchestration and business intelligence.</p></div>
        <div className="skills-grid">{skills.map((s,i)=><div className="skill-card" key={s.group}><div className="skill-card-head"><span>0{i+1}</span><h3>{s.group}</h3></div><div className="skill-list">{s.items.map(item=><span key={item}>{item}</span>)}</div></div>)}</div>
      </section>

      <section id="contact" className="contact-section section-wrap"><div className="contact-panel"><div className="section-kicker">05 / CONTACT</div><div className="contact-layout"><div><h2>Have a data challenge?<br/><span className="gradient-text">Let’s talk.</span></h2><p>I’m interested in opportunities across data analytics, analytics engineering and business intelligence. If you’re building something meaningful with data, I’d like to hear about it.</p><a className="button button-primary" href="mailto:varunmenon116@gmail.com">Start a conversation <ArrowUpRight size={17}/></a></div><div className="contact-links"><a href="mailto:varunmenon116@gmail.com"><span className="contact-icon"><Mail size={18}/></span><span><small>EMAIL</small>varunmenon116@gmail.com</span><ArrowUpRight size={16}/></a><a href="https://linkedin.com/in/varun-a-menon" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={18}/></span><span><small>LINKEDIN</small>Connect professionally</span><ArrowUpRight size={16}/></a><a href="https://github.com/Varun-A-Menon-98" target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={18}/></span><span><small>GITHUB</small>Explore my repositories</span><ArrowUpRight size={16}/></a></div></div></div></section>
    </main>
    <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-mark">VM</span><span>VARUN MENON<span className="brand-sub">DATA & ANALYTICS</span></span></a><span>Designed with intent. Built with data.</span><span>© {new Date().getFullYear()} VARUN A. MENON</span></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
