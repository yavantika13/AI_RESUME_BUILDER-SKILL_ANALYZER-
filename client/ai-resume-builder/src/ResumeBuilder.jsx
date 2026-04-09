
// import React, { useEffect, useState } from "react";
// import "./ResumeBuilder.css";
// import { useNavigate, useLocation } from "react-router-dom";
// import TemplateOne from "./templates/TemplateOne";
// import TemplateTwo from "./templates/TemplateTwo";

// /* ================= MOCK AI DATA ================= */
// const aiExperienceMap = {
//   "Frontend Developer": [
//     "Developed responsive user interfaces using React and CSS",
//     "Implemented reusable components to improve development speed",
//     "Integrated REST APIs and managed application state",
//   ],
//   "Backend Developer": [
//     "Built RESTful APIs using Node.js and Express",
//     "Worked with MongoDB for database management",
//     "Implemented authentication and security features",
//   ],
//   "AI Engineer": [
//     "Built machine learning models using Python",
//     "Performed data preprocessing and feature engineering",
//     "Implemented deep learning algorithms for predictions",
//   ],
//   "Software Engineer": [
//     "Designed efficient algorithms and data structures",
//     "Collaborated using Git and Agile methodologies",
//     "Optimized application performance and fixed bugs",
//   ],
// };

// function ResumeBuilder() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [isEdit, setIsEdit] = useState(false);
//   const [resumeId, setResumeId] = useState(null);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     role: "",
//     experience: "",
//     skills: "",
//   });

//   /* ================= LOAD DATA (EDIT MODE) ================= */
//   useEffect(() => {
//     if (location.state?.resumeData) {
//       const r = location.state.resumeData;
//       setFormData({
//         name: r.name || "",
//         email: r.email || "",
//         phone: r.phone || "",
//         role: r.role || "",
//         experience: (r.experience || []).join("\n"),
//         skills: (r.skills || []).join(", "),
//       });
//       setIsEdit(true);
//       setResumeId(r.id);
//     }

//     const savedSkills = localStorage.getItem("resumeSkills");
//     const targetRole = localStorage.getItem("targetRole");

//     if (savedSkills) {
//       setFormData((p) => ({ ...p, skills: savedSkills }));
//     }
//     if (targetRole) {
//       setFormData((p) => ({ ...p, role: targetRole }));
//     }
//   }, [location.state]);

//   /* ================= HANDLER ================= */
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   /* ================= AI SUGGEST ================= */
//   const generateAISuggestion = () => {
//     if (!formData.role) {
//       alert("Please select a job role first");
//       return;
//     }

//     const suggestions = aiExperienceMap[formData.role];
//     if (!suggestions) {
//       alert("AI suggestions not available for this role");
//       return;
//     }

//     setFormData({
//       ...formData,
//       experience: suggestions.map((s) => `• ${s}`).join("\n"),
//     });
//   };

//   /* ================= SAVE ================= */
//   const saveResume = () => {
//     if (!formData.name || !formData.email || !formData.phone) {
//       alert("Name, Email & Phone are required");
//       return;
//     }

//     const stored = JSON.parse(localStorage.getItem("resumes")) || [];

//     const resumeData = {
//       id: isEdit ? resumeId : Date.now(),
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       role: formData.role,
//       experience: formData.experience
//         .replace(/•/g, "")
//         .split("\n")
//         .map((e) => e.trim())
//         .filter(Boolean),
//       skills: formData.skills
//         .split(",")
//         .map((s) => s.trim())
//         .filter(Boolean),
//       date: new Date().toLocaleDateString(),
//     };

//     const updated = isEdit
//       ? stored.map((r) => (r.id === resumeId ? resumeData : r))
//       : [...stored, resumeData];

//     localStorage.setItem("resumes", JSON.stringify(updated));
//     alert(isEdit ? "✅ Resume Updated" : "✅ Resume Saved");
//     navigate("/my-resumes");
//   };

//   return (
//     <div className="resume-builder">
//       {/* ===== FORM ===== */}
//       <div className="form-section no-print">
//         <h2>{isEdit ? "Edit Resume" : "Create Resume"}</h2>

//         <input
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <input
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <input
//           name="phone"
//           placeholder="Phone"
//           value={formData.phone}
//           onChange={handleChange}
//         />

//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//         >
//           <option value="">Select Job Role</option>
//           <option value="Frontend Developer">Frontend Developer</option>
//           <option value="Backend Developer">Backend Developer</option>
//           <option value="AI Engineer">AI Engineer</option>
//           <option value="Software Engineer">Software Engineer</option>
//         </select>

//         <textarea
//           name="experience"
//           placeholder="Experience (bullet points supported)"
//           value={formData.experience}
//           onChange={handleChange}
//         />

//         <button className="btn-ai" onClick={generateAISuggestion}>
//           🤖 AI Suggest Experience
//         </button>

//         <input
//           name="skills"
//           placeholder="Skills (comma separated)"
//           value={formData.skills}
//           onChange={handleChange}
//         />

//         <div className="button-group">
//           <button className="btn-primary" onClick={saveResume}>
//             {isEdit ? "Update Resume" : "Save Resume"}
//           </button>

//           <button
//             className="btn-secondary"
//             onClick={() => window.print()}
//           >
//             Download PDF
//           </button>
//         </div>
//       </div>

//       {/* ===== PREVIEW ===== */}
//       <div className="preview-section">
//         <h1>{formData.name}</h1>
//         <p>
//           {formData.email} {formData.phone && `| ${formData.phone}`}
//         </p>
//         <h3>{formData.role}</h3>

//         <h4>Experience</h4>
//         <ul>
//           {formData.experience
//             .replace(/•/g, "")
//             .split("\n")
//             .filter(Boolean)
//             .map((e, i) => (
//               <li key={i}>{e}</li>
//             ))}
//         </ul>

//         <h4>Skills</h4>
//         <div className="skills">
//           {formData.skills
//             .split(",")
//             .filter(Boolean)
//             .map((s, i) => (
//               <span key={i} className="skill-chip">
//                 {s.trim()}
//               </span>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResumeBuilder;




// import React, { useEffect, useState } from "react";
// import "./ResumeBuilder.css";
// import { useNavigate, useLocation } from "react-router-dom";

// /* ================= MOCK AI DATA ================= */
// const aiExperienceMap = {
//   "Frontend Developer": [
//     "Developed responsive user interfaces using React and CSS",
//     "Implemented reusable components to improve development speed",
//     "Integrated REST APIs and managed application state",
//   ],
//   "Backend Developer": [
//     "Built RESTful APIs using Node.js and Express",
//     "Worked with MongoDB for database management",
//     "Implemented authentication and security features",
//   ],
//   "AI Engineer": [
//     "Built machine learning models using Python",
//     "Performed data preprocessing and feature engineering",
//     "Implemented deep learning algorithms for predictions",
//   ],
//   "Software Engineer": [
//     "Designed efficient algorithms and data structures",
//     "Collaborated using Git and Agile methodologies",
//     "Optimized application performance and fixed bugs",
//   ],
// };

// function ResumeBuilder() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [isEdit, setIsEdit] = useState(false);
//   const [resumeId, setResumeId] = useState(null);
//   const [template, setTemplate] = useState("one");

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     role: "",
//     experience: "",
//     skills: "",
//   });

//   /* ================= LOAD DATA ================= */
//   useEffect(() => {
//     if (location.state?.resumeData) {
//       const r = location.state.resumeData;
//       setFormData({
//         name: r.name || "",
//         email: r.email || "",
//         phone: r.phone || "",
//         role: r.role || "",
//         experience: (r.experience || []).join("\n"),
//         skills: (r.skills || []).join(", "),
//       });
//       setIsEdit(true);
//       setResumeId(r.id);
//     }

//     const savedSkills = localStorage.getItem("resumeSkills");
//     const targetRole = localStorage.getItem("targetRole");

//     if (savedSkills) setFormData((p) => ({ ...p, skills: savedSkills }));
//     if (targetRole) setFormData((p) => ({ ...p, role: targetRole }));
//   }, [location.state]);

//   /* ================= HANDLERS ================= */
//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const generateAISuggestion = () => {
//     if (!formData.role) return alert("Select role first");
//     const suggestions = aiExperienceMap[formData.role];
//     if (!suggestions) return alert("No AI suggestions available");

//     setFormData({
//       ...formData,
//       experience: suggestions.map((s) => `• ${s}`).join("\n"),
//     });
//   };

//   const saveResume = () => {
//     if (!formData.name || !formData.email || !formData.phone)
//       return alert("Name, Email & Phone required");

//     const stored = JSON.parse(localStorage.getItem("resumes")) || [];

//     const resumeData = {
//       id: isEdit ? resumeId : Date.now(),
//       ...formData,
//       experience: formData.experience
//         .replace(/•/g, "")
//         .split("\n")
//         .filter(Boolean),
//       skills: formData.skills.split(",").map((s) => s.trim()),
//       template,
//       date: new Date().toLocaleDateString(),
//     };

//     const updated = isEdit
//       ? stored.map((r) => (r.id === resumeId ? resumeData : r))
//       : [...stored, resumeData];

//     localStorage.setItem("resumes", JSON.stringify(updated));
//     alert(isEdit ? "✅ Resume Updated" : "✅ Resume Saved");
//     navigate("/my-resumes");
//   };

//   /* ================= PREVIEW DATA ================= */
//   const experienceList = formData.experience
//     .replace(/•/g, "")
//     .split("\n")
//     .filter(Boolean);

//   const skillsList = formData.skills
//     .split(",")
//     .map((s) => s.trim())
//     .filter(Boolean);

//   return (
//     <div className="resume-builder">
//       {/* ================= FORM ================= */}
//       <div className="form-section no-print">
//         <h2>{isEdit ? "Edit Resume" : "Create Resume"}</h2>

//         <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
//         <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
//         <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />

//         <select name="role" value={formData.role} onChange={handleChange}>
//           <option value="">Select Role</option>
//           <option>Frontend Developer</option>
//           <option>Backend Developer</option>
//           <option>AI Engineer</option>
//           <option>Software Engineer</option>
//         </select>

//         <textarea
//           name="experience"
//           placeholder="Experience"
//           value={formData.experience}
//           onChange={handleChange}
//         />

//         <button className="btn-ai" onClick={generateAISuggestion}>
//           🤖 AI Suggest Experience
//         </button>

//         <input
//           name="skills"
//           placeholder="Skills (comma separated)"
//           value={formData.skills}
//           onChange={handleChange}
//         />

//         <select value={template} onChange={(e) => setTemplate(e.target.value)}>
//           <option value="one">Template One (ATS)</option>
//           <option value="two">Template Two (Modern)</option>
//         </select>

//         <div className="button-group">
//           <button className="btn-primary" onClick={saveResume}>
//             {isEdit ? "Update Resume" : "Save Resume"}
//           </button>
//           <button className="btn-secondary" onClick={() => window.print()}>
//             Download PDF
//           </button>
//         </div>
//       </div>

//       {/* ================= PREVIEW ================= */}
//       <div className={`preview-section template-${template}`}>
//         <h1>{formData.name}</h1>
//         <p>{formData.email} | {formData.phone}</p>
//         <h3>{formData.role}</h3>

//         <h4>Experience</h4>
//         <ul>
//           {experienceList.map((e, i) => <li key={i}>{e}</li>)}
//         </ul>

//         <h4>Skills</h4>
//         <div className="skills">
//           {skillsList.map((s, i) => (
//             <span key={i} className="skill-chip">{s}</span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResumeBuilder;





import React, { useEffect, useState } from "react";
import "./ResumeBuilder.css";
import { useNavigate, useLocation } from "react-router-dom";

/* ================= MOCK AI DATA ================= */

const aiExperienceMap = {
  "Frontend Developer": [
    "Developed responsive user interfaces using React and CSS",
    "Implemented reusable components to improve development speed",
    "Integrated REST APIs and managed application state",
  ],

  "Backend Developer": [
    "Built RESTful APIs using Node.js and Express",
    "Worked with MongoDB for database management",
    "Implemented authentication and security features",
  ],

  "AI Engineer": [
    "Built machine learning models using Python",
    "Performed data preprocessing and feature engineering",
    "Implemented deep learning algorithms for predictions",
  ],

  "Software Engineer": [
    "Designed efficient algorithms and data structures",
    "Collaborated using Git and Agile methodologies",
    "Optimized application performance and fixed bugs",
  ],

  "Data Analyst": [
    "Analyzed datasets to extract actionable business insights",
    "Created interactive dashboards using Power BI and Tableau",
    "Performed data cleaning, visualization, and statistical analysis using Excel and Python",
  ],

  "Data Engineer": [
    "Designed and maintained scalable ETL pipelines",
    "Built data workflows using Apache Spark and Hadoop",
    "Managed data warehouses using SQL, AWS, and Google BigQuery",
  ],

  "Data Scientist": [
    "Developed predictive models using Python and machine learning algorithms",
    "Performed data preprocessing, feature engineering, and statistical modeling",
    "Built data-driven solutions using Pandas, NumPy, and Scikit-learn",
  ],
};

function ResumeBuilder() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isEdit, setIsEdit] = useState(false);
  const [resumeId, setResumeId] = useState(null);

  const [template, setTemplate] = useState("template-one");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    skills: "",
  });

  /* ================= LOAD DATA (EDIT MODE) ================= */
  useEffect(() => {
    if (location.state?.resumeData) {
      const r = location.state.resumeData;

      setFormData({
        name: r.name || "",
        email: r.email || "",
        phone: r.phone || "",
        role: r.role || "",
        experience: (r.experience || []).join("\n"),
        skills: (r.skills || []).join(", "),
      });

      setTemplate(r.template || "template-one");
      setIsEdit(true);
      setResumeId(r.id);
    }

    const savedSkills = localStorage.getItem("resumeSkills");
    const targetRole = localStorage.getItem("targetRole");

    if (savedSkills) {
      setFormData((p) => ({ ...p, skills: savedSkills }));
    }
    if (targetRole) {
      setFormData((p) => ({ ...p, role: targetRole }));
    }
  }, [location.state]);

  /* ================= HANDLER ================= */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ================= AI SUGGEST ================= */
  const generateAISuggestion = () => {
    if (!formData.role) {
      alert("Please select a job role first");
      return;
    }

    const suggestions = aiExperienceMap[formData.role];
    if (!suggestions) {
      alert("AI suggestions not available for this role");
      return;
    }

    setFormData({
      ...formData,
      experience: suggestions.map((s) => `• ${s}`).join("\n"),
    });
  };

  /* ================= SAVE ================= */
  const saveResume = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Name, Email & Phone are required");
      return;
    }

    const stored = JSON.parse(localStorage.getItem("resumes")) || [];

    const resumeData = {
      id: isEdit ? resumeId : Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      role: formData.role,
      template,
      experience: formData.experience
        .replace(/•/g, "")
        .split("\n")
        .map((e) => e.trim())
        .filter(Boolean),
      skills: formData.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      date: new Date().toLocaleDateString(),
    };

    const updated = isEdit
      ? stored.map((r) => (r.id === resumeId ? resumeData : r))
      : [...stored, resumeData];

    localStorage.setItem("resumes", JSON.stringify(updated));
    alert(isEdit ? "✅ Resume Updated" : "✅ Resume Saved");
    navigate("/my-resumes");
  };

  return (
    <div className="resume-builder">
      {/* ================= FORM ================= */}
      <div className="form-section no-print">
        <h2>{isEdit ? "Edit Resume" : "Create Resume"}</h2>

        <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />

        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="">Select Job Role</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="AI Engineer">AI Engineer</option>
          <option value="Software Engineer">Software Engineer</option>
           <option value="Data Analyst">Data Analyst</option>
            <option value="Data Engineer">Data Engineer</option>
             <option value="Data Scientist">Data Scientist</option>
        </select>

        {/* TEMPLATE SELECT */}
        <select value={template} onChange={(e) => setTemplate(e.target.value)}>
          <option value="template-one">Template One (ATS)</option>
          <option value="template-two">Template Two (Modern)</option>
        </select>

        <textarea
          name="experience"
          placeholder="Experience (bullet points supported)"
          value={formData.experience}
          onChange={handleChange}
        />

        <button className="btn-ai" onClick={generateAISuggestion}>
          🤖 AI Suggest Experience
        </button>

        <input
          name="skills"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={handleChange}
        />

        <div className="button-group">
          <button className="btn-primary" onClick={saveResume}>
            {isEdit ? "Update Resume" : "Save Resume"}
          </button>

          <button className="btn-secondary" onClick={() => window.print()}>
            Download PDF
          </button>
        </div>
      </div>

      {/* ================= PREVIEW ================= */}
      <div className={`preview-section ${template}`}>
        <h1>{formData.name}</h1>
        <p>
          {formData.email} {formData.phone && `| ${formData.phone}`}
        </p>
        <h3>{formData.role}</h3>

        <h4>Experience</h4>
        <ul>
          {formData.experience
            .replace(/•/g, "")
            .split("\n")
            .filter(Boolean)
            .map((e, i) => (
              <li key={i}>{e}</li>
            ))}
        </ul>

        <h4>Skills</h4>
        <div className="skills">
          {formData.skills
            .split(",")
            .filter(Boolean)
            .map((s, i) => (
              <span key={i} className="skill-chip">
                {s.trim()}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
