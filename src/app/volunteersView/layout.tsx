import Navbar from "@/app/components/Navbar";
import { House, Bone, Dog, Squirrel } from "lucide-react";
import type { ReactNode } from "react";

const items = [
  {
    text: "Accueil",
    lucide: <House />,
    link: "/",
  },
  {
    text: "J'adopte",
    lucide: <Bone />,
    link: "/volunteersView/searchPet",
  },
  {
    text: "Guide de l'adoption",
    lucide: <Dog />,
    link: "/volunteersView/guide",
  },
  {
    text: "Devenir bénévole",
    lucide: <Squirrel />,
    link: "/volunteersView/beVolunteer",
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
