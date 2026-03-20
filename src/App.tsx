import { useState, useEffect } from 'react'

function App() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const projectList = [
    {
      id: 'medical_qa',
      icon: '⚕️',
      title: 'Medical QA Chatbot with LangChain',
      year: '2024',
      type: 'Natural Language Processing',
      description: 'An NLP application built at AIT focusing on autonomous medical question-answering. Utilizes LangChain orchestrating large language models to query contextual medical literature and retrieve sourced clinical answers safely.',
      stack: ['Python', 'LangChain', 'LLMs', 'RAG'],
      repo: 'https://github.com/KaungHtetCho-22/medicalQA'
    },
    {
      id: 'football_match_analysis',
      icon: '⚽',
      title: 'Football Match Analyzer',
      year: '2024',
      type: 'Computer Vision',
      description: 'A sophisticated computer vision processing pipeline engineered to detect and track player trajectories, map ball motions, and extract deep analytical match statistics from raw sport video feeds.',
      stack: ['OpenCV', 'YOLO', 'Jupyter', 'Python'],
      repo: 'https://github.com/KaungHtetCho-22/football_match_analysis'
    },
    {
      id: 'decarbonize_th',
      icon: '🌱',
      title: 'Decarbonize-TH: Emission Forecasting',
      year: '2025',
      type: 'Machine Learning',
      description: 'A quantitative machine learning project exploring metrics and deploying robust predictive models for actionable carbon emission reduction strategies across Thailand.',
      stack: ['Jupyter', 'Python', 'MLOps', 'Scikit-Learn'],
      repo: 'https://github.com/KaungHtetCho-22/Decarbonize-TH'
    },
    {
      id: 'face_recognition_aws',
      icon: '☁️',
      title: 'Serverless Face Recognition on AWS',
      year: '2024',
      type: 'Cloud Computing',
      description: 'An end-to-end serverless application hosted natively on AWS infrastructure, integrating highly-available realtime facial recognition logic with distributed resilient S3 storage and scalable Lambda compute layers.',
      stack: ['AWS', 'Lambda', 'OpenCV', 'Python'],
      repo: 'https://github.com/KaungHtetCho-22/Face-recognition-on-AWS'
    },
    {
      id: '2d_robot_arm_drl',
      icon: '🦾',
      title: '2DoF Robot Arm Control (DRL)',
      year: '2024',
      type: 'Deep Reinforcement Learning',
      description: 'Applied Deep Reinforcement Learning algorithms to compute internal kinematics and securely govern a 2-Degree-of-Freedom 2D robotic arm safely towards shifting spatial targets.',
      stack: ['Python', 'PyTorch', 'Reinforcement Learning'],
      repo: 'https://github.com/KaungHtetCho-22/2d-robot-arm-2DoF-DRL'
    },
    {
      id: 'doc_rag',
      icon: '📚',
      title: 'DocRAG — Document Intelligence',
      year: '2025',
      type: 'RAG Infrastructure',
      description: 'A dedicated, fully typed and robust document ingestion pipeline powered by advanced vector search, designed to produce highly accurate contextual retrieval arrays for business application integrations.',
      stack: ['Python', 'Qdrant', 'FastAPI'],
      repo: 'https://github.com/KaungHtetCho-22/doc-rag'
    },
    {
      id: 'bcompanion',
      icon: '🗣️',
      title: 'bCompanion: Burmese Voice AI',
      year: '2026',
      type: 'Generative AI / Speech',
      description: 'A dedicated low-resource language companion handling native generative Burmese conversations. Integrates speech-to-text with extreme-focus on strict multi-service production latency targets.',
      stack: ['GenAI', 'Audio Processing', 'Python'],
      repo: 'https://github.com/KaungHtetCho-22/bCompanion'
    },
    {
      id: 'comi_craft',
      icon: '🎨',
      title: 'comiCraft',
      year: '2024',
      type: 'AI Application',
      description: 'An interactive comic-book generator leveraging generative AI tools allowing users to dictate characters and scripts, seamlessly transformed into dynamic, styled visually rich comic strips.',
      stack: ['JavaScript', 'Generative UI', 'Web Apps'],
      repo: 'https://github.com/KaungHtetCho-22/comiCraft'
    }
  ];
  
  const [activeProject, setActiveProject] = useState(projectList[0].id);
  const activeData = projectList.find(p => p.id === activeProject)!;

  const experienceList = [
    {
      id: 'ai_center',
      icon: '🔬',
      file: 'ai_center_research.md',
      title: 'Research Assistant (AI Engineer)',
      company: 'The AI Center',
      date: 'May 2024 - Present',
      type: 'Applied AI Research',
      projectSections: [
        {
          name: 'Area Surveillance – Real-Time Speed Detection System',
          list: [
            'Designed and deployed a real-time vehicle speed detection pipeline using NVIDIA DeepStream, achieving ~95% detection accuracy across dual RTSP camera streams',
            'Engineered computer vision algorithms to calculate vehicle speed from multi-camera inputs, replacing fully manual monitoring workflows',
            'Built a backend system with database storage and web-based analytics dashboard for live surveillance reporting, using RabbitMQ for internal pipeline messaging and Redis pub/sub to deliver real-time results to external web clients',
            'Implemented CI/CD pipelines (GitLab CI) to automate model testing and deployment, reducing manual deployment'
          ]
        },
        {
          name: 'Biodiversity Monitoring – Bird and Insect Sound AI Pipeline',
          list: [
            'Architected end-to-end AI system from field hardware to cloud inference, ingesting continuous 24/7 audio streams from 25 field devices across 12 monitoring sites',
            'Built automated audio ingestion pipelines processing 5-second audio chunks at real-time throughput, handling ~10 minutes of overlapping wildlife audio per inference cycle',
            'Trained deep learning models for bird and insect sound classification, achieving 93% accuracy across 52 species',
            'Deployed daily analytics pipeline for bird and insect population scoring, delivering results via REST APIs and JSON feeds to mobile and web platforms',
            'Set up monitoring dashboards using Grafana and Cacti to track pipeline health across all 25 field devices'
          ]
        },
        {
          name: 'Leukemia Cell Detection – Medical AI Research',
          list: [
            'Developed a two-stage deep learning pipeline for localizing and classifying leukemic vs. non-leukemic white blood cells from microscopic images',
            'Finetuned self-supervised learning models (DINO, DINO-Bloom) to improve performance under limited labeled data conditions, achieving 88.87% accuracy with 92%+ precision on leukemic class',
            'Configured CVAT annotation platform to support large-scale medical image labeling across 21,000 images',
            'Optimized model for cross-domain generalization across multiple medical datasets, improving robustness by 5%'
          ]
        },
        {
          name: 'AI Deployment, Monitoring & Security Infrastructure',
          list: [
            'Built GitLab CI/CD test pipelines for multiple AI models in production surveillance systems, including synthetic test video case generation to validate model performance across diverse scenarios',
            'Visualized system monitoring dashboards using Grafana and Portainer to manage Docker containers and 100 camera systems from a single interface',
            'Secured hard disk storage on edge AI servers using LUKS full-disk encryption with TPM2 hardware-based autounlock, achieving zero unauthorized access incidents'
          ]
        }
      ],
      responsibilities: []
    },
    {
      id: 'jfe_meranti',
      icon: '🏭',
      file: 'jfe_meranti.sh',
      title: 'Operation and Maintenance Engineer',
      company: 'JFE Meranti Myanmar',
      date: 'Sep 2019 - Sep 2022',
      type: 'Systems Maintenance',
      projects: [],
      responsibilities: [
        'Performed installation & commissioning of precision machines (EDT, Heavy grinder, Semi-auto Lathe, De-chocking) cooperating with multinational workers in a 6-month duration.',
        'Moderated preventive and break down maintenance of hydraulic and pneumatic systems.',
        'Maintained sensors, actuators and electrical systems of CNC machines and the production line.'
      ]
    },
    {
      id: 'delta_electronics',
      icon: '⚡',
      file: 'delta_electronics.ts',
      title: 'Process Engineer',
      company: 'Delta Electronics',
      date: 'May 2019 - Aug 2019',
      type: 'Industrial Engineering',
      projects: [],
      responsibilities: [
        'Led the IE/PE team; responsible for monitoring production line and support 4M methods for pilot-line operation.',
        'Collaborated with QA/QC and production departments performing Root Cause Analysis for delayed WIP.',
        'Designed jigs and fixtures designs applying AutoCAD and GD&T.'
      ]
    }
  ];

  const [activeExp, setActiveExp] = useState(experienceList[0].id);
  const activeExpData = experienceList.find(e => e.id === activeExp)!;

  useEffect(() => {
    setMounted(true);
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setIsLightMode(true);
    }
  }, []);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  if (!mounted) return null;

  return (
    <>
      <div className="wrapper">
      
      <header>
        <a href="#" className="logo">KAUNG HTET CHO</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <button onClick={toggleTheme} className="theme-toggle">
            {isLightMode ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </header>

      <div className="hero">
        <div className="hero-tag">
          <span className="typewriter-text">System Initialize: AI Engineer Portfolio</span>
        </div>
        <h1>Deploying<br />Intelligent<br /><span>AI Systems</span></h1>
        <p className="hero-sub">AI Engineer with hands-on experience across computer vision, audio classification, medical imaging, and generative AI. From researching neural networks to deploying real-time inference pipelines.</p>
      </div>

      <div className="verdict" id="about">
        <div className="verdict-name">About <em>Me</em></div>
        <div className="verdict-desc">
          I build systems that go from research to production. As a Research Assistant, I have deployed real-time inference pipelines, architected distributed field hardware systems, and conducted clinical deep learning research. A background in factory automation gives me a systems-level reliability mindset. Currently completing a Master's in Mechatronics and AI at AIT, and available to start immediately.
        </div>
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="section" id="experience">
        <div className="section-header">
          <div className="section-num">01</div>
          <div className="section-title">Work Experience</div>
        </div>
        
        <div className="ide-container">
          <div className="ide-header">
            <div className="ide-dots">
              <div className="ide-dot red"></div>
              <div className="ide-dot yellow"></div>
              <div className="ide-dot green"></div>
            </div>
            <div className="ide-title">kcho_experience — code</div>
          </div>
          
          <div className="ide-body">
            <div className="ide-sidebar">
              <div className="ide-explorer-title">COMPANIES</div>
              {experienceList.map(e => (
                <div 
                  key={e.id}
                  className={`ide-file ${activeExp === e.id ? 'active' : ''}`}
                  onClick={() => setActiveExp(e.id)}
                >
                  <span style={{ fontSize: '16px' }}>{e.icon}</span> {e.file}
                </div>
              ))}
            </div>
            
            <div className="ide-editor">
              <div className="ide-tabs">
                <div className="ide-tab active">~/{activeExpData.file}</div>
              </div>
              
              <div className="ide-content" key={activeExpData.id}>
                <div className="terminal-line step-0">
                  <span className="pwd">kcho@portfolio</span>:<span className="dir">~/experience</span>$ cat <TypewriterText text={activeExpData.file} delay={100} speed={40} />
                </div>
                
                <div className="terminal-output">
                  <h3 className="term-title step-1">{activeExpData.company}</h3>
                  <div className="term-meta step-1">
                    <span className="term-year">[{activeExpData.date}]</span> 
                    <span className="term-type">{activeExpData.title}</span>
                  </div>
                  
                  {activeExpData.id === 'ai_center' && activeExpData.projectSections ? (
                    <div className="exp-projects step-2" style={{ marginTop: '32px' }}>
                      <p style={{ marginBottom: '24px', color: 'var(--muted)', fontSize: '13px', letterSpacing: '0.1em' }}>// CONFIDENTIAL DEPLOYED RESEARCH PROJECTS:</p>
                      {activeExpData.projectSections.map((projSec, idx) => (
                        <div key={idx} style={{ marginBottom: '32px' }}>
                          <h4 style={{ color: 'var(--white)', fontSize: '18px', marginBottom: '12px', fontFamily: '"Fraunces", serif' }}>{projSec.name}</h4>
                          <ul style={{ paddingLeft: '24px', color: 'var(--text)', lineHeight: '1.8', fontSize: '15px' }}>
                            {projSec.list.map((item, idxx) => (
                              <li key={idxx} style={{ marginBottom: '6px' }}>
                                <TypewriterText text={item} delay={600 + (idx * 200) + (idxx * 100)} speed={3} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="exp-responsibilities step-2" style={{ marginTop: '32px' }}>
                      <p style={{ marginBottom: '24px', color: 'var(--muted)', fontSize: '13px', letterSpacing: '0.1em' }}>// CORE RESPONSIBILITIES:</p>
                      <ul style={{ paddingLeft: '24px', color: 'var(--text)', lineHeight: '2.0', fontSize: '16px' }}>
                        {activeExpData.responsibilities.map((resp, idx) => (
                          <li key={idx} style={{ marginBottom: '12px' }}>
                            <TypewriterText text={resp} delay={600 + (idx * 400)} speed={4} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="terminal-line blink-line step-4">
                  <span className="pwd">kcho@portfolio</span>:<span className="dir">~/experience</span>$ <span className="cursor">█</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EDUCATION SECTION */}
      <div className="section" id="education">
        <div className="section-header">
          <div className="section-num">02</div>
          <div className="section-title">Education</div>
        </div>
        
        <div className="timeline-container">
          <div className="timeline">
            <div className="tl-item">
              <div className="tl-day">Aug 2023 - May 2026</div>
              <div className="tl-title">Master of Engineering in Mechatronics and AI | Asian Institute of Technology</div>
              <div className="tl-body">Thesis: "A transformer Based Two-Stage Framework for Acute Leukemia Cell Detection and Classification". Executed projects bridging deep reinforcement learning, computer vision, LangChain architecture, and local model serving.</div>
            </div>
            <div className="tl-item">
              <div className="tl-day">Dec 2012 - Sep 2019</div>
              <div className="tl-title">Bachelor of Engineering in Mechanical Precision | University of Technology (Yatanarpon Cybercity)</div>
              <div className="tl-body">Thesis: "Kinematics Analysis of 6 DoF Robotics Arm". Gained strong operational fundamentals across automation, industrial robotics, and precision mechanical systems.</div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div className="section" id="projects">
        <div className="section-header">
          <div className="section-num">03</div>
          <div className="section-title">Showcase Projects</div>
        </div>

        <div className="ide-container">
          <div className="ide-header">
            <div className="ide-dots">
              <div className="ide-dot red"></div>
              <div className="ide-dot yellow"></div>
              <div className="ide-dot green"></div>
            </div>
            <div className="ide-title">kcho_projects_2026 — bash</div>
          </div>
          
          <div className="ide-body">
            <div className="ide-sidebar">
              <div className="ide-explorer-title">EXECUTABLES</div>
              {projectList.map(p => (
                <div 
                  key={p.id}
                  className={`ide-file ${activeProject === p.id ? 'active' : ''}`}
                  onClick={() => setActiveProject(p.id)}
                >
                  <span style={{ fontSize: '16px' }}>{p.icon}</span> {p.id}.sh
                </div>
              ))}
            </div>
            
            <div className="ide-editor">
              <div className="ide-tabs">
                <div className="ide-tab active">~/{activeData.id}.sh</div>
              </div>
              
              <div className="ide-content" key={activeData.id}>
                <div className="terminal-line step-0">
                  <span className="pwd">kcho@portfolio</span>:<span className="dir">~/projects</span>$ ./<TypewriterText text={`${activeData.id}.sh`} delay={100} speed={40} />
                </div>
                
                <div className="terminal-output">
                  <h3 className="term-title step-1">{activeData.title}</h3>
                  <div className="term-meta step-1">
                    <span className="term-year">[{activeData.year}]</span> 
                    <span className="term-type">{activeData.type}</span>
                  </div>
                  <p className="term-desc step-2">
                    <TypewriterText text={activeData.description} delay={800} speed={8} />  
                  </p>
                  
                  <div className="term-stack step-3">
                    <span className="stack-label">TECH STACK:</span>
                    <div className="tags-container" style={{ marginTop: '8px' }}>
                      {activeData.stack.map(s => <span key={s} className="tag accent">{s}</span>)}
                    </div>
                  </div>
                  
                  {'repo' in activeData && (
                    <div className="term-repo step-3" style={{ marginTop: '24px' }}>
                      <a href={activeData.repo} target="_blank" rel="noopener noreferrer" className="tag orange" style={{ fontSize: '14px', textDecoration: 'none' }}>
                        [↗] View Repository 
                      </a>
                    </div>
                  )}
                </div>
                
                <div className="terminal-line blink-line step-4" style={{ marginTop: '24px' }}>
                  <span className="pwd">kcho@portfolio</span>:<span className="dir">~/projects</span>$ <span className="cursor">█</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div className="section" id="skills">
        <div className="section-header">
          <div className="section-num">04</div>
          <div className="section-title">Technical Expertise</div>
        </div>

        <table className="stack-table">
          <tbody>
            <tr>
              <td>AI / ML Modeling</td>
              <td>
                <span className="tag green">PyTorch</span>
                <span className="tag green">TensorFlow</span>
                <span className="tag green">Computer Vision</span>
                <span className="tag accent">NLP / Audio</span>
                <span className="tag accent">YOLO / Detectron2</span>
                <span className="tag">Self-Supervised Learning</span>
                <span className="tag">DINO</span>
              </td>
            </tr>
            <tr>
              <td>Gen AI & LLMs</td>
              <td>
                <span className="tag accent">LangChain</span>
                <span className="tag accent">RAG Pipelines</span>
                <span className="tag accent">Fine-Tuning (LoRA)</span>
                <span className="tag orange">Chroma / Qdrant</span>
                <span className="tag">llama.cpp / Ollama</span>
                <span className="tag">OpenAI / Gemini</span>
              </td>
            </tr>
            <tr>
              <td>DevOps & MLOps</td>
              <td>
                <span className="tag orange">Docker</span>
                <span className="tag orange">Kubernetes</span>
                <span className="tag">GitLab CI / CD</span>
                <span className="tag">KubeFlow / MLFlow</span>
                <span className="tag">Grafana / Cacti</span>
                <span className="tag">Neo4j</span>
              </td>
            </tr>
            <tr>
              <td>Software & Edge</td>
              <td>
                <span className="tag">Python</span>
                <span className="tag">C++</span>
                <span className="tag">React / Web</span>
                <span className="tag">FastAPI</span>
                <span className="tag">AWS / GCP</span>
                <span className="tag">NVIDIA Jetson / DeepStream</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CERTIFICATIONS SECTION */}
      <div className="section" id="certifications">
        <div className="section-header">
          <div className="section-num">05</div>
          <div className="section-title">Certifications</div>
        </div>
        
        <div className="certs-grid">
          <div className="cert-card">
            <div className="cert-title">Generative AI LLMs Associate Certification</div>
            <div className="cert-meta">
              <span className="cert-issuer">Nvidia</span>
              <span className="cert-year">2026</span>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-title">Introduction to Kubernetes</div>
            <div className="cert-meta">
              <span className="cert-issuer">The Linux Foundation</span>
              <span className="cert-year">2026</span>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-title">AI/ML Toolkits with Kubeflow</div>
            <div className="cert-meta">
              <span className="cert-issuer">The Linux Foundation</span>
              <span className="cert-year">2026</span>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-title">Introduction to GitOps</div>
            <div className="cert-meta">
              <span className="cert-issuer">The Linux Foundation</span>
              <span className="cert-year">2026</span>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-title">Secure AI/ML-Driven Software Development</div>
            <div className="cert-meta">
              <span className="cert-issuer">The Linux Foundation</span>
              <span className="cert-year">2026</span>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-title">Vector Search</div>
            <div className="cert-meta">
              <span className="cert-issuer">Qdrant</span>
              <span className="cert-year">2026</span>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-title">MCP for Beginners</div>
            <div className="cert-meta">
              <span className="cert-issuer">KodeKloud</span>
              <span className="cert-year">2026</span>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-title">Fundamental of MLOps</div>
            <div className="cert-meta">
              <span className="cert-issuer">KodeKloud</span>
              <span className="cert-year">2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT / CTA */}
      <div className="final-cta" id="contact">
        <h2>Let's Build It</h2>
        <p>Currently completing my Master's at AIT and available to start immediately.</p>
        
        <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
           <a href="mailto:kaunghtetcho.ise@gmail.com" className="cta-button">kaunghtetcho.ise@gmail.com</a>
           <a href="tel:+66824578605" className="cta-button" style={{ background: 'transparent', color: 'var(--text)', borderColor: 'var(--text)' }}>
             +66 824578605
           </a>
        </div>
        
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginBottom: '20px' }}>
          <a href="https://github.com/KaungHtetCho-22" target="_blank" rel="noopener noreferrer" className="tag accent" style={{ fontSize: '15px', padding: '12px 24px' }}>GitHub</a>
          <a href="https://www.linkedin.com/in/kaunghtetcho/" target="_blank" rel="noopener noreferrer" className="tag accent" style={{ fontSize: '15px', padding: '12px 24px' }}>LinkedIn</a>
        </div>
      </div>

    </div>
    </>
  )
}

const TypewriterText = ({ text, delay = 0, speed = 15 }: { text: string, delay?: number, speed?: number }) => {
  const [content, setContent] = useState('');
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    setContent('');
    setTyping(false);
    
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      setTyping(true);
      let i = 0;
      interval = setInterval(() => {
         setContent(text.substring(0, i + 1));
         i++;
         if (i >= text.length) {
            clearInterval(interval);
            setTyping(false);
         }
      }, speed);
    }, delay);
    
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay, speed]);

  return (
    <>
      <span dangerouslySetInnerHTML={{ __html: content }} />
      {typing && <span className="cursor" style={{ marginLeft: '4px' }}>█</span>}
    </>
  );
};

export default App
