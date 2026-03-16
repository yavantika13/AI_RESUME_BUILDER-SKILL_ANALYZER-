import { useState } from "react";
import { supabase } from "./supabase";
import "./reset-password.css";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error) setMessage(error.message);
    else setMessage("Password updated successfully!");
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="password"
          placeholder="New Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Update Password</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
