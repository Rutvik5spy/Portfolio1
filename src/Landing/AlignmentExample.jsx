import React, { useState, useEffect } from 'react';
import { 
  Navbar, 
  Nav, 
  Container, 
  Row, 
  Col, 
  Button, 
  Card, 
  ProgressBar, 
  Badge 
} from 'react-bootstrap';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaExternalLinkAlt, 
  FaCode, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaGraduationCap, 
  FaAward,
  FaChevronDown
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function AlignmentExample() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform Urban-Monkey",
      description: "A frontend e-commerce solution with React, JavaScript,Html5,Css3. Features include user authentication, Searching, and different section.",
      image: "https://searchtap.io/img/success-stories/urbanmonkey/urbanmonkey-search.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://urban-mokey-rutvik-patil.netlify.app",
      codeLink: "https://github.com/Rutvik5spy/urban-monkey"
    }
    // {
    //   title: "Task Management App",
    //   description: "A collaborative task management application with real-time updates, team collaboration features, and advanced filtering capabilities.",
    //   image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=500",
    //   technologies: ["React", "Firebase", "Bootstrap"],
    //   liveLink: "https://example.com",
    //   codeLink: "https://github.com/username/task-app"
    // },
    // {
    //   title: "Weather Dashboard",
    //   description: "A modern weather application with interactive maps, detailed forecasts, and location-based services using multiple weather APIs.",
    //   image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=500",
    //   technologies: ["React", "OpenWeather API", "Chart.js"],
    //   liveLink: "https://example.com",
    //   codeLink: "https://github.com/username/weather-app"
    // }
  ];

  const skills = [
    { name: "JavaScript", level: 85, icon: <FaJs className="text-warning" /> },
    { name: "React", level: 80, icon: <FaReact className="text-info" /> },
    { name: "Java", level: 75, icon: <FaNodeJs className="text-success" /> },
    { name: "HTML5", level: 100, icon: <FaHtml5 className="text-danger" /> },
    { name: "CSS3", level: 100, icon: <FaCss3Alt className="text-primary" /> },
    { name: "SQL", level: 90, icon: <FaDatabase className="text-secondary" /> }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Savitribai Phule Pune University",
      year: "2020 - 2024",
      description: "Specialized in software engineering and web development",
      icon: <FaGraduationCap className="text-primary" />
    },
    {
      degree: "Full Stack Web Development",
      institution: "Full Stack Guru",
      year: "2025",
      description: "Intensive program covering modern web technologies and frameworks.",
      icon: <FaAward className="text-warning" />
    }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-3">
            <span >Port</span>
            <span className="text-secondary">folio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {['home', 'about', 'skills', 'education', 'projects', 'contact'].map((section) => (
                <Nav.Link
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  className={`text-capitalize mx-2 ${
                    activeSection === section ? 'text-primary fw-bold' : ''
                  }`}
                >
                  {section}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="min-vh-100 d-flex align-items-center bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start">
              <div className="mb-4">
                {/* <div className="rounded-circle bg-primary d-inline-flex align-items-center justify-content-center" 
                     style={{ width: '120px', height: '120px' }}>
                  <span className="text-white fs-1 fw-bold">JD</span>
                </div> */}
              </div>
              <h1 className="display-3 fw-bold mb-3">
                Rutvik <span className="text-secondary">Patil</span>
              </h1>
              <p className="lead mb-4 text-muted">
               My name is Rutvik Patil. I possess a solid foundation in web development and programming with technical skills in Java, HTML, CSS, JavaScript, and React.I bring strong soft skills to the table — I am a hardworking, quick learner, and highly adaptable.

              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Button 
                  variant="primary" 
                  size="lg" 
                  onClick={() => scrollToSection('projects')}
                  className="px-4"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg" 
                  onClick={() => scrollToSection('contact')}
                  className="px-4"
                >
                  Get In Touch
                </Button>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <img
                src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Developer workspace"
                className="img-fluid rounded shadow-lg"
              />
            </Col>
          </Row>
          <div className="text-center mt-5">
            <FaChevronDown className="text-muted fs-4" style={{ animation: 'bounce 2s infinite' }} />
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-white">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-4 fw-bold mb-3">About Me</h2>
              <p className="lead text-muted">
                I'm a passionate full-stack developer with expertise in modern web technologies
              </p>
            </Col>
          </Row>
          
          <Row className="align-items-center">
            <Col md={6} className="mb-4">
              <div className="bg-light rounded p-4 shadow-sm">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="About me"
                  className="img-fluid rounded"
                />
              </div>
            </Col>
            
            <Col md={6}>
              <div className="mb-4">
                <p className="fs-5 text-muted mb-3">
                  My name is Rutvik Patil, and I am a recent graduate from Savitribai
Phule Pune University (SPPU). I possess a solid foundation in web
development and programming with technical skills in Java, HTML, CSS,
JavaScript, and React.

Beyond technical proficiency, I bring strong soft skills to the table — I
am a hardworking, quick learner, and highly adaptable individual who
can efficiently pick up new technologies and work in dynamic
environments. 
                </p>
                
                <p className="fs-5 text-muted mb-4">
                  I take pride in being honest, reliable, and self-motivated,
with a strong commitment to continuous learning and professional
growth.

I am looking forward to contributing to a forward-thinking organization
where I can apply my skills and grow as a software professional.
                </p>
                
                <div className="d-flex flex-wrap gap-2">
                  {["Problem Solver", "Team Player", "Quick Learner", "Detail Oriented"].map((trait, index) => (
                    <Badge key={index} bg="primary" className="p-2 fs-6">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-4 fw-bold mb-3">Skills</h2>
              <p className="lead text-muted">
                Technologies and tools I work with
              </p>
            </Col>
          </Row>
          
          <Row>
            {skills.map((skill, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <div className="fs-2 me-3">
                        {skill.icon}
                      </div>
                      <h5 className="mb-0">{skill.name}</h5>
                    </div>
                    <ProgressBar 
                      now={skill.level} 
                      label={`${skill.level}%`}
                      variant="primary"
                      className="mb-2"
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Education Section */}
      <section id="education" className="py-5 bg-white">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-4 fw-bold mb-3">Education</h2>
              <p className="lead text-muted">
                My academic journey and certifications
              </p>
            </Col>
          </Row>
          
          <Row>
            {education.map((edu, index) => (
              <Col md={6} key={index} className="mb-4">
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <div className="fs-2 me-3">
                        {edu.icon}
                      </div>
                      <div>
                        <h5 className="mb-1">{edu.degree}</h5>
                        <p className="text-muted mb-0">{edu.institution}</p>
                      </div>
                    </div>
                    <Badge bg="secondary" className="mb-2">{edu.year}</Badge>
                    <p className="text-muted">{edu.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-4 fw-bold mb-3">Projects</h2>
              <p className="lead text-muted">
                Some of my recent work
              </p>
            </Col>
          </Row>
          
          <Row>
            {projects.map((project, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="h-100 shadow-sm border-0">
                  <Card.Img 
                    variant="top" 
                    src={project.image} 
                    alt={project.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="text-muted flex-grow-1">
                      {project.description}
                    </Card.Text>
                    <div className="mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} bg="outline-primary" className="me-1 mb-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      <Button 
                        variant="primary" 
                        size="sm" 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-fill"
                      >
                        <FaExternalLinkAlt className="me-1" />
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline-primary" 
                        size="sm" 
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-fill"
                      >
                        <FaCode className="me-1" />
                        Source Code
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-primary text-white">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-4 fw-bold mb-3">Get In Touch</h2>
              <p className="lead">
                Let's work together to bring your ideas to life
              </p>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={8}>
              <Row>
                <Col md={4} className="text-center mb-4">
                  <div className="fs-1 mb-3">
                    <FaEnvelope />
                  </div>
                  <h5>Email</h5>
                  <p className="text-light">rutvikpatilp@gmail.com</p>
                </Col>
                <Col md={4} className="text-center mb-4">
                  <div className="fs-1 mb-3">
                    <FaPhone />
                  </div>
                  <h5>Phone</h5>
                  <p className="text-light">7262868030</p>
                </Col>
                <Col md={4} className="text-center mb-4">
                  <div className="fs-1 mb-3">
                    <FaMapMarkerAlt />
                  </div>
                  <h5>Location</h5>
                  <p className="text-light">Pune, Maharashtra</p>
                </Col>
              </Row>
              
              <div className="text-center mt-4">
                <div className="d-flex justify-content-center gap-3">
                  <Button variant="outline-light" size="lg" className="rounded-circle">
                    <a href='https://github.com/Rutvik5spy' ><FaGithub /></a>
                  </Button>
                  <Button variant="outline-light" size="lg" className="rounded-circle">
                    <a href="https://www.linkedin.com/in/patil-rutvik"><FaLinkedin /></a>
                  </Button>
                  <Button variant="outline-light" size="lg" className="rounded-circle">
                    <FaEnvelope />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark text-white text-center">
        <Container>
          <p className="mb-0">&copy; 2025 Rutvik Web-Developer. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default AlignmentExample;