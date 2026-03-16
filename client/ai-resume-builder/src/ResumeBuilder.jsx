// import React, { useState } from "react";
// import "./ResumeBuilder.css";
// import { useNavigate } from "react-router-dom";

// function ResumeBuilder() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     skills: "",
//     experience: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="resume-builder">
//       {/* Header */}
//       <div className="rb-header">
//         <h2>AI Resume Builder</h2>
//         <button onClick={() => navigate("/dashboard")}>
//           ← Back to Dashboard
//         </button>
//       </div>

//       <div className="rb-content">
//         {/* Form Section */}
//         <div className="rb-form">
//           <h3>Enter Your Details</h3>

//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//           />

//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//           />

//           <textarea
//             name="skills"
//             placeholder="Skills (e.g. React, Java, SQL)"
//             value={formData.skills}
//             onChange={handleChange}
//           />

//           <textarea
//             name="experience"
//             placeholder="Work Experience"
//             value={formData.experience}
//             onChange={handleChange}
//           />

//           <button className="generate-btn">Generate Resume</button>
//         </div>

//         {/* Preview Section */}
//         <div className="rb-preview">
//           <h3>Resume Preview</h3>

//           <div className="preview-box">
//             <h2>{formData.name || "Your Name"}</h2>
//             <p>{formData.email}</p>
//             <p>{formData.phone}</p>

//             <h4>Skills</h4>
//             <p>{formData.skills || "Your skills will appear here"}</p>

//             <h4>Experience</h4>
//             <p>{formData.experience || "Your experience will appear here"}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResumeBuilder;


// import React, { useState } from "react";
// import "./ResumeBuilder.css";
// import { supabase } from "./supabase";
// import TemplateOne from "./templates/TemplateOne";
// import TemplateTwo from "./templates/TemplateTwo";
// import { useSearchParams } from "react-router-dom";


// const skillAI = (education) => {
//   if (education.toLowerCase().includes("b.tech"))
//     return ["HTML", "CSS", "JavaScript", "React", "SQL"];
//   return ["Communication", "Teamwork"];
// };

// const ResumeBuilder = () => {
//   const [template, setTemplate] = useState("one");
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     skills: [],
//     experience: [],
//     education: "",
//   });

//   const suggestSkills = () => {
//     setData({ ...data, skills: skillAI(data.education) });
//   };

//   const saveResume = async () => {
//     await supabase.from("resumes").insert([data]);
//     alert("Resume Saved");
//   };

//   return (
//     <div className="builder-container">
//       {/* FORM */}
//       <div className="form-section">
//         <h2>AI Resume Builder</h2>

//         <select onChange={(e) => setTemplate(e.target.value)}>
//           <option value="one">Template One</option>
//           <option value="two">Template Two</option>
//         </select>

//         <input placeholder="Name"
//           onChange={(e) => setData({ ...data, name: e.target.value })} />

//         <input placeholder="Email"
//           onChange={(e) => setData({ ...data, email: e.target.value })} />

//         <input placeholder="Phone"
//           onChange={(e) => setData({ ...data, phone: e.target.value })} />

//         <input placeholder="Education"
//           onChange={(e) => setData({ ...data, education: e.target.value })} />

//         <button onClick={suggestSkills}>AI Suggest Skills</button>

//         <input placeholder="Skills (comma separated)"
//           onChange={(e) =>
//             setData({
//               ...data,
//               skills: e.target.value.split(",").map(s => s.trim())
//             })} />

//         <textarea placeholder="Experience (one per line)"
//           onChange={(e) =>
//             setData({
//               ...data,
//               experience: e.target.value.split("\n")
//             })} />

//         <button className="primary" onClick={saveResume}>
//           Generate Resume
//         </button>
//       </div>

//       {/* PREVIEW */}
//       <div className="resume-preview">
//         {template === "one"
//           ? <TemplateOne data={data} />
//           : <TemplateTwo data={data} />}

//         <div className="actions">
//           <button onClick={() => window.print()}>Download PDF</button>
//           <button onClick={() => window.location.href = "/history"}>
//             View History
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeBuilder;


// import React, { useEffect, useRef, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { supabase } from "./supabaseClient";
// import "./ResumeBuilder.css";

// const ResumeBuilder = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const printRef = useRef();

//   // 👉 edit ke time resume data yaha aayega
//   const editResume = location.state?.resume || null;

//   const [resumeId, setResumeId] = useState(editResume?.id || null);

//   const [name, setName] = useState(editResume?.name || "");
//   const [email, setEmail] = useState(editResume?.email || "");
//   const [phone, setPhone] = useState(editResume?.phone || "");
//   const [skills, setSkills] = useState(editResume?.skills || "");
//   const [experience, setExperience] = useState(
//     editResume?.experience?.join("\n") || ""
//   );
//   const [education, setEducation] = useState(editResume?.education || "");

//   /* ---------------- SAVE / UPDATE ---------------- */
//   const handleSaveResume = async () => {
//     const resumeData = {
//       name,
//       email,
//       phone,
//       skills,
//       experience: experience.split("\n"),
//       education,
//     };

//     let result;

//     if (resumeId) {
//       // 🔁 UPDATE
//       result = await supabase
//         .from("resumes")
//         .update(resumeData)
//         .eq("id", resumeId);
//     } else {
//       // ➕ INSERT
//       result = await supabase
//         .from("resumes")
//         .insert([resumeData])
//         .select()
//         .single();

//       if (result.data) {
//         setResumeId(result.data.id);
//       }
//     }

//     if (result.error) {
//       alert("Error saving resume");
//       console.error(result.error);
//     } else {
//       alert("Resume saved successfully");
//     }
//   };

//   /* ---------------- PDF PRINT ---------------- */
//   const handleDownloadPDF = () => {
//     window.print();
//   };

//   return (
//     <div className="resume-builder-container">
//       {/* FORM SECTION */}
//       <div className="form-section">
//         <h2>AI Resume Builder</h2>

//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Skills (comma separated)"
//           value={skills}
//           onChange={(e) => setSkills(e.target.value)}
//         />

//         <textarea
//           placeholder="Experience (one per line)"
//           rows="4"
//           value={experience}
//           onChange={(e) => setExperience(e.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Education"
//           value={education}
//           onChange={(e) => setEducation(e.target.value)}
//         />

//         <button onClick={handleSaveResume}>
//           {resumeId ? "Update Resume" : "Save Resume"}
//         </button>
//       </div>

//       {/* PREVIEW SECTION */}
//       <div className="preview-section" ref={printRef}>
//         <h1>{name}</h1>
//         <p>
//           {email} | {phone}
//         </p>

//         <h3>Professional Skills</h3>
//         <p>{skills}</p>

//         <h3>Work Experience</h3>
//         <ul>
//           {experience.split("\n").map((exp, index) => (
//             <li key={index}>{exp}</li>
//           ))}
//         </ul>

//         <h3>Education</h3>
//         <p>{education}</p>

//         <div className="preview-buttons no-print">
//           <button onClick={handleDownloadPDF}>Download PDF</button>
//           <button onClick={() => navigate("/resume-history")}>
//             View Resume History
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResumeBuilder;

// import React, { useState, useEffect } from "react";
// import { supabase } from "./supabaseClient";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./ResumeBuilder.css";
// import { suggestExperience, suggestSkills } from "./utils/aiSuggestions";
// import jsPDF from "jspdf";

// const ResumeBuilder = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const editResume = location.state?.resume || null;

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [experience, setExperience] = useState("");
//   const [skillInput, setSkillInput] = useState("");
//   const [skills, setSkills] = useState([]);

//   // Prefill form while editing
//   useEffect(() => {
//     if (editResume) {
//       setName(editResume.name);
//       setEmail(editResume.email);
//       setPhone(editResume.phone);
//       setExperience(editResume.experience?.join("\n") || "");
//       setSkills(editResume.skills || []);
//     }
//   }, [editResume]);

//   // Add skill on Enter
//   const handleSkillKeyDown = (e) => {
//     if (e.key === "Enter" && skillInput.trim()) {
//       e.preventDefault();
//       setSkills([...skills, skillInput.trim()]);
//       setSkillInput("");
//     }
//   };

//   // SAVE / UPDATE RESUME
//   const handleSave = async () => {
//     const experienceArray = experience
//       .split("\n")
//       .map((line) => line.trim())
//       .filter(Boolean);

//     const payload = {
//       name,
//       email,
//       phone,
//       experience: experienceArray,
//       skills,
//     };

//     let result;
//     if (editResume) {
//       result = await supabase
//         .from("resumes")
//         .update(payload)
//         .eq("id", editResume.id);
//     } else {
//       result = await supabase.from("resumes").insert([payload]);
//     }

//     if (result.error) {
//       alert(result.error.message);
//     } else {
//       alert("Resume saved successfully ✅");
//       navigate("/resume-history");
//     }
//   };

//   return (
//     <div className="resume-wrapper">
//       <div className="resume-card">
//         <h2>Create Resume</h2>

//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />

//         <textarea
//           placeholder="Experience (each line new)"
//           value={experience}
//           onChange={(e) => setExperience(e.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Type skill & press Enter"
//           value={skillInput}
//           onChange={(e) => setSkillInput(e.target.value)}
//           onKeyDown={handleSkillKeyDown}
//         />

//         <div className="skill-list">
//           {skills.map((s, i) => (
//             <span key={i}>{s}</span>
//           ))}
//         </div>

//         <button className="btn save" onClick={handleSave}>
//           💾 Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ResumeBuilder;

// import React, { useState } from "react";
// import "./ResumeBuilder.css";
// import jsPDF from "jspdf";

// const ResumeBuilder = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [experience, setExperience] = useState("");
//   const [skills, setSkills] = useState("");

//   // ✅ SAVE
//   const handleSave = () => {
//     const resumeData = { name, email, phone, experience, skills };
//     localStorage.setItem("resume", JSON.stringify(resumeData));
//     alert("Resume saved successfully ✅");
//   };

//   // ✅ AI IMPROVE (Dummy logic – no error)
//   const handleAIImprove = () => {
//     if (!experience) {
//       alert("Please enter experience first");
//       return;
//     }
//     setExperience(
//       experience +
//         "\n• Worked on real-world projects using modern tools\n• Strong problem-solving and teamwork skills"
//     );
//   };

//   // ✅ PDF DOWNLOAD (REAL PDF)
//   const handlePDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(14);

//     doc.text("Resume", 20, 20);
//     doc.text(`Name: ${name}`, 20, 35);
//     doc.text(`Email: ${email}`, 20, 45);
//     doc.text(`Phone: ${phone}`, 20, 55);

//     doc.text("Experience:", 20, 70);
//     doc.text(experience || "N/A", 20, 80);

//     doc.text("Skills:", 20, 110);
//     doc.text(skills || "N/A", 20, 120);

//     doc.save("resume.pdf");
//   };

//   return (
//     <div className="resume-wrapper">
//       <div className="resume-card">
//         <h2>Create Resume</h2>

//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />

//         <textarea
//           placeholder="Experience (each line new)"
//           value={experience}
//           onChange={(e) => setExperience(e.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Skills (comma separated)"
//           value={skills}
//           onChange={(e) => setSkills(e.target.value)}
//         />

//         <button className="btn ai" onClick={handleAIImprove}>
//           🤖 AI Improve
//         </button>

//         <button className="btn save" onClick={handleSave}>
//           💾 Save
//         </button>

//         <button className="btn pdf" onClick={handlePDF}>
//           📄 Download PDF
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ResumeBuilder;


// import React, { useState } from "react";
// import "./ResumeBuilder.css";
// import jsPDF from "jspdf";

// const ResumeBuilder = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [experience, setExperience] = useState("");
//   const [skills, setSkills] = useState("");
//   const [template, setTemplate] = useState("classic");

//   // SAVE
//   const handleSave = () => {
//     localStorage.setItem(
//       "resume",
//       JSON.stringify({ name, email, phone, experience, skills, template })
//     );
//     alert("Resume saved successfully ✅");
//   };

//   // AI SUGGESTION
//   const handleAISuggestion = () => {
//     const improved = `
// • Built responsive web apps using React
// • Hands-on with SQL & Python
// • Strong problem-solving and teamwork skills
// • Motivated fresher eager to learn new technologies
//     `;
//     setExperience(improved.trim());
//   };

//   // 🧾 TEMPLATE-WISE PDF
//   const handlePDF = () => {
//     const doc = new jsPDF();

//     if (template === "classic") {
//       // CLASSIC TEMPLATE
//       doc.setFont("helvetica", "bold");
//       doc.setFontSize(20);
//       doc.text(name || "Your Name", 20, 25);

//       doc.setFontSize(12);
//       doc.setFont("helvetica", "normal");
//       doc.text(`Email: ${email}`, 20, 40);
//       doc.text(`Phone: ${phone}`, 20, 48);

//       doc.setFont("helvetica", "bold");
//       doc.text("Experience", 20, 65);
//       doc.setFont("helvetica", "normal");
//       doc.text(experience || "-", 20, 75);

//       doc.setFont("helvetica", "bold");
//       doc.text("Skills", 20, 110);
//       doc.setFont("helvetica", "normal");
//       doc.text(skills || "-", 20, 120);
//     }

//     if (template === "modern") {
//       // MODERN TEMPLATE
//       doc.setFillColor(37, 99, 235);
//       doc.rect(0, 0, 210, 40, "F");

//       doc.setTextColor(255, 255, 255);
//       doc.setFontSize(22);
//       doc.text(name || "Your Name", 20, 25);

//       doc.setFontSize(12);
//       doc.text(email, 20, 32);

//       doc.setTextColor(0, 0, 0);
//       doc.setFontSize(14);
//       doc.text("Experience", 20, 55);
//       doc.setFontSize(11);
//       doc.text(experience || "-", 20, 65);

//       doc.setFontSize(14);
//       doc.text("Skills", 20, 110);
//       doc.setFontSize(11);
//       doc.text(skills || "-", 20, 120);
//     }

//     doc.save(`${template}-resume.pdf`);
//   };

//   return (
//     <div className="resume-wrapper">
//       <div className={`resume-card ${template}`}>
//         <h2>Create Resume</h2>

//         <select value={template} onChange={(e) => setTemplate(e.target.value)}>
//           <option value="classic">Classic Template</option>
//           <option value="modern">Modern Template</option>
//         </select>

//         <input placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
//         <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//         <input placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />

//         <textarea
//           placeholder="Experience"
//           onChange={(e) => setExperience(e.target.value)}
//         />

//         <input
//           placeholder="Skills (comma separated)"
//           onChange={(e) => setSkills(e.target.value)}
//         />

//         <button className="btn ai" onClick={handleAISuggestion}>
//           🤖 AI Suggestion
//         </button>

//         <button className="btn save" onClick={handleSave}>
//           💾 Save
//         </button>

//         <button className="btn pdf" onClick={handlePDF}>
//           📄 Download PDF
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ResumeBuilder;

// import React, { useState } from "react";
// import "./ResumeBuilder.css";
// // import TemplateOne from "./TemplateOne.jsx";
// // import TemplateTwo from "./TemplateTwo.jsx";
// import TemplateOne from "./templates/TemplateOne";
// import TemplateTwo from "./templates/TemplateTwo";

// export default function ResumeBuilder() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     experience: "",
//     skills: ""
//   });

//   const [template, setTemplate] = useState("one");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAISuggestion = () => {
//     setForm({
//       ...form,
//       experience:
//         form.experience +
//         "\n• Strong problem-solving skills\n• Passionate fresher eager to learn"
//     });
//   };

//   const handleSave = () => {
//     alert("Resume saved successfully ✅");
//   };

//   const handlePDF = () => {
//     alert("PDF generation logic yahan add hoga 📄");
//   };

//   return (
//     <div className="resume-wrapper">
//       {/* LEFT FORM */}
//       <div className="resume-form">
//         <h2>Create Resume</h2>

//         <input
//           name="name"
//           placeholder="Full Name"
//           value={form.name}
//           onChange={handleChange}
//         />

//         <input
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//         />

//         <input
//           name="phone"
//           placeholder="Phone"
//           value={form.phone}
//           onChange={handleChange}
//         />

//         <textarea
//           name="experience"
//           placeholder="Experience"
//           value={form.experience}
//           onChange={handleChange}
//         />

//         <input
//           name="skills"
//           placeholder="Skills (comma separated)"
//           value={form.skills}
//           onChange={handleChange}
//         />

//         <div className="template-btns">
//           <button
//             className={template === "one" ? "active" : ""}
//             onClick={() => setTemplate("one")}
//           >
//             Template 1
//           </button>

//           <button
//             className={template === "two" ? "active" : ""}
//             onClick={() => setTemplate("two")}
//           >
//             Template 2
//           </button>
//         </div>

//         <button onClick={handleAISuggestion}>🤖 AI Improve</button>
//         <button onClick={handleSave}>💾 Save</button>
//         <button onClick={handlePDF}>📄 Download PDF</button>
//       </div>

//       {/* RIGHT LIVE PREVIEW */}
//       <div className="resume-preview">
//         {template === "one" ? (
//           <TemplateOne data={form} />
//         ) : (
//           <TemplateTwo data={form} />
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import html2pdf from "html2pdf.js";
// import "./ResumeBuilder.css";
// // import TemplateOne from "./TemplateOne";
// // import TemplateTwo from "./TemplateTwo";
// import TemplateOne from "./templates/TemplateOne";
// import TemplateTwo from "./templates/TemplateTwo";

// export default function ResumeBuilder() {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     summary: "",
//     skills: "",
//   });

//   const [template, setTemplate] = useState("one");

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   // ✅ REAL PDF DOWNLOAD
//   const downloadPDF = () => {
//     const element = document.getElementById("resume-template");

//     html2pdf().from(element).save(
//       template === "one" ? "modern-resume.pdf" : "classic-resume.pdf"
//     );
//   };

//   // 🤖 AI Suggestion (Demo)
//   const aiSuggestion = () => {
//     setData({
//       ...data,
//       summary:
//         "Motivated fresher with strong skills in React, SQL, and Python, eager to learn and grow in a professional environment.",
//     });
//   };

//   return (
//     <div className="resume-container">
//       <div className="form-box">
//         <h2>Create Resume</h2>

//         <input name="name" placeholder="Name" onChange={handleChange} />
//         <input name="email" placeholder="Email" onChange={handleChange} />
//         <input name="phone" placeholder="Phone" onChange={handleChange} />
//         <textarea
//           name="summary"
//           placeholder="Profile Summary"
//           onChange={handleChange}
//         />
//         <input
//           name="skills"
//           placeholder="Skills (comma separated)"
//           onChange={handleChange}
//         />

//         <div className="btn-group">
//           <button onClick={aiSuggestion}>🤖 AI Improve</button>
//           <button onClick={downloadPDF}>📄 Download PDF</button>
//         </div>

//         <div className="template-btns">
//           <button onClick={() => setTemplate("one")}>Template 1</button>
//           <button onClick={() => setTemplate("two")}>Template 2</button>
//         </div>
//       </div>

//       <div className="preview-box">
//         {template === "one" ? (
//           <TemplateOne data={data} />
//         ) : (
//           <TemplateTwo data={data} />
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useState, useRef } from "react";
// import html2pdf from "html2pdf.js";
// import "./ResumeBuilder.css";
// import TemplateOne from "./templates/TemplateOne";
// import TemplateTwo from "./templates/TemplateTwo";

// const ResumeBuilder = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     experience: "",
//     skills: ""
//   });

//   const [template, setTemplate] = useState("one");
//   const resumeRef = useRef();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const downloadPDF = () => {
//     const element = resumeRef.current;
//     html2pdf().from(element).save(
//       template === "one" ? "modern-resume.pdf" : "classic-resume.pdf"
//     );
//   };

//   return (
//     <div className="resume-builder-container">
//       {/* LEFT FORM */}
//       <div className="form-section">
//         <h2>Create Resume</h2>

//         <input name="name" placeholder="Full Name" onChange={handleChange} />
//         <input name="email" placeholder="Email" onChange={handleChange} />
//         <input name="phone" placeholder="Phone" onChange={handleChange} />
//         <textarea
//           name="experience"
//           placeholder="Experience"
//           onChange={handleChange}
//         />
//         <input
//           name="skills"
//           placeholder="Skills (comma separated)"
//           onChange={handleChange}
//         />

//         <div className="template-buttons">
//           <button onClick={() => setTemplate("one")}>Modern Template</button>
//           <button onClick={() => setTemplate("two")}>Classic Template</button>
//         </div>

//         <button className="pdf-btn" onClick={downloadPDF}>
//           Download PDF
//         </button>
//       </div>

//       {/* RIGHT PREVIEW */}
//       <div className="preview-section" ref={resumeRef}>
//         {template === "one" ? (
//           <TemplateOne data={formData} />
//         ) : (
//           <TemplateTwo data={formData} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResumeBuilder;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./ResumeBuilder.css";

// const ResumeBuilder = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     summary: "",
//     skills: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const saveResume = () => {
//     const oldResumes =
//       JSON.parse(localStorage.getItem("resumes")) || [];

//     const newResume = {
//       id: Date.now(),
//       ...formData,
//     };

//     localStorage.setItem(
//       "resumes",
//       JSON.stringify([...oldResumes, newResume])
//     );

//     alert("Resume saved successfully ✅");
//     navigate("/dashboard");
//   };

//   return (
//     <div className="resume-container">
//       <h2>Create Resume</h2>

//       <input name="name" placeholder="Name" onChange={handleChange} />
//       <input name="email" placeholder="Email" onChange={handleChange} />
//       <input name="phone" placeholder="Phone" onChange={handleChange} />

//       <textarea
//         name="summary"
//         placeholder="Summary"
//         onChange={handleChange}
//       />

//       <input
//         name="skills"
//         placeholder="Skills (comma separated)"
//         onChange={handleChange}
//       />

//       <button onClick={saveResume}>Save Resume</button>
//     </div>
//   );
// };

// export default ResumeBuilder;

// src/components/ResumeBuilder.jsx
// import { useState } from "react";
// import TemplateOne from "./templates/TemplateOne";
// import TemplateTwo from "./templates/TemplateTwo";
// import "./ResumeBuilder.css";

// export default function ResumeBuilder() {
//   const [template, setTemplate] = useState("one");
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     skill: ""
//   });

//   return (
//     <div className="resume-builder">
//       <div className="form">
//         <input
//           placeholder="Name"
//           onChange={(e) => setData({ ...data, name: e.target.value })}
//         />
//         <input
//           placeholder="Email"
//           onChange={(e) => setData({ ...data, email: e.target.value })}
//         />
//         <input
//           placeholder="Skill"
//           onChange={(e) => setData({ ...data, skill: e.target.value })}
//         />

//         <div className="buttons">
//           <button onClick={() => setTemplate("one")}>Template 1</button>
//           <button onClick={() => setTemplate("two")}>Template 2</button>
//         </div>
//       </div>

//       <div className="preview">
//         {template === "one" && <TemplateOne data={data} />}
//         {template === "two" && <TemplateTwo data={data} />}
//       </div>
//     </div>
//   );
// }


// import Sidebar from "./components/Sidebar";
// import "./ResumeBuilder.css";
// import { useState } from "react";
// import html2pdf from "html2pdf.js";

// // export default function ResumeBuilder() {
// function ResumeBuilder() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     skills: "",
//     summary: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // SAVE RESUME (LOCAL STORAGE)
//   const saveResume = () => {
//     const saved = JSON.parse(localStorage.getItem("resumes")) || [];
//       const newResume = {
//      id: Date.now(),
//      ...formData,
//      createdAt: new Date().toLocaleDateString(),
//    };
//     saved.push(form);
//     localStorage.setItem("resumes", JSON.stringify(saved));
//     alert("Resume saved successfully!");
//     navigate("/MyResume");
//   };

//   // DOWNLOAD PDF
//   const downloadPDF = () => {
//     const element = document.getElementById("resume-preview");
//     html2pdf().from(element).save("resume.pdf");
//   };

//   return (
//     <div style={styles.container}>
//       {/* FORM */}
//       <div style={styles.form}>
//         <h2>Resume Builder</h2>

//         <input
//           name="name"
//           placeholder="Full Name"
//           value={form.name}
//           onChange={handleChange}
//         />

//         <input
//           name="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//         />

//         <input
//           name="phone"
//           placeholder="Phone"
//           value={form.phone}
//           onChange={handleChange}
//         />

//         <textarea
//           name="summary"
//           placeholder="Professional Summary"
//           value={form.summary}
//           onChange={handleChange}
//         />

//         <textarea
//           name="skills"
//           placeholder="Skills (comma separated)"
//           value={form.skills}
//           onChange={handleChange}
//         />

//         <button onClick={saveResume}>Save Resume</button>
//         <button onClick={downloadPDF}>Download PDF</button>
//       </div>

//       {/* PREVIEW */}
//       <div id="resume-preview" style={styles.preview}>
//         <h1>{form.name || "Your Name"}</h1>
//         <p>{form.email} | {form.phone}</p>

//         <h3>Professional Summary</h3>
//         <p>{form.summary || "Your summary will appear here"}</p>

//         <h3>Skills</h3>
//         <ul>
//           {form.skills
//             .split(",")
//             .filter((s) => s.trim())
//             .map((skill, index) => (
//               <li key={index}>{skill}</li>
//             ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     gap: "20px",
//     padding: "30px",
//     flexWrap: "wrap",
//   },

//   form: {
//     flex: "1",
//     minWidth: "280px",
//     background: "#fff",
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   },

//   preview: {
//     flex: "1",
//     minWidth: "280px",
//     background: "#fff",
//     padding: "20px",
//     borderRadius: "12px",
//     boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
//   },
//  };

// export default ResumeBuilder;



// import React, { useState } from "react";
// import "./ResumeBuilder.css";
// import { useNavigate } from "react-router-dom";

// function ResumeBuilder() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     role: "",
//     experience: "",
//     skills: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const saveResume = () => {
//     if (!formData.name || !formData.email || !formData.phone) {
//       alert("Name & Role are required");
//       return;
//     }

//     const stored = JSON.parse(localStorage.getItem("resumes")) || [];

//     const newResume = {
//       id: Date.now(),
//       ...formData,
//       date: new Date().toLocaleDateString(),
//     };

//     localStorage.setItem(
//       "resumes",
//       JSON.stringify([...stored, newResume])
//     );

//     alert("✅ Resume Saved Successfully");

//     // reset form (React way)
//     setFormData({
//       name: "",
//       email:"",
//       phone:"",
//       experience: "",
//       skills: "",
//     });

//     navigate("/my-resumes");
//   };

//   return (
//     <div className="resume-builder">
//       <h2>Create Resume</h2>

//       <input
//         type="text"
//         name="name"
//         placeholder="Full Name"
//         value={formData.name}
//         onChange={handleChange}
//       />

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
//        />
     

//       <textarea
//         name="experience"
//         placeholder="Experience"
//         value={formData.experience}
//         onChange={handleChange}
//       />

//       <input
//         type="text"
//         name="skills"
//         placeholder="Skills (comma separated)"
//         value={formData.skills}
//         onChange={handleChange}
//       />

//       <button onClick={saveResume} className="btn-primary">
//         Save Resume
//       </button>

//       <button onClick={() => window.print()} className="btn-secondary">
//         Download PDF
//       </button>
//     </div>
//   );
// }

// export default ResumeBuilder;



// import React, { useState } from "react";
// import "./ResumeBuilder.css";
// import { useNavigate } from "react-router-dom";

// function ResumeBuilder() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     experience: "",
//     skills: "",
//   });

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Save resume
//   const saveResume = () => {
//     if (!formData.name || !formData.email || !formData.phone) {
//       alert("Name, Email and Phone are required");
//       return;
//     }

//     const storedResumes =
//       JSON.parse(localStorage.getItem("resumes")) || [];

//     const newResume = {
//       id: Date.now(),
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       experience: formData.experience,
//       skills: formData.skills
//         .split(",")
//         .map((skill) => skill.trim()),
//       date: new Date().toLocaleDateString(),
//     };

//     localStorage.setItem(
//       "resumes",
//       JSON.stringify([...storedResumes, newResume])
//     );

//     alert("✅ Resume Saved Successfully");

//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       experience: "",
//       skills: "",
//     });

//     navigate("/my-resumes");
//   };

//   return (
//     <div className="resume-builder">
//       <h2>Create Resume</h2>

//       <input
//         type="text"
//         name="name"
//         placeholder="Full Name"
//         value={formData.name}
//         onChange={handleChange}
//       />

//       <input
//         type="email"
//         name="email"
//         placeholder="Email Address"
//         value={formData.email}
//         onChange={handleChange}
//       />

//       <input
//         type="text"
//         name="phone"
//         placeholder="Phone Number"
//         value={formData.phone}
//         onChange={handleChange}
//       />

//       <textarea
//         name="experience"
//         placeholder="Experience (use bullet points if possible)"
//         value={formData.experience}
//         onChange={handleChange}
//       />

//       <input
//         type="text"
//         name="skills"
//         placeholder="Skills (comma separated)"
//         value={formData.skills}
//         onChange={handleChange}
//       />

//       <div className="button-group">
//         <button onClick={saveResume} className="btn-primary">
//           Save Resume
//         </button>

//         <button
//           onClick={() => window.print()}
//           className="btn-secondary"
//         >
//           Download PDF
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ResumeBuilder;


// import React, { useEffect, useState } from "react";
// import "./ResumeBuilder.css";
// import { useNavigate, useLocation } from "react-router-dom";

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

//   /* ================= AUTO LOAD (Edit + SkillAnalyzer) ================= */
//   useEffect(() => {
//     // 🔹 Edit resume
//     if (location.state?.resumeData) {
//       const r = location.state.resumeData;
//       setFormData({
//         name: r.name,
//         email: r.email,
//         phone: r.phone,
//         role: r.role || "",
//         experience: r.experience,
//         skills: Array.isArray(r.skills) ? r.skills.join(", ") : r.skills,
//       });
//       setIsEdit(true);
//       setResumeId(r.id);
//     }

//     // 🔹 SkillAnalyzer auto-fill
//     const savedSkills = localStorage.getItem("resumeSkills");
//     const targetRole = localStorage.getItem("targetRole");

//     if (savedSkills) {
//       setFormData((prev) => ({ ...prev, skills: savedSkills }));
//     }
//     if (targetRole) {
//       setFormData((prev) => ({ ...prev, role: targetRole }));
//     }
//   }, [location.state]);

//   /* ================= INPUT HANDLER ================= */
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   /* ================= SAVE / UPDATE RESUME ================= */
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
//         .split("\n")
//         .map((line) => line.trim())
//         .filter(Boolean),
//       skills: formData.skills
//         .split(",")
//         .map((s) => s.trim())
//         .filter(Boolean),
//       date: new Date().toLocaleDateString(),
//     };

//     let updatedResumes;

//     if (isEdit) {
//       updatedResumes = stored.map((r) =>
//         r.id === resumeId ? resumeData : r
//       );
//     } else {
//       updatedResumes = [...stored, resumeData];
//     }

//     localStorage.setItem("resumes", JSON.stringify(updatedResumes));
//     alert("✅ Resume Saved Successfully");
//     navigate("/my-resumes");
//   };

//   /* ================= PRINT ================= */
//   const printResume = () => {
//     window.print();
//   };

//   return (
//     <div className="resume-builder">
//       {/* ===== FORM ===== */}
//       <div className="form-section no-print">
//         <h2>{isEdit ? "Edit Resume" : "Create Resume"}</h2>

//         <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
//         <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
//         <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
//         <input name="role" placeholder="Target Role" value={formData.role} onChange={handleChange} />

//         <textarea
//           name="experience"
//           placeholder="Experience (each point in new line)"
//           value={formData.experience}
//           onChange={handleChange}
//         />

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
//           <button className="btn-secondary" onClick={printResume}>
//             Download PDF
//           </button>
//         </div>
//       </div>

//       {/* ===== PREVIEW ===== */}
//       <div className="preview-section">
//         <h1>{formData.name}</h1>
//         <p>{formData.email} | {formData.phone}</p>
//         <h3>{formData.role}</h3>

//         <h4>Experience</h4>
//         <ul>
//           {formData.experience
//             .split("\n")
//             .filter(Boolean)
//             .map((exp, i) => (
//               <li key={i}>{exp}</li>
//             ))}
//         </ul>

//         <h4>Skills</h4>
//         <div className="skills">
//           {formData.skills
//             .split(",")
//             .filter(Boolean)
//             .map((skill, i) => (
//               <span key={i} className="skill-chip">{skill.trim()}</span>
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
//     "Integrated REST APIs and managed application state"
//   ],
//   "Backend Developer": [
//     "Built RESTful APIs using Node.js and Express",
//     "Worked with MongoDB for database management",
//     "Implemented authentication and security features"
//   ],
//   "AI Engineer": [
//     "Built machine learning models using Python",
//     "Performed data preprocessing and feature engineering",
//     "Implemented deep learning algorithms for predictions"
//   ],
//   "Software Engineer": [
//     "Designed efficient algorithms and data structures",
//     "Collaborated using Git and Agile methodologies",
//     "Optimized application performance and fixed bugs"
//   ]
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

//   /* ================= LOAD DATA ================= */
//   useEffect(() => {
//     if (location.state?.resumeData) {
//       const r = location.state.resumeData;
//       setFormData({
//         name: r.name,
//         email: r.email,
//         phone: r.phone,
//         role: r.role || "",
//         experience: r.experience.join("\n"),
//         skills: r.skills.join(", "),
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
//       alert("Please enter/select role first");
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
//       alert("Name, Email & Phone required");
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
//         .replaceAll("•", "")
//         .split("\n")
//         .map((e) => e.trim())
//         .filter(Boolean),
//       skills: formData.skills.split(",").map((s) => s.trim()),
//       date: new Date().toLocaleDateString(),
//     };

//     const updated = isEdit
//       ? stored.map((r) => (r.id === resumeId ? resumeData : r))
//       : [...stored, resumeData];

//     localStorage.setItem("resumes", JSON.stringify(updated));
//     alert("✅ Resume Saved");
//     navigate("/my-resumes");
//   };

//   return (
//     <div className="resume-builder">
//       {/* ===== FORM ===== */}
//       <div className="form-section no-print">
//         <h2>{isEdit ? "Edit Resume" : "Create Resume"}</h2>

//         <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
//         <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
//         <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
//         <input name="role" placeholder="Target Role" value={formData.role} onChange={handleChange} />

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

//         <div className="button-group">
//           <button className="btn-primary" onClick={saveResume}>
//             {isEdit ? "Update Resume" : "Save Resume"}
//           </button>
//           <button className="btn-secondary" onClick={() => window.print()}>
//             Download PDF
//           </button>
//         </div>
//       </div>

//       {/* ===== PREVIEW ===== */}
//       <div className="preview-section">
//         <h1>{formData.name}</h1>
//         <p>{formData.email} | {formData.phone}</p>
//         <h3>{formData.role}</h3>

//         <h4>Experience</h4>
//         <ul>
//           {formData.experience
//             .replaceAll("•", "")
//             .split("\n")
//             .filter(Boolean)
//             .map((e, i) => (
//               <li key={i}>{e}</li>
//             ))}
//         </ul>

//         <h4>Skills</h4>
//         <div className="skills">
//           {formData.skills.split(",").map((s, i) => (
//             <span key={i} className="skill-chip">{s.trim()}</span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResumeBuilder;






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
