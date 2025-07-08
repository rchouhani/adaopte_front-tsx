'use client'

import AnimalGrid from "@/app/components/AnimalGrid";
import { Amatic_SC } from "next/font/google";
import { ReactNode, useEffect, useState } from "react";

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

export default function SearchPet(props: { width: number, height: number }) {
  return (
    <AnimalGrid />
  );
}