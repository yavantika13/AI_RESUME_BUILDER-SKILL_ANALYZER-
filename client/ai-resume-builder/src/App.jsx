// // import { useEffect } from "react";
// // import { supabase } from "./supabase.js";
// // import Signup from "./signup.jsx";

// // function App() {
// //   useEffect(() => {
// //     const testConnection = async () => {
// //       const { data, error } = await supabase.from("test").select("*");

// //       if (error) {
// //         console.log("❌ Supabase Error:", error);
// //       } else {
// //         console.log("✅ Supabase Connected!");
// //         console.log("Data:", data);
// //       }
// //     };
// //     testConnection();
// //   }, []);

// //   return (
// //     <h1 className="text-3xl font-bold text-green-600 text-center mt-10">
// //       Supabase Connection Test
// //     </h1>
// //   );
// // }
// // export default App;

// // import Home from "./Home.jsx";
// // import Signup from "./signup.jsx";
// // import Login from "./login.jsx";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Home/>} />
     
// //         <Route path="/signup" element={<Signup />} />
// //         <Route path="/login" element={<Login/>} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;


// import Home from "./Home.jsx";
// import Signup from "./signup.jsx";
// import Login from "./login.jsx";
// import ResetPassword from "./reset-password.jsx";
// import Dashboard from "./Dashboard.jsx";
// import ResumeBuilder from "./ResumeBuilder";
// import SkillAnalyzer from "./SkillAnalyzer";
// import MyResumes from "./MyResumes";
// import ResumeHistory from "./ResumeHistory";
// import Profile from "./Profile";


// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Home page */}
//         <Route path="/" element={<Home />} />

//         {/* Login page */}
//         <Route path="/login" element={<Login />} />

//         {/* Signup page */}
//         <Route path="/signup" element={<Signup />} />

//            {/* Dashboard */}
//         <Route path="/dashboard" element={<Dashboard />} />

//         <Route path="/reset-password" element={<ResetPassword />} />
             
//         <Route path="/resume-builder" element={<ResumeBuilder />} />

//         <Route path="/skill-analyzer" element={<SkillAnalyzer />} />
        
//         <Route path="/my-resumes" element={<MyResumes />} />

//           {/* <Route path="/" element={<ResumeBuilder />} /> */}
//         <Route path="/history" element={<ResumeHistory />} />

//          {/* ✅ ADD THIS */}
//         <Route path="/resume-history" element={<ResumeHistory />} />
//       </Routes>
    
//          <Route
//           path="/profile" element={<ProtectedRoute> <Profile />
//             </ProtectedRoute>
//           }
              
//         />
     
//       {/* </Routes> */}
//     </BrowserRouter>
//   );
// }

// export default App;



import Home from "./Home.jsx";
import Signup from "./signup.jsx";
import Login from "./login.jsx";
import ResetPassword from "./reset-password.jsx";
import Dashboard from "./Dashboard.jsx";
import ResumeBuilder from "./ResumeBuilder.jsx";
import SkillAnalyzer from "./SkillAnalyzer.jsx";
import MyResumes from "./MyResumes.jsx";
import ResumeHistory from "./ResumeHistory.jsx";
import Profile from "./Profile.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Resume */}
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/my-resumes" element={<MyResumes />} />
        <Route path="/resume-history" element={<ResumeHistory />} />

        {/* Skill */}
        <Route path="/skill-analyzer" element={<SkillAnalyzer />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
