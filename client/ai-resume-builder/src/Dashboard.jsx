// import React from "react";
// import "./Dashboard.css";
// import { useNavigate, useLocation } from "react-router-dom";
// import { supabase } from "./supabase"; // path check kar lena

// function Dashboard() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Logout handler
//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     navigate("/login");
//   };

//   // Active menu check
//   const isActive = (path) => location.pathname === path;

//   return (
//     <div className="dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2 className="logo">AI Resume</h2>

//         <ul>
//           <li
//             className={isActive("/dashboard") ? "active" : ""}
//             onClick={() => navigate("/dashboard")}
//           >
//             Dashboard
//           </li>

//           <li
//             className={isActive("/resume-builder") ? "active" : ""}
//             onClick={() => navigate("/resume-builder")}
//           >
//             Resume Builder
//           </li>

//           <li
//             className={isActive("/skill-analyzer") ? "active" : ""}
//             onClick={() => navigate("/skill-analyzer")}
//           >
//             Skill Analyzer
//           </li>

//           <li
//             className={isActive("/my-resumes") ? "active" : ""}
//             onClick={() => navigate("/my-resumes")}
//           >
//             My Resumes
//           </li>

//           <li
//             className={isActive("/profile") ? "active" : ""}
//             onClick={() => navigate("/profile")}
//           >
//             Profile
//           </li>

//           <li className="logout" onClick={handleLogout}>
//             Logout
//           </li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="main">
//         <header className="topbar">
//           <h1>Welcome 👋</h1>
//           <p>Build smarter resumes & analyze your skills</p>
//         </header>

//         <div className="cards">
//           <div className="card">
//             <h3>AI Resume Builder</h3>
//             <p>
//               Create professional resumes using AI suggestions and templates.
//             </p>
//             <button onClick={() => navigate("/resume-builder")}>
//               Create Resume
//             </button>
//           </div>

//           <div className="card">
//             <h3>Skill Analyzer</h3>
//             <p>
//               Analyze your skills and get recommendations to improve.
//             </p>
//             <button onClick={() => navigate("/skill-analyzer")}>
//               Analyze Skills
//             </button>
//           </div>

//           <div className="card">
//             <h3>My Resumes</h3>
//             <p>
//               View, edit and download your previously created resumes.
//             </p>
//             <button onClick={() => navigate("/my-resumes")}>
//               View Resumes
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Dashboard;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Dashboard.css"; // jo pehle CSS tha wahi rehne do

// const Dashboard = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="dashboard-container">
//       {/* LEFT SIDEBAR */}
//       <div className="sidebar">
//         <h2 className="logo">AI Resume</h2>

//         <ul className="menu">
//           <li className="active" onClick={() => navigate("/dashboard")}>
//             Dashboard
//           </li>
//           <li onClick={() => navigate("/resume-builder")}>
//             Resume Builder
//           </li>
//           <li onClick={() => navigate("/skill-analyzer")}>
//             Skill Analyzer
//           </li>
//           <li onClick={() => navigate("/profile")}>
//             Profile
//           </li>
//         </ul>

//         <button className="logout-btn">Logout</button>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="main-content">
//         {/* WELCOME */}
//         <div className="welcome-card">
//           <h2>Welcome 👋</h2>
//           <p>Build smarter resumes & analyze your skills</p>
//         </div>

//         {/* DASHBOARD CARDS */}
//         <div className="card-container">
//           {/* Resume Builder */}
//           <div className="card">
//             <h3>AI Resume Builder</h3>
//             <p>
//               Create professional resumes using AI suggestions and templates.
//             </p>
//             <button
//               className="primary-btn"
//               onClick={() => navigate("/resume-builder")}
//             >
//               Create Resume
//             </button>
//           </div>

//           {/* Skill Analyzer */}
//           <div className="card">
//             <h3>Skill Analyzer</h3>
//             <p>
//               Analyze your skills and get recommendations to improve.
//             </p>
//             <button
//               className="primary-btn"
//               onClick={() => navigate("/skill-analyzer")}
//             >
//               Analyze Skills
//             </button>
//           </div>

//           {/* My Resumes */}
//           <div className="card">
//             <h3>My Resumes</h3>
//             <p>
//               View, edit and download your previously created resumes.
//             </p>
//             <button
//               className="primary-btn"
//               onClick={() => navigate("/resume-history")}
//             >
//               View Resumes
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "./Dashboard.css";

// export default function Dashboard() {
//   const [resumes, setResumes] = useState([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("resumes")) || [];
//     setResumes(saved);
//   }, []);

//   return (
//     <div className="dashboard">
//       <div className="dashboard-header">
//         <h2>📂 Saved Resumes</h2>

//         <Link to="/resume-builder">
//           <button className="create-btn">➕ Create Resume</button>
//         </Link>
//       </div>

//       {resumes.length === 0 && (
//         <p className="no-resume">No resumes saved yet.</p>
//       )}

//       {resumes.map((r, i) => (
//         <div className="resume-card" key={i}>
//           <h3>{r.name}</h3>
//           <p>{r.email}</p>
//           <p>
//             <b>Skills:</b> {r.skills}
//           </p>
//           <p>
//             <b>Experience:</b> {r.experience}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [resumes, setResumes] = useState([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("resumes")) || [];
//     setResumes(saved);
//   }, []);

//   return (
//     <div className="dashboard-layout">
//       <Sidebar />

//       <div className="dashboard-content">
//         {/* Welcome Section */}
//         <div className="welcome-card">
//           <h2>Welcome 👋</h2>
//           <p>Build smarter resumes & analyze your skills</p>
//         </div>

//         {/* Top Cards */}
//         <div className="dashboard-cards">
//           <div className="dash-card">
//             <h3>AI Resume Builder</h3>
//             <p>Create professional resumes using AI suggestions.</p>
//             <button onClick={() => navigate("/resume-builder")}>
//               Create Resume
//             </button>
//           </div>

//           <div className="dash-card">
//             <h3>Skill Analyzer</h3>
//             <p>Analyze your skills and get recommendations.</p>
//             <button onClick={() => alert("Coming Soon 🚀")}>
//               Analyze Skills
//             </button>
//           </div>

//           <div className="dash-card">
//             <h3>My Resumes</h3>
//             <p>View, edit & download your saved resumes.</p>
//             <button onClick={() => document.getElementById("saved")?.scrollIntoView()}>
//               View Resumes
//             </button>
//           </div>
//         </div>

//         {/* Saved Resumes Section */}
//         <div className="saved-resumes" id="saved">
//           <h2>📁 Saved Resumes</h2>

//           {resumes.length === 0 ? (
//             <p className="empty-text">No resumes saved yet.</p>
//           ) : (
//             <div className="resume-list">
//               {resumes.map((resume, index) => (
//                 <div className="resume-item" key={index}>
//                   <div>
//                     <h4>{resume.name}</h4>
//                     <p>{resume.email}</p>
//                   </div>

//                   <div className="resume-actions">
//                     <button
//                       onClick={() =>
//                         navigate("/resume-builder", {
//                           state: { resume, index },
//                         })
//                       }
//                     >
//                       Edit
//                     </button>

//                     <button
//                       onClick={() =>
//                         alert("PDF download handled in Resume Builder")
//                       }
//                     >
//                       Download
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React from "react";
// import Sidebar from "./components/Sidebar";
// import "./Dashboard.css";

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <Sidebar />

//       <main className="dashboard-content">
//         <h2 className="welcome">Welcome 👋</h2>
//         <p className="subtitle">Build smarter resumes & analyze your skills</p>

//         <div className="card-grid">
//           <div className="card">
//             <h3>AI Resume Builder</h3>
//             <p>Create professional resumes using AI suggestions.</p>
//             <button>Create Resume</button>
//           </div>

//           <div className="card">
//             <h3>Skill Analyzer</h3>
//             <p>Analyze skills and get improvement tips.</p>
//             <button>Analyze Skills</button>
//           </div>

//           <div className="card">
//             <h3>My Resumes</h3>
//             <p>View, edit & download saved resumes.</p>
//             <button>View Resumes</button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

// src/components/Dashboard.jsx
// import Sidebar from "./components/Sidebar";
// import "./Dashboard.css";

// export default function Dashboard() {
//   return (
//     <div className="dashboard">
//       <Sidebar />
//       <div className="dashboard-content">
//         <h2>Welcome 👋</h2>

//         <div className="cards">
//           <div className="card">Create Resume</div>
//           <div className="card">Skill Analyzer</div>
//           <div className="card">My Resumes</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Sidebar from "./components/Sidebar";
// import "./dashboard.css";

// export default function Dashboard() {
//   return (
//     <div className="layout">
//       <Sidebar />

//       <div className="content">
//         <div className="welcome-box">
//           <h1>Welcome 👋</h1>
//           <p>Build smarter resumes & analyze your skills</p>
//         </div>

//         <div className="card-grid">
//           <div className="card">
//             <h3>AI Resume Builder</h3>
//             <p>Create professional resumes using templates.</p>
//             <button>Create Resume</button>
//           </div>

//           <div className="card">
//             <h3>Skill Analyzer</h3>
//             <p>Analyze skills and get improvement tips.</p>
//             <button>Analyze Skills</button>
//           </div>

//           <div className="card">
//             <h3>My Resumes</h3>
//             <p>View & manage saved resumes.</p>
//             <button>View Resumes</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Sidebar from "./components/Sidebar";
// import "./Dashboard.css";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const navigate = useNavigate();

//   return (
//     <div className="layout">
//       <Sidebar />

//       <div className="content">
//         <div className="welcome-box">
//           <h1>Welcome 👋</h1>
//           <p>Build smarter resumes & analyze your skills</p>
//         </div>

//         <div className="card-grid">
//           <div className="card">
//             <h3>AI Resume Builder</h3>
//             <p>Create professional resumes using templates.</p>
//             <button onClick={() => navigate("/resume-builder")}>
//               Create Resume
//             </button>
//           </div>

//           <div className="card">
//             <h3>Skill Analyzer</h3>
//             <p>Analyze skills and get improvement tips.</p>
//             <button onClick={() => navigate("/skill-analyzer")}>
//               Analyze Skills
//             </button>
//           </div>

//           <div className="card">
//             <h3>My Resumes</h3>
//             <p>View & manage saved resumes.</p>
//             <button onClick={() => navigate("/my-resumes")}>
//               View Resumes
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React from "react";
// import "./Dashboard.css";
// import { useNavigate, useLocation } from "react-router-dom";
// import { supabase } from "./supabase"; // path check kar lena

// function Dashboard() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Logout handler
//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     navigate("/login");
//   };

//   // Active menu check
//   const isActive = (path) => location.pathname === path;

//   return (
//     <div className="dashboard">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <h2 className="logo">AI Resume</h2>

//         <ul>
//           <li
//             className={isActive("/dashboard") ? "active" : ""}
//             onClick={() => navigate("/dashboard")}
//           >
//             Dashboard
//           </li>

//           <li
//             className={isActive("/resume-builder") ? "active" : ""}
//             onClick={() => navigate("/resume-builder")}
//           >
//             Resume Builder
//           </li>

//           <li
//             className={isActive("/skill-analyzer") ? "active" : ""}
//             onClick={() => navigate("/skill-analyzer")}
//           >
//             Skill Analyzer
//           </li>

//           <li
//             className={isActive("/my-resumes") ? "active" : ""}
//             onClick={() => navigate("/my-resumes")}
//           >
//             My Resumes
//           </li>

//           <li
//             className={isActive("/profile") ? "active" : ""}
//             onClick={() => navigate("/profile")}
//           >
//             Profile
//           </li>

//           <li className="logout" onClick={handleLogout}>
//             Logout
//           </li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="main">
//         <header className="topbar">
//           <h1>Welcome 👋</h1>
//           <p>Build smarter resumes & analyze your skills</p>
//         </header>

//         <div className="cards">
//           <div className="card">
//             <h3>AI Resume Builder</h3>
//             <p>
//               Create professional resumes using AI suggestions and templates.
//             </p>
//             <button onClick={() => navigate("/resume-builder")}>
//               Create Resume
//             </button>
//           </div>

//           <div className="card">
//             <h3>Skill Analyzer</h3>
//             <p>
//               Analyze your skills and get recommendations to improve.
//             </p>
//             <button onClick={() => navigate("/skill-analyzer")}>
//               Analyze Skills
//             </button>
//           </div>

//           <div className="card">
//             <h3>My Resumes</h3>
//             <p>
//               View, edit and download your previously created resumes.
//             </p>
//             <button onClick={() => navigate("/my-resumes")}>
//               View Resumes
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Dashboard;


import React from "react";
import "./Dashboard.css";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "./supabase"; // path sahi ho to ok

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔹 Logout handler
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  // 🔹 Active menu check
  const isActive = (path) => location.pathname === path;

  return (
    <div className="dashboard">
      {/* ================= Sidebar ================= */}
      <aside className="sidebar">
        <h2 className="logo">AI Resume</h2>

        <ul>
          <li
            className={isActive("/dashboard") ? "active" : ""}
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </li>

          <li
            className={isActive("/resume-builder") ? "active" : ""}
            onClick={() => navigate("/resume-builder")}
          >
            Resume Builder
          </li>

          <li
            className={isActive("/skill-analyzer") ? "active" : ""}
            onClick={() => navigate("/skill-analyzer")}
          >
            Skill Analyzer
          </li>

          <li
            className={isActive("/my-resumes") ? "active" : ""}
            onClick={() => navigate("/my-resumes")}
          >
            My Resumes
          </li>

          <li
            className={isActive("/profile") ? "active" : ""}
            onClick={() => navigate("/profile")}
          >
            Profile
          </li>

          <li className="logout" onClick={handleLogout}>
            Logout
          </li>
        </ul>
      </aside>

      {/* ================= Main Content ================= */}
      <main className="main">
        <header className="topbar">
          <h1>Welcome 👋</h1>
          <p>Build smarter resumes & analyze your skills</p>
        </header>

        <div className="cards">
          {/* Resume Builder Card */}
          <div className="card">
            <h3>AI Resume Builder</h3>
            <p>
              Create professional resumes using AI suggestions and templates.
            </p>
            <button
              type="button"
              onClick={() => navigate("/resume-builder")}
            >
              Create Resume
            </button>
          </div>

          {/* Skill Analyzer Card */}
          <div className="card">
            <h3>Skill Analyzer</h3>
            <p>
              Analyze your skills and get recommendations to improve.
            </p>
            <button
              type="button"
              onClick={() => navigate("/skill-analyzer")}
            >
              Analyze Skills
            </button>
          </div>

          {/* My Resumes Card */}
          <div className="card">
            <h3>My Resumes</h3>
            <p>
              View, edit and download your previously created resumes.
            </p>
            <button
              type="button"
              onClick={() => navigate("/my-resumes")}
            >
              View Resumes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
