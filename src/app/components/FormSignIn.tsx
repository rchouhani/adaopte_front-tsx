"use client";

import { useState } from "react";
import axios from "axios";

export default function FormSignIn() {
  //   const [password, setPassword] = useState<string>();
  //   const [mail, setMail] = useState<string>();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/register/", form);
      setMessage("Compte créé avec succès !");
    } catch (err: any) {
      setMessage("Erreur : " + JSON.stringify(err.response.data));
    }
  };
//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();

//     const response = await fetch("");
//     const data = await response.json();
//     console.log(data);
//   }
  return (
    <div>
      <h1>Créer un compte</h1>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Nom d'utilisateur" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Mot de passe" onChange={handleChange} />
        <button type="submit">S'inscrire</button>
      </form>
      <p>{message}</p>
    </div>
  );
//   return (
//     <form onSubmit={handleSubmit} className="flex flex-row gap-1">
//       <label>Mail :</label>
//       <input
//         className="border border-1 border-black rounded-sm"
//         type="text"
//         id="mail"
//         name="mail"
//         required
//         value={mail}
//         onChange={(e) => setMail(e.target.value)}
//         placeholder="mets ton mail"
//       />

//       <label>Password :</label>
//       <input
//         className="border border-1 border-black rounded-sm"
//         type="password"
//         id="password"
//         name="password"
//         required
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password 🔏"
//       />

//       <button className="border border-1 rounded-sm" type="submit">
//         Connexion
//       </button>
//     </form>
//   );
}
