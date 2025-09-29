"use client";

import Navbar from "@/app/components/Navbar";
import { House, Bone, Dog, PiggyBank, Home } from "lucide-react";
import { backEndUrl } from "../back-url";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React, { MouseEvent } from 'react';

const navBarItems = [
  {
    text: "Accueil",
    lucide: <Home />,
    link: "/",
  },
  {
    text: "Manage Adoptants",
    lucide: <Bone />,
    link: "/admin/manageAdoptants",
  },
  {
    text: "Manage Pets",
    lucide: <Dog />,
    link: "/admin/managePets",
  },
  {
    text: "Manage Volunteers",
    lucide: <House />,
    link: "admin/manageVolunteers",
  },
  {
    text: "See donations",
    lucide: <PiggyBank />,
    link: "/admin/seeDonatios",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const disconnect = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('je clique sur déconnecter')
    try {
      await axios.post(`${backEndUrl}api/logout/`);
      // const data = await res.json()

      console.log("🌠");

      setMessage("Vous êtes déconnecté");

      router.push("/");
    } catch (err) {
      console.log('je suis dans le catch')
      if (axios.isAxiosError(err)) {
        setMessage("Erreur : " + JSON.stringify(err.response?.data));
      } else {
        setMessage("Erreur inconnue");
      }
    }
  };

  return (
    <>
      <Navbar items={navBarItems} />
        <button onClick={disconnect} type="submit" className="bg-green-500 p-3 rounded-sm">Déconnexion</button>
      <p>{ message }</p>
      <main>{children}</main>
    </>
  );
}
