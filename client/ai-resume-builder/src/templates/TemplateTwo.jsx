// // import "./TemplateTwo.css";

// // const TemplateTwo = ({ data }) => {
// //   return (
// //     <div className="template-two">
// //       <h1>{data.name}</h1>

// //       <section>
// //         <p><span className="label">Email:</span> {data.email}</p>
// //         <p><span className="label">Phone:</span> {data.phone}</p>
// //       </section>

// //       <section>
// //         <h3>Skills</h3>
// //         <p>{data.skills.join(", ")}</p>
// //       </section>

// //       <section>
// //         <h3>Experience</h3>
// //         {data.experience.length > 0
// //           ? data.experience.map((exp, i) => (
// //               <p key={i}>• {exp}</p>
// //             ))
// //           : <p>Fresher</p>}
// //       </section>

// //       <section>
// //         <h3>Education</h3>
// //         <p>{data.education}</p>
// //       </section>
// //     </div>
// //   );
// // };

// // export default TemplateTwo;

// export default function TemplateTwo({ data }) {
//   return (
//     <div className="template template-two">
//       <div className="header">
//         <h2>{data.name || "Your Name"}</h2>
//         <span>{data.email} | {data.phone}</span>
//       </div>

//       <section>
//         <h4>Professional Summary</h4>
//         <pre>{data.experience}</pre>
//       </section>

//       <section>
//         <h4>Skills</h4>
//         <ul>
//           {data.skills.split(",").map((s, i) => (
//             <li key={i}>{s.trim()}</li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// }

// import React from "react";

// export default function TemplateTwo({ data }) {
//   return (
//     <div
//       id="resume-template"
//       style={{
//         padding: "30px",
//         fontFamily: "Georgia",
//         background: "#f4f4f4",
//       }}
//     >
//       <h1 style={{ color: "#2c3e50" }}>{data.name}</h1>
//       <hr />

//       <p>{data.email} | {data.phone}</p>

//       <h2>About Me</h2>
//       <p>{data.summary}</p>

//       <h2>Technical Skills</h2>
//       <ul>
//         {data.skills.split(",").map((s, i) => (
//           <li key={i}>{s}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import "./TemplateTwo.css";
// export default function TemplateTwo({ data }) {
//   return (
//     <div style={{ padding: "20px", border: "2px dashed gray" }}>
//       <h1>{data.name}</h1>
//       <p>Email: {data.email}</p>
//       <p>Phone: {data.phone}</p>
//       <hr />
//       <p><b>Skills:</b> {data.skills}</p>
//       <p><b>Experience:</b> {data.experience}</p>
//     </div>
//   );
// }

// import React from "react";
// import "./TemplateTwo.css";

// const TemplateTwo = ({ data }) => {
//   return (
//     <div className="template-two">
//       <h2>{data.name || "Your Name"}</h2>
//       <p>{data.email}</p>

//       <h4>Experience</h4>
//       <p>{data.experience}</p>

//       <h4>Skills</h4>
//       <p>{data.skills}</p>
//     </div>
//   );
// };

// export default TemplateTwo;

// src/templates/TemplateTwo.jsx



import React from "react";
import "./Templates.css";

function TemplateTwo({ data }) {
  return (
    <div className="template template-two">
      <div className="header">
        <h1>{data.name}</h1>
        <span>{data.email} | {data.phone}</span>
      </div>

      <div className="section">
        <h3>Skills</h3>
        <div className="skill-tags">
          {data.skills.map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
      </div>

      <div className="section">
        <h3>Experience</h3>
        <p>{data.experience}</p>
      </div>
    </div>
  );
}

export default TemplateTwo;

