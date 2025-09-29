"use client";
import { useRouter } from "next/navigation";

import AnimalsHomePage from "./components/AnimalsHomePage";
import Banner from "./components/Banner";
import LastQuestion from "./components/LastQuestion";
import QuestionsArea from "./components/QuestionsArea";
import { Home, LogIn, Handshake, PersonStanding, Dog } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";

import { Amatic_SC } from "next/font/google";
import Button from "./components/UI/Button";

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
    text: "Bénévole/Adoptant",
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
    link: "/signIn",
  },
];

export default function Page() {
  const router = useRouter();

  const cardsContent = [
    {
      title: "🔎",
      subtitle: "1. Trouver votre compagnon",
      paragraph:
        "Parcourez notre base de données d'animaux disponibles et utilisez nos filtres pour trouver celuiqui correspond à votre mode de vie.",
    },
    {
      title: "📝",
      subtitle: "2. Remplissez une demande",
      paragraph:
        "Soumttez votre formulaire d'adoption pour l'animal qui vous intéresse. Nous examinerons chaque demande avec soin.",
    },
    {
      title: "👋🏾",
      subtitle: "3. Rencontrez l'animal",
      paragraph:
        "Visitez le refuge pour rencontrer l'animal et voir si vous êtes compatible. C'est une étape essentielle du processus.",
    },
    {
      title: "🏠",
      subtitle: "4. Bienvenue à la maison",
      paragraph:
        "Une fois votre demande approuvée, vous pouvez accueillir votre nouvel.le ami.e chez vous. Nous restons disponibles pour vous conseiller.",
    },
  ];

  return (
    <main className={`${amatic.variable}`}>
      <Navbar items={items} />
      <div className="relative">
                <Link href={'/admin/manageVolunteers'} className="bg-red-500 p-2 rounded-sm">
        <button
        >Vers Admin MV</button>
        </Link>
        <Banner
          src="/assets/background.jpg"
          alt="image bannière"
          title="Donnons-leur autant qu'ils nous apportent"
          paragraph="Chaque jour, des milliers d'animaux attendent une famille aimante. Trouvez votre compagnon idéal parmi nos animaux disponibles à l'adoption."
        />
      </div>

      <AnimalsHomePage />

      <QuestionsArea
        title="Comment ça marche"
        subtitle="Adopter un animal est un enfagement sérieux et à long terme. Voici notre processus d'adoption en quelques étapes simples."
        cards={cardsContent}
      />

      <LastQuestion
        title="Prêt.e à changer une vie ?"
        subtitle="Adoptez, partagez,soutenez... Chaque geste compte. Que vous ouvriez votre foyer ou votre coeur, vous pouvez offrir une seconde chance à un animal abandonné."
      >
        <Button
          label="Adopter un animal"
          onClick={() => router.push("/volunteersView/guide")}
          classes=" bg-[#333] hover:bg-[#8e8d8d]"
        />
        <Button
          label="Faire un don 🫶🏽"
          onClick={() => router.push("/volunteersView/donation")}
          classes=" bg-[#e74c3c] hover:bg-[#ff6d38]"
        />

        <Button
          label="Devenir bénévole"
          onClick={() => router.push("/volunteersView/beVolunteer")}
          classes=" bg-[#00a652] hover:bg-[#6fc59a]"
        />
      </LastQuestion>
    </main>
  );
}
