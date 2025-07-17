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
<<<<<<< HEAD
    lucide: <Dog />,
    link: "/volunteersView/guide",
=======
    lucide: <Bone />,
    link: "https://www.defensedelanimal.fr/wp-content/uploads/2022/03/Guide-de-la-belle-adoption-WEB.pdf",
>>>>>>> d5a1c7ed83c045ed91efc78dc090fd55ff302424
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
