"use client";

import { useRouter } from "next/navigation";
import Button from "./UI/Button";
import Input from "./UI/Input";
import axios from "axios";
import { useState } from "react";

export default function FormSignUp() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    phone: "",
    city: "",
    zipcode: "",
    birthdate: "",
    motivation: "",
  });
  const [message, setMessage] = useState("Vous êtes connecté.e");

  const handleChange = (e: any) => {
    console.log(form)
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/users/create/", form);
      setMessage("Compte créé avec succès !");
      router.push("/logIn");
    } catch (err: any) {
      setMessage("Erreur : " + JSON.stringify(err.response.data));
    }
  };

  return (
    <>
      <main className="flex flex-col items-center gap-1 mt-[22px] border-1 p-5 rounded-md">
        <h2>Créer un compte</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 items-center"
        >
          <div className="flex flex-col gap-1">
            <Input
              name="firstname"
              type="text"
              placeholder="Prénom"
              onChange={handleChange}
            />
            <Input
              name="lastname"
              type="text"
              placeholder="Nom"
              onChange={handleChange}
            />

            <Input
              name="password"
              type="password"
              placeholder="Mot de passe"
              onChange={handleChange}
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <Input
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
            />
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
