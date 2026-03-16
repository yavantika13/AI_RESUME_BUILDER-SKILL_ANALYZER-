// import React from "react";
// import "./MyResumes.css";
// import { useNavigate } from "react-router-dom";

// function MyResumes() {
//   const navigate = useNavigate();

//   return (
//     <div className="my-resumes">
//       <div className="header">
//         <h2>📄 My Resumes</h2>
//         <button onClick={() => navigate("/dashboard")}>
//           ← Back to Dashboard
//         </button>
//       </div>

//       <div className="resume-list">
//         {/* Dummy Resume Card */}
//         <div className="resume-card">
//           <h3>Software Developer Resume</h3>
//           <p>Last updated: Dec 2025</p>

//           <div className="actions">
//             <button className="view">View</button>
//             <button className="download">Download</button>
//             <button className="edit">Edit</button>
//           </div>
//         </div>

//         {/* Empty State */}
//         <div className="empty">
//           <p>No more resumes found.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MyResumes;


// import React from "react";
// import "./MyResumes.css";
// import { useNavigate } from "react-router-dom";

// function MyResumes() {
//   const navigate = useNavigate();

//   // Dummy resume data (frontend only)
//   const resumes = [
//     {
//       id: 1,
//       title: "Frontend Developer Resume",
//       date: "12 Dec 2025",
//     },
//     {
//       id: 2,
//       title: "Software Engineer Resume",
//       date: "14 Dec 2025",
//     },
//   ];

//   return (
//     <div className="myresumes">
//       <h2>My Resumes</h2>

//       {resumes.length === 0 ? (
//         <p className="empty">No resumes created yet.</p>
//       ) : (
//         <div className="resume-list">
//           {resumes.map((resume) => (
//             <div className="resume-card" key={resume.id}>
//               <h3>{resume.title}</h3>
//               <p>Created on: {resume.date}</p>

//               <div className="actions">
//                 <button
//                   className="btn-edit"
//                   onClick={() =>
//                     navigate("/resume-builder", {
//                       state: { resumeId: resume.id },
//                     })
//                   }
//                 >
//                   Edit
//                 </button>

//                 <button
//                   className="btn-download"
//                   onClick={() => window.print()}
//                 >
//                   Download PDF
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default MyResumes;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./MyResumes.css";

// function MyResumes() {
//   const [resumes, setResumes] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("resumes")) || [];
//     setResumes(stored);
//   }, []);

//   return (
//     <div className="myresumes">
//       <h2>My Resumes</h2>

//       {resumes.length === 0 ? (
//         <p>No resumes saved yet</p>
//       ) : (
//         resumes.map((r) => (
//           <div key={r.id} className="resume-card">
//             <h3>{r.name}</h3>
//             <p>{r.role}</p>
//             <p>{r.createdAt}</p>

//             <button
//               onClick={() =>
//                 navigate("/resume-builder", {
//                   state: { resumeData: r },
//                 })
//               }
//             >
//               Edit
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default MyResumes;



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyResumes.css";

function MyResumes() {
  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();

  // Load resumes from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("resumes")) || [];
    setResumes(stored);
  }, []);

  // Delete resume
  const handleDelete = (id) => {
    const updatedResumes = resumes.filter((r) => r.id !== id);
    localStorage.setItem("resumes", JSON.stringify(updatedResumes));
    setResumes(updatedResumes);
  };

  return (
    <div className="myresumes">
      <h2>My Resumes</h2>

      {resumes.length === 0 ? (
        <p className="empty-text">No resumes saved yet</p>
      ) : (
        <div className="resume-list">
          {resumes.map((r) => (
            <div key={r.id} className="resume-card">
              <h3>{r.name}</h3>

              <p>
                <strong>Email:</strong> {r.email}
              </p>
              <p>
                <strong>Phone:</strong> {r.phone}
              </p>

              <p>
                <strong>Created:</strong> {r.date}
              </p>

              {/* Skills */}
              {Array.isArray(r.skills) && r.skills.length > 0 && (
                <div className="skills">
                  {r.skills.map((skill, index) => (
                    <span key={index} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Action buttons */}
              <div className="resume-actions">
                <button
                  className="btn-edit"
                  onClick={() =>
                    navigate("/resume-builder", {
                      state: { resumeData: r },
                    })
                  }
                >
                  Edit
                </button>

                <button
                  className="btn-delete"
                  onClick={() => handleDelete(r.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyResumes;
