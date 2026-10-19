import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'


import './App.css'

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Capital<span>cove</span>
        </a>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tagline">
            CREATIVE DIGITAL AGENCY
          </p>

          <h1>
            We Build Digital
            <span> Experiences</span>
            That Matter.
          </h1>

          <p className="hero-description">
            We help businesses grow with modern websites,
            creative designs and smart digital solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore Projects
            </a>

            <a href="#services" className="secondary-button">
              Our Services
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>50+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>

            <div>
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85"
            alt="Modern technology workspace"
          />

          <div className="image-card">
            <span className="status-dot"></span>
            <div>
              <h4>Creative Solutions</h4>
              <p>Ideas into reality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section" id="services">
        <div className="section-heading">
          <p className="tagline">WHAT WE DO</p>
          <h2>Our Creative Services</h2>
          <p>
            Everything you need to build your digital presence.
          </p>
        </div>

        <div className="service-cards">
          <div className="service-card">
            <div className="service-icon">&lt;/&gt;</div>
            <h3>Web Development</h3>
            <p>
              We build responsive and user-friendly websites
              for your business and brand.
            </p>
            <a href="#contact">Learn More →</a>
          </div>

          <div className="service-card">
            <div className="service-icon">✦</div>
            <h3>UI/UX Design</h3>
            <p>
              Beautiful and simple designs that make every
              user experience better.
            </p>
            <a href="#contact">Learn More →</a>
          </div>

          <div className="service-card">
            <div className="service-icon">↗</div>
            <h3>Digital Solutions</h3>
            <p>
              Smart digital strategies to help your business
              reach more people online.
            </p>
            <a href="#contact">Learn More →</a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects section" id="projects">
        <div className="section-heading">
          <p className="tagline">OUR PORTFOLIO</p>
          <h2>Featured Projects</h2>
          <p>
            A look at some of the ideas we bring to life.
          </p>
        </div>

        <div className="project-cards">
          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85"
              alt="Website analytics dashboard"
            />
            <div className="project-info">
              <p>Web Development</p>
              <h3>Business Dashboard</h3>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=85"
              alt="Creative graphic design workspace"
            />
            <div className="project-info">
              <p>UI/UX Design</p>
              <h3>Creative Brand Design</h3>
            </div>
          </div>

          <div className="project-card">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=85"
              alt="Technology team working together"
            />
            <div className="project-info">
              <p>Digital Solutions</p>
              <h3>Team Collaboration</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <p className="tagline">HAVE A PROJECT IN MIND?</p>

        <h2>Let's Build Something Amazing Together.</h2>

        <p>
          Have an idea? Let's turn it into a digital experience.
        </p>

        <a
          href="mailto:hello@technova.example"
          className="primary-button"
        >
          Contact Us →
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="logo">
          Tech<span>Nova</span>
        </a>

        <p>
          Building digital experiences for a better tomorrow.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          © 2026 TechNova. Created with React.
        </p>
      </footer>
    </div>
  )
}

export default App
