import React from 'react';
import { Github, Facebook, Mail } from 'lucide-react';
import './App.css';

function App() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      tech: ["React", "Node.js", "MongoDB"],
      year: "2024",
      icon: "🛒"
    },
    {
      id: 2,
      title: "Task Management App",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      year: "2024",
      icon: "📋"
    },
    {
      id: 3,
      title: "AI Chat Application",
      tech: ["Python", "FastAPI", "React"],
      year: "2023",
      icon: "🤖"
    }
  ];

  const skills = ["React", "Node.js", "JavaScript", "Python", "MongoDB", "MySQL", "Git", "Docker"];

  // Đưa social vào mảng để code gọn hơn
  const socials = [
    { name: "GitHub", icon: <Github size={18} />, link: "https://github.com/youngentti05" },
    { name: "Facebook", icon: <Facebook size={18} />, link: "https://facebook.com/your-profile" },
    { name: "Email", icon: <Mail size={18} />, link: "mailto:your-nguyentrungtruc3012@gmail.com" }
  ];

  return (
    <div className="portfolio-container">
      {/* SIDEBAR BÊN TRÁI */}
      <aside className="sidebar">
        <div className="profile-section">
          <div className="avatar-wrapper">
            {/* Thay link ảnh thật của bạn vào đây */}
            <img src="https://via.placeholder.com/150" alt="Avatar" className="avatar" />
          </div>
          <h1 className="name">Nguyễn Trung Trực</h1>
          <p className="job-title">FULL STACK DEVELOPER</p>
        </div>

        <nav className="social-links">
          {socials.map((social, index) => (
            <a 
              key={index} 
              href={social.link} 
              target="_blank" 
              rel="noreferrer" 
              className="social-btn"
            >
              {social.icon}
              <span>{social.name}</span>
            </a>
          ))}
        </nav>

        <div className="intro-text">
          <p>Xin chào! Tôi là sinh viên năm ba ngành Công nghệ Thông tin. Đây là bài tập cá nhân của tôi.</p>
        </div>

        <div className="skills-tags">
          {skills.map(skill => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </aside>

      {/* NỘI DUNG CHÍNH BÊN PHẢI */}
      <main className="main-content">
        <div className="section-header">
          <span className="section-title">DỰ ÁN ĐÃ THỰC HIỆN</span>
          <div className="header-line"></div>
        </div>

        <div className="project-list">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.icon}</div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="project-tech">
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
              <div className="project-meta">
                <span className="year">{project.year}</span>
                <span className="arrow">›</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;