// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import "./Sidebar.css";

// const Sidebar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     alert("Logged out successfully 👋");
//     navigate("/");
//   };

//   return (
//     <div className="sidebar">
//       <h2 className="sidebar-title">AI Resume</h2>

//       <nav className="sidebar-menu">
//         <NavLink
//           to="/dashboard"
//           className={({ isActive }) =>
//             isActive ? "sidebar-link active" : "sidebar-link"
//           }
//         >
//           Dashboard
//         </NavLink>

//         <NavLink
//           to="/resume-builder"
//           className={({ isActive }) =>
//             isActive ? "sidebar-link active" : "sidebar-link"
//           }
//         >
//           Resume Builder
//         </NavLink>

//         <NavLink
//           to="/skill-analyzer"
//           className={({ isActive }) =>
//             isActive ? "sidebar-link active" : "sidebar-link"
//           }
//         >
//           Skill Analyzer
//         </NavLink>

//         <NavLink
//           to="/profile"
//           className={({ isActive }) =>
//             isActive ? "sidebar-link active" : "sidebar-link"
//           }
//         >
//           Profile
//         </NavLink>
//       </nav>

//       <button className="logout-btn" onClick={handleLogout}>
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import "./Sidebar.css";

// const Sidebar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <button className="menu-btn" onClick={() => setOpen(!open)}>
//         ☰
//       </button>

//       <aside className={`sidebar ${open ? "open" : ""}`}>
//         <h2 className="logo">AI Resume</h2>
//         <ul>
//           <li>Dashboard</li>
//           <li>Resume Builder</li>
//           <li>Skill Analyzer</li>
//           <li>Profile</li>
//         </ul>
//         <button className="logout">Logout</button>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import "./Sidebar.css";

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <button className="menu-btn" onClick={() => setOpen(!open)}>☰</button>

//       <aside className={`sidebar ${open ? "open" : ""}`}>
//         <h2>AI Resume</h2>
//         <ul>
//           <li>Dashboard</li>
//           <li>Resume Builder</li>
//           <li>My Resumes</li>
//         </ul>
//       </aside>
//     </>
//   );
// }

// src/components/Sidebar.jsx
// import { Link } from "react-router-dom";
// import "./sidebar.css";

// export default function Sidebar() {
//   return (
//     <div className="sidebar">
//       <h2 className="logo">AI Resume</h2>

//       <nav>
//         <Link to="/dashboard">Dashboard</Link>
//         <Link to="/resume-builder">Resume Builder</Link>
//         <Link to="/skill-analyzer">Skill Analyzer</Link>
//       </nav>
//     </div>
//   );
// }


import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>AI Resume</h2>

      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/resume-builder">Resume Builder</NavLink>
      <NavLink to="/skill-analyzer">Skill Analyzer</NavLink>
      <NavLink to="/my-resumes">My Resumes</NavLink>

      <button className="logout">Logout</button>
    </div>
  );
}
