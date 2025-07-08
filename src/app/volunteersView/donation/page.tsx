"use client";

import Banner from "@/app/components/Banner";

import { Amatic_SC } from "next/font/google";
import { useState } from "react";
const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

export default function Donation() {
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    setAmount(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setMessage(`Adaopte vous remercie pour votre don et votre solidarité`);
  };

  return (
    <>
      <Banner
        src="/assets/banniere-don.jpg"
        alt="image bannière"
        title="Offrez un avenir aux animaux sans famille"
        paragraph="Prise en charge des animaux abandonnés ou maltraités, lutte contre les souffrances animales, campagnes de sensibilisation, actions auprès des pouvoirs publics pour faire progresser la cause animale…"
      />
      <main className="flex flex-col items-center text-center p-[30px] bg-(--bg-homepage) -mt-[20px] pt-[30px]">
        <h2>Je donne</h2>

        <form className="p-10" onSubmit={handleSubmit}>
          <input
            className="border rounded-lg flex gap-20 p-2"
            type="number"
            name="donationAmont"
            placeholder="Votre montant ici"
            onChange={handleChange}
          />
          <button >Valider</button>
        </form>
        <p>{message}</p>
      </main>
    </>
  );
}
