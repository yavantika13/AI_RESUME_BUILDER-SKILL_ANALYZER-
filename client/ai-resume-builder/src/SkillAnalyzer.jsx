// // import React, { useState } from "react";
// // import "./SkillAnalyzer.css";

// // const roleSkillsMap = {
// //   "Frontend Developer": ["html", "css", "javascript", "react", "git"],
// //   "Backend Developer": ["node", "express", "mongodb", "sql"],
// //   "Data Scientist": ["python", "sql", "machine learning", "statistics"],
// //   "AI Engineer": ["python", "machine learning", "deep learning", "nlp"],
// //   "Software Engineer": ["data structures", "algorithms", "oops", "git"],
// // };

// // const roadmap = {
// //   html: "Learn HTML basics → Practice forms → Build simple pages",
// //   css: "Learn CSS → Flexbox/Grid → Responsive design",
// //   javascript: "Learn JS basics → DOM → ES6",
// //   react: "React basics → Components → Hooks → Projects",
// //   python: "Syntax → Practice problems → Mini projects",
// //   sql: "Queries → Joins → Use with backend",
// //   "machine learning": "Math basics → Algorithms → ML projects",
// //   "deep learning": "Neural networks → CNN/RNN → Projects",
// //   nlp: "Text preprocessing → Models → NLP apps",
// // };

// // function SkillAnalyzer() {
// //   const [skills, setSkills] = useState("");
// //   const [role, setRole] = useState("");
// //   const [missingSkills, setMissingSkills] = useState([]);
// //   const [matchPercent, setMatchPercent] = useState(null);

// //   const analyzeSkills = () => {
// //     if (!skills.trim()) {
// //       alert("Please enter your skills");
// //       return;
// //     }

// //     if (!role) {
// //       alert("Please select a job role");
// //       return;
// //     }

// //     const userSkills = skills
// //       .toLowerCase()
// //       .split(",")
// //       .map((s) => s.trim());

// //     const requiredSkills = roleSkillsMap[role];
// //     const missing = requiredSkills.filter(
// //       (skill) => !userSkills.includes(skill)
// //     );

// //     const matched = requiredSkills.length - missing.length;
// //     const percent = Math.round(
// //       (matched / requiredSkills.length) * 100
// //     );

// //     setMissingSkills(missing);
// //     setMatchPercent(percent);

// //     // 🔗 AUTO CONNECT WITH RESUME BUILDER
// //     localStorage.setItem("resumeSkills", skills);
// //     localStorage.setItem("targetRole", role);
// //   };

// //   return (
// //     <div className="skill-page">
// //       <div className="skill-card">
// //         <h2>Skill Analyzer</h2>

// //         <textarea
// //           placeholder="Enter your skills (comma separated)"
// //           value={skills}
// //           onChange={(e) => setSkills(e.target.value)}
// //         />

// //         <select value={role} onChange={(e) => setRole(e.target.value)}>
// //           <option value="" disabled>
// //             Select a Job Role
// //           </option>
// //           <option value="Frontend Developer">Frontend Developer</option>
// //           <option value="Backend Developer">Backend Developer</option>
// //           <option value="Data Scientist">Data Scientist</option>
// //           <option value="AI Engineer">AI Engineer</option>
// //           <option value="Software Engineer">Software Engineer</option>
// //         </select>

// //         <button onClick={analyzeSkills}>Analyze Skills</button>

// //         {matchPercent !== null && (
// //           <div className="result">
// //             <h3>Skill Match</h3>

// //             <div className="progress-bar">
// //               <div
// //                 className="progress"
// //                 style={{ width: `${matchPercent}%` }}
// //               ></div>
// //             </div>

// //             <p className="percent">{matchPercent}% Match</p>

// //             <h4>Missing Skills & Roadmap</h4>

// //             {missingSkills.length === 0 ? (
// //               <p className="success">🎉 You have all required skills!</p>
// //             ) : (
// //               <ul>
// //                 {missingSkills.map((skill, index) => (
// //                   <li key={index}>
// //                     <b>{skill}</b>
// //                     <p className="roadmap">
// //                       {roadmap[skill] || "Start with basics"}
// //                     </p>
// //                   </li>
// //                 ))}
// //               </ul>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default SkillAnalyzer;

// // // import Sidebar from "./components/Sidebar";
// // // import "./SkillAnalyzer.css";

// // // export default function SkillAnalyzer() {
// // //   return (
// // //     <div className="layout">
// // //       <Sidebar />

// // //       <div className="content">
// // //         <h2>Skill Analyzer</h2>

// // //         <textarea placeholder="Enter your skills here..." />
// // //         <button>Analyze</button>

// // //         <div className="result-box">
// // //           <p>AI suggestions will appear here.</p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// import React, { useState } from "react";
// import "./SkillAnalyzer.css";

// const roleSkillsMap = {
//   "Frontend Developer": ["html", "css", "javascript", "react", "git"],
//   "Backend Developer": ["node", "express", "mongodb", "sql"],
//   "Data Scientist": ["python", "sql", "machine learning", "statistics"],
//   "AI Engineer": ["python", "machine learning", "deep learning", "nlp"],
//   "Software Engineer": ["data structures", "algorithms", "oops", "git"],
// };

// const roadmap = {
//   html: "Learn HTML basics → Forms → Semantic HTML",
//   css: "CSS basics → Flexbox/Grid → Responsive design",
//   javascript: "JS basics → DOM → ES6 concepts",
//   react: "Components → Hooks → Projects",
//   python: "Syntax → Practice → Mini projects",
//   sql: "Queries → Joins → DB design",
//   "machine learning": "Math → Algorithms → ML projects",
//   "deep learning": "Neural networks → CNN/RNN → Projects",
//   nlp: "Text preprocessing → NLP models → Apps",
// };

// function SkillAnalyzer() {
//   const [skills, setSkills] = useState("");
//   const [role, setRole] = useState("");
//   const [missingSkills, setMissingSkills] = useState([]);
//   const [matchPercent, setMatchPercent] = useState(null);

//   const analyzeSkills = () => {
//     if (!skills.trim()) {
//       alert("⚠ Please enter your skills");
//       return;
//     }

//     if (!role) {
//       alert("⚠ Please select a job role");
//       return;
//     }

//     const userSkills = skills
//       .toLowerCase()
//       .split(",")
//       .map((s) => s.trim());

//     const requiredSkills = roleSkillsMap[role];

//     const missing = requiredSkills.filter(
//       (skill) => !userSkills.includes(skill)
//     );

//     const matched = requiredSkills.length - missing.length;
//     const percent = Math.round(
//       (matched / requiredSkills.length) * 100
//     );

//     setMissingSkills(missing);
//     setMatchPercent(percent);

//     // 🔗 Resume Builder ke liye auto-connect
//     localStorage.setItem("resumeSkills", skills);
//     localStorage.setItem("targetRole", role);
//   };

//   return (
//     <div className="skill-page">
//       <div className="skill-card">
//         <h2>Skill Analyzer</h2>

//         <textarea
//           placeholder="Enter your skills (comma separated)"
//           value={skills}
//           onChange={(e) => setSkills(e.target.value)}
//         />

//         <select
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//         >
//           <option value="">Select a Job Role</option>
//           {Object.keys(roleSkillsMap).map((r) => (
//             <option key={r} value={r}>
//               {r}
//             </option>
//           ))}
//         </select>

//         <button onClick={analyzeSkills}>
//           Analyze Skills
//         </button>

//         {matchPercent !== null && (
//           <div className="result">
//             <h3>Skill Match Result</h3>

//             <div className="progress-bar">
//               <div
//                 className="progress"
//                 style={{ width: `${matchPercent}%` }}
//               />
//             </div>

//             <p className="percent">
//               {matchPercent}% Match for {role}
//             </p>

//             <h4>Missing Skills & Roadmap</h4>

//             {missingSkills.length === 0 ? (
//               <p className="success">
//                 🎉 Great! You match all required skills.
//               </p>
//             ) : (
//               <ul>
//                 {missingSkills.map((skill, index) => (
//                   <li key={index}>
//                     <strong>{skill}</strong>
//                     <p className="roadmap">
//                       {roadmap[skill] || "Start with basics"}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SkillAnalyzer;


import React, { useState } from "react";
import "./SkillAnalyzer.css";

/* ================= AI DATA ================= */

const roleSkillsMap = {
  "Frontend Developer": ["html", "css", "javascript", "react", "git"],
  "Backend Developer": ["node", "express", "mongodb", "sql"],
  "AI Engineer": ["python", "machine learning", "deep learning", "nlp"],
  "Software Engineer": ["data structures", "algorithms", "oops", "git"],

  "Data Analyst": [
    "excel",
    "sql",
    "python",
    "power bi",
    "tableau",
    "statistics",
    "data visualization"
  ],

  "Data Engineer": [
    "python",
    "sql",
    "etl",
    "data warehousing",
    "apache spark",
    "hadoop",
    "aws"
  ],

  "Data Scientist": [
    "python",
    "statistics",
    "machine learning",
    "deep learning",
    "data visualization",
    "pandas",
    "numpy"
  ]
};

const roadmap = {
  html: "Learn HTML basics → Forms → Semantic HTML",
  css: "CSS fundamentals → Flexbox → Grid → Responsive design",
  javascript: "JS basics → DOM → ES6 → Async JS",
  react: "React basics → Hooks → State management → Projects",
  git: "Git basics → GitHub → Branching",
  node: "Node fundamentals → Express → REST APIs",
  express: "Routing → Middleware → Authentication",
  mongodb: "CRUD → Aggregation → Mongoose",
  sql: "Queries → Joins → Indexing",
  python: "Syntax → Practice → Projects",
  "machine learning": "ML algorithms → Scikit-learn → Projects",
  "deep learning": "Neural networks → CNN/RNN → TensorFlow",
  nlp: "Text preprocessing → NLP models → Applications",
  algorithms: "Sorting → Searching → Optimization",
  "data structures": "Arrays → Linked List → Trees → Graphs",
  oops: "Classes → Inheritance → Polymorphism",

  // New Skills for Data Roles
  excel: "Excel basics → Formulas → Pivot Tables → Dashboards",
  "power bi": "Data modeling → DAX → Interactive dashboards",
  tableau: "Data visualization → Dashboards → Storytelling",
  statistics: "Descriptive statistics → Probability → Hypothesis testing",
  "data visualization": "Charts → Graphs → Storytelling with data",
  pandas: "Data manipulation → Cleaning → Analysis",
  numpy: "Arrays → Mathematical operations → Linear algebra",
  etl: "Extract → Transform → Load → Data Pipelines",
  "data warehousing": "Star schema → Snowflake schema → OLAP",
  "apache spark": "RDDs → DataFrames → Distributed processing",
  hadoop: "HDFS → MapReduce → Hadoop Ecosystem",
  aws: "S3 → Redshift → Glue → EMR"
};

/* ================= COMPONENT ================= */

function SkillAnalyzer() {
  const [skills, setSkills] = useState("");
  const [role, setRole] = useState("");
  const [missingSkills, setMissingSkills] = useState([]);
  const [matchPercent, setMatchPercent] = useState(null);
  const [aiTips, setAiTips] = useState([]);

  const analyzeSkills = () => {
    if (!skills.trim()) {
      alert("Please enter your skills");
      return;
    }
    if (!role) {
      alert("Please select a job role");
      return;
    }

    const userSkills = skills
      .toLowerCase()
      .split(",")
      .map((s) => s.trim());

    const requiredSkills = roleSkillsMap[role];
    const missing = requiredSkills.filter(
      (skill) => !userSkills.includes(skill)
    );

    const matched = requiredSkills.length - missing.length;
    const percent = Math.round(
      (matched / requiredSkills.length) * 100
    );

    setMissingSkills(missing);
    setMatchPercent(percent);

    /* ===== AI IMPROVEMENT SUGGESTIONS ===== */
const tips = [];

if (percent < 50) {
  tips.push("Focus on fundamentals before advanced topics");
}

if (missing.includes("react")) {
  tips.push("Build 2-3 React projects to improve UI skills");
}

if (missing.includes("git")) {
  tips.push("Use GitHub daily to improve version control");
}

if (missing.includes("machine learning")) {
  tips.push("Start with small ML datasets and projects");
}

/* ===== Data Analyst Suggestions ===== */
if (missing.includes("excel")) {
  tips.push("Learn Excel formulas, Pivot Tables, and dashboards");
}

if (missing.includes("sql")) {
  tips.push("Practice SQL queries, joins, and aggregations");
}

if (missing.includes("power bi") || missing.includes("tableau")) {
  tips.push("Create interactive dashboards using Power BI or Tableau");
}

if (missing.includes("statistics")) {
  tips.push("Strengthen your statistics and probability concepts");
}

if (missing.includes("data visualization")) {
  tips.push("Practice storytelling using charts and graphs");
}

/* ===== Data Engineer Suggestions ===== */
if (missing.includes("etl")) {
  tips.push("Build ETL pipelines using Python and SQL");
}

if (missing.includes("data warehousing")) {
  tips.push("Learn data warehousing concepts like Star and Snowflake schemas");
}

if (missing.includes("apache spark")) {
  tips.push("Explore big data processing using Apache Spark");
}

if (missing.includes("hadoop")) {
  tips.push("Understand the Hadoop ecosystem and HDFS");
}

if (missing.includes("aws")) {
  tips.push("Learn cloud services such as AWS S3, Redshift, and Glue");
}

/* ===== Data Scientist Suggestions ===== */
if (missing.includes("pandas") || missing.includes("numpy")) {
  tips.push("Master data analysis using Pandas and NumPy");
}

if (missing.includes("deep learning")) {
  tips.push("Build neural network models using TensorFlow or PyTorch");
}

if (missing.includes("nlp")) {
  tips.push("Work on NLP projects like chatbots and sentiment analysis");
}

if (missing.includes("python")) {
  tips.push("Strengthen Python programming for data science applications");
}

setAiTips(tips);

    /* ===== AUTO CONNECT WITH RESUME BUILDER ===== */
    localStorage.setItem("resumeSkills", skills);
    localStorage.setItem("targetRole", role);
  };

  return (
    <div className="skill-page">
      <div className="skill-card">
        <h2>AI Skill Analyzer</h2>

        <textarea
          placeholder="Enter your skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="" disabled>
            Select Job Role
          </option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="AI Engineer">AI Engineer</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Data Analyst">Data Analyst</option>
            <option value="Data Engineer">Data Engineer</option>
             <option value="Data Scientist">Data Scientist</option>
        </select>

        <button onClick={analyzeSkills}>Analyze Skills</button>

        {matchPercent !== null && (
          <div className="result">
            <h3>Skill Match</h3>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${matchPercent}%` }}
              ></div>
            </div>

            <p className="percent">{matchPercent}% Match</p>

            <h4>Missing Skills & Roadmap</h4>

            {missingSkills.length === 0 ? (
              <p className="success">
                🎉 Excellent! You have all required skills.
              </p>
            ) : (
              <ul>
                {missingSkills.map((skill, index) => (
                  <li key={index}>
                    <b>{skill}</b>
                    <p className="roadmap">
                      {roadmap[skill] || "Start with basics"}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            {/* ===== AI IMPROVEMENT TIPS ===== */}
            {aiTips.length > 0 && (
              <>
                <h4>🤖 AI Improvement Suggestions</h4>
                <ul className="ai-tips">
                  {aiTips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SkillAnalyzer;
