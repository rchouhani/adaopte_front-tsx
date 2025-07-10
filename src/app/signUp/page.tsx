'use client'

import FormSignUp from "../components/FormSignUp";
import { Amatic_SC } from "next/font/google";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Home, LogIn, Handshake, PersonStanding, Dog } from "lucide-react";
import Navbar from "@/app/components/Navbar";

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

const items = [
  {
    text: "Accueil",
    lucide: <Home />,
    link: "/",
  },
  {
    text: "J'adopte",
    lucide: <Dog />,
    link: "/volunteersView/searchPet",
  },
  {
    text: "Je deviens bénévole",
    lucide: <PersonStanding />,
    link: "/volunteersView/beVolunteer",
  },
  {
    text: "Je donne",
    lucide: <Handshake />,
    link: "/volunteersView/donation",
  },
  {
    text: "Je me connecte",
    lucide: <LogIn />,
    link: "/SignIn",
  },
];

export default function SignUp() {
  const router = useRouter()
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>  {
    
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/register/", form);
      setMessage("Compte créé avec succès !");
      router.push("/");
    } catch (err: any) {
      setMessage("Erreur : " + JSON.stringify(err.response.data));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

  return (
    <main className={`${amatic.variable} relative aspect-[16/9]`}>
      <Navbar items={items} />

      <FormSignUp onChange={handleChange} />
    </main>
  );
}
