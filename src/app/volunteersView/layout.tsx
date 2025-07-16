import Navbar from "@/app/components/Navbar";
import { House, Bone, Dog, Squirrel, LogOut } from "lucide-react";
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
    lucide: <Bone />,
    link: "https://www.defensedelanimal.fr/wp-content/uploads/2022/03/Guide-de-la-belle-adoption-WEB.pdf",
  },
  {
    text: "Devenir bénévole",
    lucide: <Squirrel />,
    link: "/volunteersView/beVolunteer",
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
