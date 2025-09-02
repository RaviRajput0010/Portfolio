import { useEffect, useState } from "react";
import "./App.css";
import { img } from "./Asset/image.js";
import { FaPaperPlane , FaTimes,FaBars} from "react-icons/fa";
import { motion } from "framer-motion";


export default function App() {
 const [menuOpen, setMenuOpen] = useState(false);
 
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);


  return (
<div className="app">

      <nav className="navbar">
        <div style={{display:'flex',justifyContent:'space-between'}}>
        
        <h1 className="logo">MyPortfolio</h1>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a
            href="/UpdatedRaviResume.pdf"
            download="Ravi_Resume.pdf"
            style={{ textDecoration: "none" }}
            onClick={() => setMenuOpen(false)}
          >
            <a className="download">Download Resume</a>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>
            Hi, I'm <span className="highlight">Ravi Rajput</span>
          </h2>
          <p>Full-Stack Developer | Problem Solver | Tech Enthusiast</p>
          <br />
          <motion.a
            href="#projects"
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>

        <motion.div
          className="imagediv"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={img.ravi1} alt="React Logo" />
        </motion.div>
      </section>
    
      {/* About Section */}
      <section id="about" className="section" style={{ height: "auto", width: "100%" }}>
        <div className="heading" style={{ height: "auto", width: "100%" }}>
          <h2>About Me</h2>
        </div>
        <div className="content" style={{ height: "auto", width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p>
              I'm a passionate developer with a strong focus on building responsive and
              user-friendly web applications. My expertise lies in crafting dynamic
              front-end interfaces using React and delivering scalable back-end solutions
              with Node.js. I enjoy working with modern JavaScript frameworks and always
              strive to write clean, efficient code. With a solid understanding of the full
              development lifecycle, I excel at turning ideas into functional digital
              experiences. I'm committed to continuous learning and staying updated with
              the latest web technologies. I take pride in writing maintainable and
              well-documented code. Collaboration, problem-solving, and attention to detail
              are at the heart of my workflow. I've contributed to both solo and
              team-based projects across various domains. My goal is to create meaningful,
              high-quality software that enhances user experience. I’m excited about
              building the future of the web through innovation and creativity.
            </p>
          </motion.div>
          <motion.div
            className="imagediv"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={img.ravi2} alt="Ravi Rajput" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <h2>My Skills</h2>
        <div className="project-grid">
          {[
            { language: "HTML", img: img.html },
            { language: "CSS", img: img.css },
            { language: "JavaScript", img: img.javas },
            { language: "React", img: img.react },
            { language: "Node.js", img: img.nodejs },
            { language: "Java", img: img.java },
            { language: "C++", img: img.cpp },
            { language: "Python", img: img.python },
          ].map((skill, i) => (
            <motion.div
              className="project-card1"
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {skill.language}
              <img src={skill.img} alt={skill.language} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
  <h2>Projects</h2>
  <div className="project-grid">
    {[
      { 
        title: "Portfolio Website", 
        desc: `A responsive and modern portfolio website built using React, 
        Tailwind CSS, and Framer Motion animations. It includes smooth scrolling, 
        interactive UI components, and a fully optimized responsive design for 
        both desktop and mobile users. The site highlights my skills, projects, 
        and achievements while maintaining fast performance and SEO optimization.`,
        video: "/port.mp4"
      },
      { 
        title: "Chat App", 
        desc: `A real-time chat application developed with React, Node.js, 
        Express, and Socket.io. It allows users to create rooms, send instant 
        messages, and get typing indicators. Messages are stored in MongoDB for 
        persistence, and authentication is implemented with JWT. The app is 
        optimized for fast performance and smooth user experience across devices.`,
        video: "/chatapp.mp4" 
      },
      { 
        title: "Music Player", 
        desc: `A full-featured music player inspired by Spotify, built with React, 
        Context API, and custom audio controls. Users can create and manage 
        playlists, play/pause songs, and switch tracks seamlessly. LocalStorage 
        is used to save playlists, and the UI is responsive with an elegant 
        design. Videos autoplay in project previews to enhance interactivity.`,
        video: "/spotify.mp4" 
      }
    ].map((project, i) => (
      <motion.div
        className="project-card"
        key={i}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
      >
        <h3>{project.title}</h3>
        <div className="video">
          {project.video && (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%" }}
            />
          )}
        </div>
        <br/>
       <p>{project.desc}</p>


      </motion.div>
    ))}
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact us</h2>
        <motion.div
          className="contact-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <form className="contact-form">
            <motion.input
              type="text"
              placeholder="NAME"
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="email"
              placeholder="EMAIL"
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.textarea
              placeholder="MESSAGE"
              rows="5"
              required
              whileFocus={{ scale: 1.05 }}
            ></motion.textarea>
            <motion.button type="submit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <FaPaperPlane />
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Ravi Rajput. All rights reserved.</p>
      </footer>
    </div>
  );
}
