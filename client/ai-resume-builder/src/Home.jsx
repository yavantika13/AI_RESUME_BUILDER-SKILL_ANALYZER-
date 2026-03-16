// import "./Home.css";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="home-container">

//       {/* Navbar */}
//       <nav className="navbar">
//         <h1 className="logo">
//           resume<span className="dot">.</span>
//         </h1>

//         <ul className="nav-links">
//           <li><a href="#features">Features</a></li>
//           <li><a href="#testimonials">Testimonials</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>

//         <div className="nav-buttons">
//           <Link to="/login" className="btn-outline">Login</Link>
//           <Link to="/signup" className="btn-primary">Get started</Link>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero-section">
//         <p className="top-badge">✨ New — AI Skill Analyzer Added</p>

//         <h1 className="hero-title">
//           Land your dream job with <br />
//           <span className="highlight">AI-powered resumes</span>.
//         </h1>

//         <p className="hero-desc">
//           Create, edit and download professional resumes with <br />
//           intelligent AI-powered assistance & real-time skill analysis.
//         </p>

//         <div className="hero-buttons">
//           <Link to="/signup" className="btn-get-started">Get started</Link>
//           <a href="#demo" className="btn-demo">Try Demo</a>
//         </div>

//         {/* Brand Logos */}
//         <div className="trusted-by">
//           <p>Trusted by leading brands, including</p>
//           <div className="logos">
//             <span>Instagram</span>
//             <span>Microsoft</span>
//             <span>Meta</span>
//             <span>Huawei</span>
//             <span>Walmart</span>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
 
// // export default Home;


// import React from "react";
// import "./Home.css";
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div className="home-container">

//       {/* 🔹 NAVBAR */}
//       <nav className="navbar">
//         <h2 className="logo">YourLogo</h2>

//         <ul className="nav-links">
//           <li>Features</li>
//           <li>Pricing</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>

//         <div>
//           <Link to="/login" className="login-btn">Login</Link>
//         </div>
//       </nav>

//       {/* 🔹 HERO SECTION */}
//       <header className="hero-section">

//         {/* LEFT SIDE TEXT */}
//         <div className="hero-text">
//           <h1>
//             AI RESUME BUILDER <br /> + SKILL ANALYZER
//           </h1>

//           <p className="sub-text">
//             Create an impressive resume and analyze your skills with AI-driven insights.
//           </p>

//           <Link to="/signup" className="get-started-btn">
//             Get Started
//           </Link>
//         </div>

//         {/* RIGHT SIDE IMAGE */}
//         <div className="hero-image">
//           <img
//             src="https://i.postimg.cc/yxPNcP8x/ai-resume-illustration.png"
//             alt="AI Resume"
//           />
//         </div>

//       </header>

//       {/* 🔹 FEATURES SECTION */}
//       <section className="features-section">
//         <div className="feature-card">
//           <img
//             src="https://i.postimg.cc/25cYr2Ly/resume-icon.png"
//             alt="Resume Builder"
//             className="icon"
//           />
//           <h3>AI Resume Builder</h3>
//           <p>
//             Generate a professional resume in minutes using our AI-powered builder.
//           </p>
//         </div>

//         <div className="feature-card">
//           <img
//             src="https://i.postimg.cc/MTg9Pp59/skill-icon.png"
//             alt="Skill Analyzer"
//             className="icon"
//           />
//           <h3>Skill Analyzer</h3>
//           <p>
//             Analyze your skills and get personalized recommendations to grow professionally.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      
      {/* 🔵 NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">AI Resume<span className="dot">.</span></h2>

        <ul className="nav-menu">
          <li>Features</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="nav-buttons">
          <Link to="/signup" className="nav-btn get-started-nav">Get Started</Link>
          <Link to="/login" className="nav-btn login-nav">Login</Link>
        </div>
      </nav>

      {/* 🔵 HERO SECTION */}
      <section className="hero">

        <div className="hero-content">
          <h1>
            Build Smarter Resumes with <br />
            <span className="highlight">AI Assistance</span>
          </h1>

          <p className="sub-text">
            Generate professional resumes and analyze your skills using AI-powered insights.
          </p>

          <div className="hero-buttons">
            <Link className="hero-btn primary" to="/signup">
              Get Started →
            </Link>

            <button className="hero-btn outline">
              Explore Features
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-image">
          <img
            src="/re.jpeg"
            alt="AI Resume"
          />
        </div>

      </section>

      {/* 2 MAIN FEATURES SECTION */}
      <section className="features-section">

        <div className="feature-card">
          <img src="/demo.jpeg" alt="resume" />
          <h3>AI Resume Builder</h3>
          <p>
            Generate a clean, professional resume in minutes using our AI-powered builder.
          </p>
        </div>

        <div className="feature-card">
          <img src="/skills.jpeg" alt="skills" />
          <h3>Skill Analyzer</h3>
          <p>
            Analyze your skills and get personalized improvement suggestions using AI.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;

