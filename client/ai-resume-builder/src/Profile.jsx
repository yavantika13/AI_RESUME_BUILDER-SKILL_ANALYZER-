// import { useEffect, useState } from "react";
// import { supabase } from "./supabase";
// import "./Profile.css";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const [name, setName] = useState("");
//   const [photoUrl, setPhotoUrl] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [msg, setMsg] = useState("");

//   /* ================= LOAD USER ================= */
//   useEffect(() => {
//     const loadUser = async () => {
//       const { data } = await supabase.auth.getUser();
//       const u = data.user;
//       setUser(u);
//       setName(u?.user_metadata?.name || "");
//       setPhotoUrl(u?.user_metadata?.photo || "");
//     };
//     loadUser();
//   }, []);

//   /* ================= UPDATE PROFILE ================= */
//   const updateProfile = async () => {
//     setLoading(true);
//     setMsg("");

//     const { error } = await supabase.auth.updateUser({
//       data: { name, photo: photoUrl },
//     });

//     if (error) {
//       setMsg("❌ " + error.message);
//     } else {
//       setMsg("✅ Profile updated successfully");
//     }
//     setLoading(false);
//   };

//   /* ================= UPLOAD PHOTO ================= */
//   const handlePhotoUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setLoading(true);
//     setMsg("");

//     const fileExt = file.name.split(".").pop();
//     const fileName = `${user.id}.${fileExt}`;
//     const filePath = `profiles/${fileName}`;

//     const { error: uploadError } = await supabase.storage
//       .from("avatars")
//       .upload(filePath, file, { upsert: true });

//     if (uploadError) {
//       setMsg("❌ Image upload failed");
//       setLoading(false);
//       return;
//     }

//     const { data } = supabase.storage
//       .from("avatars")
//       .getPublicUrl(filePath);

//     setPhotoUrl(data.publicUrl);
//     setMsg("✅ Photo uploaded, click Update Profile");
//     setLoading(false);
//   };

//   /* ================= CHANGE PASSWORD ================= */
//   const changePassword = async () => {
//     if (!newPassword) {
//       alert("Enter new password");
//       return;
//     }

//     setLoading(true);
//     setMsg("");

//     const { error } = await supabase.auth.updateUser({
//       password: newPassword,
//     });

//     if (error) {
//       setMsg("❌ " + error.message);
//     } else {
//       setMsg("✅ Password changed successfully");
//       setNewPassword("");
//     }
//     setLoading(false);
//   };

//   if (!user) return <p>Loading...</p>;

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         <h2>My Profile</h2>

//         {msg && <p className="profile-msg">{msg}</p>}

//         {/* PROFILE PHOTO */}
//         <div className="profile-photo">
//           <img
//             src={photoUrl || "https://via.placeholder.com/120"}
//             alt="profile"
//           />
//           <input type="file" onChange={handlePhotoUpload} />
//         </div>

//         {/* EMAIL */}
//         <div className="profile-field">
//           <label>Email</label>
//           <input value={user.email} disabled />
//         </div>

//         {/* NAME */}
//         <div className="profile-field">
//           <label>Name</label>
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <button onClick={updateProfile} disabled={loading}>
//           {loading ? "Saving..." : "Update Profile"}
//         </button>

//         {/* CHANGE PASSWORD */}
//         <div className="password-box">
//           <h3>Change Password</h3>
//           <input
//             type="password"
//             placeholder="New Password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//           />
//           <button onClick={changePassword} disabled={loading}>
//             Change Password
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;



// import { useEffect, useState } from "react";
// import { supabase } from "./supabase";
// import "./Profile.css";

// function Profile() {
//   const [user, setUser] = useState(null);
//   const [name, setName] = useState("");
//   const [photoUrl, setPhotoUrl] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [msg, setMsg] = useState("");

//   /* ================= LOAD USER ================= */
//   useEffect(() => {
//     const loadUser = async () => {
//       const { data, error } = await supabase.auth.getUser();

//       if (error) {
//         setMsg("❌ Failed to load user");
//         return;
//       }

//       const u = data.user;
//       setUser(u);
//       setName(u?.user_metadata?.name || "");
//       setPhotoUrl(u?.user_metadata?.photo || "");
//     };

//     loadUser();
//   }, []);

//   /* ================= UPDATE PROFILE ================= */
//   const updateProfile = async () => {
//     setLoading(true);
//     setMsg("");

//     const { error } = await supabase.auth.updateUser({
//       data: { name, photo: photoUrl },
//     });

//     if (error) {
//       setMsg("❌ " + error.message);
//     } else {
//       setMsg("✅ Profile updated successfully");
//     }

//     setLoading(false);
//   };

//   /* ================= UPLOAD PHOTO ================= */
//   const handlePhotoUpload = async (e) => {
//     if (!user) return;

//     const file = e.target.files[0];
//     if (!file) return;

//     setLoading(true);
//     setMsg("");

//     const fileExt = file.name.split(".").pop();
//     const fileName = `${user.id}.${fileExt}`;
//     const filePath = `profiles/${fileName}`;

//     const { error: uploadError } = await supabase.storage
//       .from("avatars")
//       .upload(filePath, file, { upsert: true });

//     if (uploadError) {
//       setMsg("❌ Image upload failed");
//       setLoading(false);
//       return;
//     }

//     const { data } = supabase.storage
//       .from("avatars")
//       .getPublicUrl(filePath);

//     setPhotoUrl(data.publicUrl);
//     setMsg("✅ Photo uploaded, click Update Profile");
//     setLoading(false);
//   };

//   /* ================= CHANGE PASSWORD ================= */
//   const changePassword = async () => {
//     if (!newPassword) {
//       alert("Enter new password");
//       return;
//     }

//     setLoading(true);
//     setMsg("");

//     const { error } = await supabase.auth.updateUser({
//       password: newPassword,
//     });

//     if (error) {
//       setMsg("❌ " + error.message);
//     } else {
//       setMsg("✅ Password changed successfully");
//       setNewPassword("");
//     }

//     setLoading(false);
//   };

//   if (!user) return <p className="profile-loading">Loading...</p>;

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         <h2>My Profile</h2>

//         {msg && <p className="profile-msg">{msg}</p>}

//         {/* PROFILE PHOTO */}
//         <div className="profile-photo">
//           <img
//             src={photoUrl || "https://via.placeholder.com/120"}
//             alt="profile"
//           />
//           <input type="file" onChange={handlePhotoUpload} />
//         </div>

//         {/* EMAIL */}
//         <div className="profile-field">
//           <label>Email</label>
//           <input value={user.email} disabled />
//         </div>

//         {/* NAME */}
//         <div className="profile-field">
//           <label>Name</label>
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <button onClick={updateProfile} disabled={loading}>
//           {loading ? "Saving..." : "Update Profile"}
//         </button>

//         {/* CHANGE PASSWORD */}
//         <div className="password-box">
//           <h3>Change Password</h3>
//           <input
//             type="password"
//             placeholder="New Password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//           />
//           <button onClick={changePassword} disabled={loading}>
//             Change Password
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;



import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  /* ================= LOAD USER ================= */
  useEffect(() => {
    const loadUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        setMsg("❌ Failed to load user");
        return;
      }

      const u = data.user;
      setUser(u);
      setName(u?.user_metadata?.name || "");
      setPhotoUrl(u?.user_metadata?.photo || "");
    };

    loadUser();
  }, []);

  /* ================= UPDATE PROFILE ================= */
  const updateProfile = async () => {
    setLoading(true);
    setMsg("");

    const { error } = await supabase.auth.updateUser({
      data: {
        name,
        photo: photoUrl,
      },
    });

    if (error) {
      setMsg("❌ " + error.message);
    } else {
      setMsg("✅ Profile updated successfully");
    }

    setLoading(false);
  };

  /* ================= UPLOAD PHOTO ================= */
  const handlePhotoUpload = async (e) => {
    if (!user) return;

    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setMsg("");

    const fileExt = file.name.split(".").pop();
    const filePath = `${user.id}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file, {
        upsert: true,
        contentType: file.type,
      });

    if (uploadError) {
      setMsg("❌ Image upload failed");
      setLoading(false);
      return;
    }

    const { data } = supabase.storage
      .from("avatars")
      .getPublicUrl(filePath);

    // Cache busting
    const publicUrl = `${data.publicUrl}?t=${Date.now()}`;

    // Update immediately in UI
    setPhotoUrl(publicUrl);

    // Save to user metadata
    await supabase.auth.updateUser({
      data: { photo: publicUrl },
    });

    setMsg("✅ Photo updated successfully");
    setLoading(false);
  };

  /* ================= CHANGE PASSWORD ================= */
  const changePassword = async () => {
    if (!newPassword) {
      alert("Enter new password");
      return;
    }

    setLoading(true);
    setMsg("");

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      setMsg("❌ " + error.message);
    } else {
      setMsg("✅ Password changed successfully");
      setNewPassword("");
    }

    setLoading(false);
  };

  if (!user) return <p className="profile-loading">Loading...</p>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>My Profile</h2>

        {msg && <p className="profile-msg">{msg}</p>}

        {/* PROFILE PHOTO */}
        <div className="profile-photo">
          <img
            src={photoUrl || "https://via.placeholder.com/120"}
            alt="profile"
          />
          <input type="file" accept="image/*" onChange={handlePhotoUpload} />
        </div>

        {/* EMAIL */}
        <div className="profile-field">
          <label>Email</label>
          <input value={user.email} disabled />
        </div>

        {/* NAME */}
        <div className="profile-field">
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button onClick={updateProfile} disabled={loading}>
          {loading ? "updating..." : "Update Profile"}
        </button>

        {/* CHANGE PASSWORD */}
        <div className="password-box">
          <h3>Change Password</h3>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={changePassword} disabled={loading}>
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
