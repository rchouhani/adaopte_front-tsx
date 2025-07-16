"use client";

import { register } from "../lib/api/authUser";
import { useRouter } from "next/navigation";
import Button from "./UI/Button";
import Input from "./UI/Input";
import axios from "axios";
import { useState } from "react";

// type FormSignUpProps = {
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// };

export default function FormSignUp() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    // phone: "",
    // city: "",
    // zipcode: "",
    // birthdate: "",
    // motivation: "",
  });
  const [message, setMessage] = useState("Vous êtes connecté.e");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("🦉🦉", form);
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
    console.log(e.target.value, e.target.name, e.currentTarget.value);
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("📤 Données envoyées au backend :", form);

    const response = await register({
      email: form.email,
      password: form.password,
      name: form.name,
    });
    console.log("🤬🤬", form);

    if (response.error) {
      console.error("Erreur:", response.error);
      setMessage(`Erreur : ${response.error}`);
    } else {
      console.log("Succès:", response.message);
      setMessage("Compte créé avec succès !");
      router.push("/signIn");
    }
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:8000/api/users/create/", form);
  //     setMessage("Compte créé avec succès !");
  //     router.push("/logIn");
  //   } catch (err) {
  //     if (axios.isAxiosError(err)) {
  //       setMessage("Erreur : " + JSON.stringify(err.response?.data));
  //     } else {
  //       setMessage("Une erreur inconnue est survenue.");
  //     }
  //   }
  // };

  return (
    <>
      <main className="flex flex-col items-center gap-1 mt-[22px] border-1 p-5 rounded-md">
        <h2>Créer un compte</h2>
        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-3 items-center"
        >
          <div className="flex flex-col gap-1">
            <div>Coucou</div>
            {/* <Input
              name="firstname"
              type="text"
              placeholder="Prénom"
              onChange={handleChange}
              value={form.firstname}
            /> */}
            <Input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={form.email}
            />
            <Input
              name="password"
              type="password"
              placeholder="Mot de passe"
              onChange={handleChange}
              value={form.password}
            />
            <Input
              name="name"
              type="text"
              placeholder="Nom"
              onChange={handleChange}
              value={form.name}
            />

            {/* <Input
              name="phone"
              type="text"
              placeholder="Téléphone"
              onChange={handleChange}
            />
            <Input
              name="city"
              type="text"
              placeholder="Ville"
              onChange={handleChange}
            />
            <Input
              name="zipcode"
              type="text"
              placeholder="Code postal"
              onChange={handleChange}
            />
            <Input
              name="birthdate"
              type="date"
              placeholder="Date de naissance"
              onChange={handleChange}
            />
            <Input
              name="motivation"
              type="text"
              placeholder="Votre motivation"
              onChange={handleChange}
            /> */}
          </div>
          <Button
            type="submit"
            label="> Créer <"
            classes=" mt-[20px] bg-[#333] text-white rounded-[20px] h-[45px] w-auto px-3 hover:bg-[#8e8d8d]"
          />
          <p>{message}</p>
        </form>
      </main>
    </>
  );
}
