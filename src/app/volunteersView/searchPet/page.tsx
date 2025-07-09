'use client'

import AnimalGrid from "@/app/components/AnimalGrid";
import { Amatic_SC } from "next/font/google";

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

export default function SearchPet() {
  return (
    <main className={`${amatic.variable}`}>
    {/* <SearchBar /> */}
    <AnimalGrid />
    </main>
  );
}