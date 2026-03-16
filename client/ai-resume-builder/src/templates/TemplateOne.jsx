// // import "./TemplateOne.css";

// // const TemplateOne = ({ data }) => {
// //   return (
// //     <div className="template-one">
// //       <h1>{data.name}</h1>
// //       <p>{data.email} | {data.phone}</p>

// //       <h3>Skills</h3>
// //       <ul>
// //         {data.skills.map((skill, i) => (
// //           <li key={i}>{skill}</li>
// //         ))}
// //       </ul>

// //       <h3>Experience</h3>
// //       <ul>
// //         {data.experience.length > 0
// //           ? data.experience.map((exp, i) => (
// //               <li key={i}>{exp}</li>
// //             ))
// //           : <li>Fresher</li>}
// //       </ul>

// //       <h3>Education</h3>
// //       <p>{data.education}</p>
// //     </div>
// //   );
// // };

// // export default TemplateOne;

// export default function TemplateOne({ data }) {
//   return (
//     <div className="template template-one">
//       <h1>{data.name || "Your Name"}</h1>
//       <p>{data.email}</p>
//       <p>{data.phone}</p>

//       <h3>Experience</h3>
//       <pre>{data.experience}</pre>

//       <h3>Skills</h3>
//       <p>{data.skills}</p>
//     </div>
//   );
// }

// import React from "react";

// export default function TemplateOne({ data }) {
//   return (
//     <div id="resume-template" style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>{data.name}</h1>
//       <p><b>Email:</b> {data.email}</p>
//       <p><b>Phone:</b> {data.phone}</p>

//       <h3>Profile</h3>
//       <p>{data.summary}</p>

//       <h3>Skills</h3>
//       <p>{data.skills}</p>
//     </div>
//   );
// }

// import "./TemplateOne.css";
// export default function TemplateOne({ data }) {
//   return (
//     <div style={{ padding: "20px", border: "2px solid #2563eb" }}>
//       <h2>{data.name}</h2>
//       <p>{data.email} | {data.phone}</p>
//       <h4>Skills</h4>
//       <p>{data.skills}</p>
//       <h4>Experience</h4>
//       <p>{data.experience}</p>
//     </div>
//   );
// }

// import React from "react";
// import "./TemplateOne.css";

// const TemplateOne = ({ data }) => {
//   return (
//     <div className="template-one">
//       <h1>{data.name || "Your Name"}</h1>
//       <p>{data.email} | {data.phone}</p>

//       <hr />

//       <h3>Experience</h3>
//       <p>{data.experience || "Your experience will appear here"}</p>

//       <h3>Skills</h3>
//       <p>{data.skills || "Your skills will appear here"}</p>
//     </div>
//   );
// };

// export default TemplateOne;

// src/templates/TemplateOne.jsx


import React from "react";
import "./Templates.css"

function TemplateOne({ data }) {
  return (
    <div className="template template-one">
      <h1>{data.name}</h1>
      <p>{data.email} | {data.phone}</p>

      <h3>Skills</h3>
      <ul>
        {data.skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <h3>Experience</h3>
      <p>{data.experience}</p>
    </div>
  );
}

export default TemplateOne;
