import { useState } from "react";
import { supabase } from "./supabase";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgot = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/reset-password",
    });

    if (error) setMessage("❌ " + error.message);
    else setMessage("✅ Check your email!");
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Forgot Password</h2>

      <form onSubmit={handleForgot}>
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send Link</button>
      </form>

      <p>{message}</p>
    </div>
  );
}