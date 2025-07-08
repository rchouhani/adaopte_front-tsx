'use client'

import FormSignUp from "../components/FormSignUp";
import { Amatic_SC } from "next/font/google";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../components/UI/Button";

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});
export default function SignUp() {
    const router = useRouter()
  const handleSubmit = async (e: any) => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleChange = (e: any) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/register/", form);
      setMessage("Compte créé avec succès !");
      router.push("/");
    } catch (err: any) {
      setMessage("Erreur : " + JSON.stringify(err.response.data));
    }
  };

  return (
    <>
      <FormSignUp onChange={console.log("hello")} />
    </>
  );
}
