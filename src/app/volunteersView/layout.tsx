
import Navbar from "@/app/components/Navbar";
import { House, Bone, Dog, Squirrel } from "lucide-react";
import type { ReactNode } from "react";
import Footer from "../components/Footer";

const items = [
  {
    text: "Accueil",
    lucide: <House />,
    link: "/",
  },
  {
    text: "J'adopte",
    lucide: <Bone />,
    link: "/adopt",
  },
  {
    text: "Guide de l'adoption",
    lucide: <Dog />,
    link: "/dogs",
  },
  {
    text: "Devenir bénévole",
    lucide: <Squirrel />,
    link: "/dogs",
  }
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
      <Footer/>
    </>
  );
}
