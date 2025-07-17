'use client'

// import { register } from "../api/register/route"; // adapte le chemin selon ton projet
import FormSignUp from "../components/FormSignUp";
import { Amatic_SC } from "next/font/google";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Home, LogIn, Handshake, PersonStanding, Dog } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import { backEndUrl } from "../back-url";

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
  // const router = useRouter()
  // const [form, setForm] = useState({ email: "", password: "" });
  // const [message, setMessage] = useState("");



// const handleRegister = async () => {
//   const response = await register({
//     email: "test@example.com",
//     password: "motdepasse123",
//     firstname: "Jean",
//     lastname: "Dupont",
//   });

//   if (response.error) {
//     console.error("Erreur:", response.error);
//   } else {
//     console.log("Succès:", response.message);
//   }
// };
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>  {
    
  //   e.preventDefault();
  //   try {
      // const res = await axios.post(`${backEndUrl}api/register/`, form);
  //     setMessage("Compte créé avec succès !");
  //     router.push("/");
  //   } catch (err: any) {
  //     setMessage("Erreur : " + JSON.stringify(err.response.data));
  //   }
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setForm({ ...form, [e.target.name]: e.target.value });
  //   };

  return (
    <main className={`${amatic.variable} relative aspect-[16/9]`}>
      <Navbar items={items} />

      <FormSignUp/>
    </main>
  );
}
