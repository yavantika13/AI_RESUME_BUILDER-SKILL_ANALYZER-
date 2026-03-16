// import { useState } from "react";
// import { supabase } from "./supabase"; // correct path if file is in src/
// import "./signup.css";  // <-- ADD THIS

// function Signup() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     const { data, error } = await supabase.auth.signUp({
//       email,
//       password,
//     });

//     if (error) {
//       setMessage(error.message);
//     } else {
//       setMessage("✔ Signup successful! Check your email for verification.");
//     };
//     setLoading(false);
//   };
//   return (
//     <div className="signup-container">
//       <div className="signup-card">

//         <h2 className="signup-title">Create Account</h2>

//         {message && <p className="signup-message">{message}</p>}

//         <form onSubmit={handleSignup}>
//           <label>Email</label>
//           <input
//             type="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button type="submit" disabled={loading}>
//             {loading ? "Creating Account..." : "Sign Up"}
//           </button>
//         </form>
//         <p className="signup-login">
//           Already have an account?{" "}
//           <a href="/login">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// }
// export default Signup;

// import React from "react";
// import "./Signup.css";
// import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// const Signup = () => {

//    const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = () => {
//     if (!email || !password) {
//       alert("Email & Password required");
//       return;
//     }
//   }
//   return (
//     <div className="signup-wrapper">
//       <div className="signup-card">

//         <button className="close-btn">×</button>

//         <h2 className="signup-title">Sign Up</h2>

//         {/* Social Login */}
//         <button className="social-btn google">
//           <FaGoogle /> Continue with Google
//         </button>

//         <button className="social-btn facebook">
//           <FaFacebookF /> Continue with Facebook
//         </button>

//         <button className="social-btn apple">
//           <FaApple /> Continue with Apple
//         </button>

//         <div className="divider">or</div>

//         {/* Form */}
//         <input type="text" placeholder="Name" />
//         <input type="email" placeholder="Email" />
//         <input type="password" placeholder="Password" />

//         <button className="signup-btn"  onClick={handleSignup}>Sign Up</button>

//         <p className="login-text">
//           Already have an account? <Link to="/login">Log In</Link>
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Signup;



import React, { useState } from "react";
import "./Signup.css";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    // 🔹 FRONTEND DEMO SAVE (optional)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name, email });
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Signup Successful");
    navigate("/login");
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">

        <button className="close-btn" type="button">×</button>

        <h2 className="signup-title">Sign Up</h2>

        {/* Social Login */}
        <button className="social-btn google" type="button">
          <FaGoogle /> Continue with Google
        </button>

        <button className="social-btn facebook" type="button">
          <FaFacebookF /> Continue with Facebook
        </button>

        <button className="social-btn apple" type="button">
          <FaApple /> Continue with Apple
        </button>

        <div className="divider">or</div>

        {/* Form */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* IMPORTANT: type="button" */}
        <button
          className="signup-btn"
          type="button"
          onClick={handleSignup}
        >
          Sign Up
        </button>

        <p className="login-text">
          Already have an account? <Link to="/login">Log In</Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;
