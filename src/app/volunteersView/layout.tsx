import Navbar from "@/app/components/Navbar";
import { House, Dog, LogOut, Book } from "lucide-react";
import type { ReactNode } from "react";

const items = [
  {
    text: "Accueil",
    lucide: <House />,
    link: "/",
  },
  {
    text: "J'adopte",
    lucide: <Dog />,
    link: "/volunteersView/searchPet",
  },
  {
    text: "Guide de l'adoption",
    lucide: <Book />,
    link: "/volunteersView/guide",
  },
  {
    text: "Je me déconnecte",
    lucide: <LogOut />,
    link: "/signIn",
  },
];

export default function VolunteersViewLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Navbar items={items} />
      <main>{children}</main>
    </>
  );
}
