// import React, { useEffect, useState } from "react";
// import { supabase } from "./supabase";
// import "./ResumeHistory.css";

// const ResumeHistory = () => {
//   const [resumes, setResumes] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchResumes();
//   }, []);

//   const fetchResumes = async () => {
//     const { data, error } = await supabase
//       .from("resumes")
//       .select("*")
//       .order("created_at", { ascending: false });

//     if (error) {
//       console.error(error);
//       alert("Error fetching resume history");
//     } else {
//       setResumes(data);
//     }
//     setLoading(false);
//   };

//   if (loading) return <p className="loading">Loading resumes...</p>;

//   return (
//     <div className="history-container">
//       <h2>📄 Resume History</h2>

//       {resumes.length === 0 ? (
//         <p>No resumes saved yet.</p>
//       ) : (
//         resumes.map((resume) => (
//           <div className="resume-card" key={resume.id}>
//             <h3>{resume.name}</h3>
//             <p><strong>Email:</strong> {resume.email}</p>
//             <p><strong>Phone:</strong> {resume.phone}</p>

//             <button
//   onClick={() =>
//     navigate("/resume-builder", { state: { resume } })
//   }
// >
//   Edit
// </button>



//             <div>
//               <strong>Skills:</strong>
//               <div className="skill-tags">
//                 {resume.skills?.map((skill, index) => (
//                   <span key={index} className="tag">{skill}</span>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <strong>Experience:</strong>
//               <ul>
//                 {resume.experience?.map((exp, index) => (
//                   <li key={index}>{exp}</li>
//                 ))}
//               </ul>
//             </div>

//             <p><strong>Education:</strong> {resume.education}</p>

//             <p className="date">
//               Saved on: {new Date(resume.created_at).toLocaleString()}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default ResumeHistory;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient"; // Make sure this points to your supabase.js

export default function ResumeHistory() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Resume History</h2>
      <p>All saved resumes appear on Dashboard</p>
    </div>
  );
}


// const ResumeHistory = () => {
//   const [resumes, setResumes] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchResumes();
//   }, []);

//   const fetchResumes = async () => {
//     const { data, error } = await supabase.from("resumes").select("*");
//     if (!error) setResumes(data);
//   };

//   return (
//     <div>
//       <h2>My Resumes</h2>
//       {resumes.map((resume) => (
//         <div key={resume.id} className="resume-card">
//           <h3>{resume.name}</h3>
//           <p><strong>Email:</strong> {resume.email}</p>
//           <p><strong>Phone:</strong> {resume.phone}</p>
//           <button
//             onClick={() => navigate("/resume-builder", { state: { resume } })}
//           >
//             ✏️ Edit Resume
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ResumeHistory;
