import React from 'react';
import { Github, Facebook, Mail, ExternalLink, Code2, User, Cpu, MessageSquare, ChevronRight, Send } from 'lucide-react';
import { motion } from 'framer-motion';

// CÁCH 1: Import hình ảnh từ thư mục assets
import myAvatar from './assets/profile.jpg'; 
import './App.css';

const PROJECTS = [
  { 
    id: 1, 
    title: "Smart Bus Tracking", 
    tech: ["React", "Node.js", "MongoDB"], 
    icon: "🚌", 
    desc: "Hệ thống theo dõi xe buýt thông minh thời gian thực. Giúp người dùng theo dõi lộ trình và thời gian xe đến trạm chính xác thông qua bản đồ trực tuyến.",
    github: "https://github.com/youngentti05/SmartBusTracking.git" 
  },
  { 
    id: 2, 
    title: "Personal Portfolio", 
    tech: ["React", "Vite", "Framer Motion"], 
    icon: "💻", 
    desc: "Trang web giới thiệu năng lực cá nhân với giao diện Glassmorphism hiện đại, tối ưu hóa trải nghiệm người dùng trên đa thiết bị.",
    github: "https://github.com/youngentti05/my-portfolio.git" 
  }
];

const SKILLS = [
  { category: "Ngôn ngữ", items: ["JavaScript", "Java", "Python", "HTML/CSS"] },
  { category: "Framework/Library", items: ["React.js", "Node.js", "Express", "Vite"] },
  { category: "Database & Tool", items: ["MongoDB", "MySQL", "Git", "GitHub", "UML Diagram"] }
];

function App() {
  // Hàm xử lý cuộn trang mượt mà
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app">
      <div className="bg-glow"></div>

      {/* THANH ĐIỀU HƯỚNG (NAVBAR SHORTCUT) */}
      <nav className="navbar-shortcut">
        <div className="nav-container">
          <span className="nav-logo" onClick={() => scrollTo('about')}>NTT</span>
          <div className="nav-links">
            <button onClick={() => scrollTo('about')}><User size={16}/> Giới thiệu</button>
            <button onClick={() => scrollTo('skills')}><Cpu size={16}/> Kỹ năng</button>
            <button onClick={() => scrollTo('projects')}><Code2 size={16}/> Dự án</button>
            <button onClick={() => scrollTo('contact')}><MessageSquare size={16}/> Liên hệ</button>
          </div>
        </div>
      </nav>

      <div className="content-wrapper">
        {/* MẢNG 1: GIỚI THIỆU BẢN THÂN */}
        <section id="about" className="section-block">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card about-card"
          >
            <div className="about-grid">
              <div className="about-image">
                {/* Sử dụng biến myAvatar đã import ở trên */}
                <img src={myAvatar} alt="Nguyễn Trung Trực" />
              </div>
              <div className="about-info">
                <span className="badge-text">Software Developer Trainee</span>
                <h1 className="main-name">Nguyễn Trung Trực</h1>
                <p className="description">
                  Tôi là sinh viên năm ba chuyên ngành <strong>Công nghệ Thông tin</strong>. 
                  Với nền tảng tư duy lập trình vững chắc và sự yêu thích dành cho việc giải quyết vấn đề, 
                  tôi tập trung nghiên cứu phát triển các ứng dụng Web và hệ thống quản lý thông minh.
                  <br /><br />
                  Tôi luôn nỗ lực học hỏi các công nghệ mới để tối ưu hóa quy trình phát triển phần mềm, 
                  từ việc thiết kế giao diện (Front-end) đến xây dựng hệ thống xử lý dữ liệu (Back-end).
                </p>
                <div className="social-row">
                  <a href="https://github.com/youngentti05" target="_blank" rel="noreferrer" className="social-icon"><Github /></a>
                  <a href="#" className="social-icon"><Facebook /></a>
                  <a href="mailto:nguyentrungtruc3012@gmail.com" className="social-icon"><Mail /></a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* MẢNG 2: KỸ NĂNG (SKILLS) */}
        <section id="skills" className="section-block">
          <h2 className="block-title">Năng lực chuyên môn</h2>
          <div className="skills-grid">
            {SKILLS.map((skillGroup, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card skill-card"
              >
                <h3>{skillGroup.category}</h3>
                <div className="skill-tags">
                  {skillGroup.items.map(s => <span key={s} className="tag">{s}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MẢNG 3: DỰ ÁN (PROJECTS) */}
        <section id="projects" className="section-block">
          <h2 className="block-title">Dự án tiêu biểu</h2>
          <div className="project-column">
            {PROJECTS.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card project-wide"
              >
                <div className="p-icon">{p.icon}</div>
                <div className="p-content">
                  <div className="p-header">
                    <h3>{p.title}</h3>
                    <a href={p.github} target="_blank" rel="noreferrer" className="git-link">
                      GitHub Repo <ChevronRight size={18}/>
                    </a>
                  </div>
                  <p className="p-desc">{p.desc}</p>
                  <div className="p-tech">
                    {p.tech.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MẢNG 4: LIÊN HỆ (CONTACT) */}
        <section id="contact" className="section-block">
          <h2 className="block-title">Thông tin liên hệ</h2>
          <div className="glass-card contact-box">
             <p>Nếu bạn có bất kỳ câu hỏi nào hoặc muốn hợp tác cùng tôi, hãy để lại lời nhắn bên dưới!</p>
             <form className="contact-form">
                <div className="input-row">
                  <input type="text" placeholder="Họ và tên" />
                  <input type="email" placeholder="Địa chỉ Email" />
                </div>
                <textarea placeholder="Nội dung tin nhắn của bạn..."></textarea>
                <button type="button" className="btn-send">
                  Gửi yêu cầu ngay <Send size={18} />
                </button>
             </form>
          </div>
        </section>
      </div>
      
      <footer className="footer">
        <p>© 2026 Nguyễn Trung Trực. Được xây dựng bằng React & Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;