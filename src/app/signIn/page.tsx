// import { useEffect } from "react";
import Banner from "../components/Banner";

import { Amatic_SC } from "next/font/google";
import FormSignIn from "../components/FormSignIn";
import { Home, LogIn, Handshake, PersonStanding, Dog } from "lucide-react";
import Navbar from "@/app/components/Navbar";

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

const items = [
  {
    text: "Accueil",
    lucide: <Home />,
    link: "/",
  },
  {
    text: "J'adopte",
    lucide: <Dog />,
    link: "/volunteersView/searchPet",
  },
  {
    text: "Je deviens bénévole",
    lucide: <PersonStanding />,
    link: "/volunteersView/beVolunteer",
  },
  {
    text: "Je donne",
    lucide: <Handshake />,
    link: "/volunteersView/donation",
  },
  {
    text: "Je me connecte",
    lucide: <LogIn />,
    link: "/SignIn",
  },
];

export default function SignIn() {
  return (
    <main className={`${amatic.variable} relative aspect-[16/9]`}>
      <Navbar items={items} />
      <Banner
        src="/assets/login_adoption.webp"
        alt="image bannière"
        title="Je me connecte"
        paragraph="Merci de bien entrer ton pseudo et ton mot de passe"
      />

      <FormSignIn/>
    </main>
  );
}
