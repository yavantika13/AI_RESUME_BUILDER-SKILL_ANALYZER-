// import { useState } from "react";
// import { supabase } from "./supabase";   // correct path
// import "./login.css";                    // CSS file import

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       setMessage(error.message);
//     } else {
//       setMessage("✔ Login successful!");
//       // Redirect to dashboard (optional)
//       window.location.href = "/dashboard";
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">

//         <h2 className="login-title">Welcome Back</h2>

//         {message && <p className="login-message">{message}</p>}

//         <form onSubmit={handleLogin}>

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
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <p className="login-bottom-text">
//           Don't have an account?{" "}
//           <a href="/signup">Signup</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import { supabase } from "./supabase"; // path correct
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { data, error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (error) {
        setMessage("❌ " + error.message);
        setLoading(false);
        return;
      }

      // ✅ Login success
      setMessage("✅ Login successful!");
      setLoading(false);

      // redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      setMessage("❌ Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>

        {message && (
          <p
            className={`login-message ${
              message.includes("❌") ? "error" : "success"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

            {/* ✅ NEW: Forgot Password */}
          <p
            className="forgot-password"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </p>

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="login-bottom-text">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
