"use client";

import { Amatic_SC } from "next/font/google";

import Banner from "./components/Banner";
import AnimalsHomePage from "./components/AnimalsHomePage";
import QuestionsArea from "./components/QuestionsArea";
import LastQuestion from "./components/LastQuestion";
import Button from "./components/Button";

import { useRouter } from "next/navigation";

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});


export const cardsContent = [
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

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="relative">
        <Banner
          src="/assets/background.jpg"
          alt="image bannière"
          title="Donnons-leur autant qu'ils nous apportent"
          paragraph="Chaque jour, des milliers d'animaux attendent une famille aimante. Trouvez votre compagnon idéal parmi nos animaux disponibles à l'adoption."
        />
      </div>

      <AnimalsHomePage />

      <QuestionsArea />
      <section className="flex flex-col text-center">
        <LastQuestion
          title="Prêt.e à changer une vie ?"
          subtitle="Adoptez, partagez,soutenez... Chaque geste compte. Que vous ouvriez votre foyer ou votre coeur, vous pouvez offrir une seconde chance à un animal abandonné."
        />

        <div className="flex items-center gap-10">
          <Button
            label="Ajouter un animal"
            onClick={() => router.push("/adopt")}
            classes="bg-(--dark-color)"
          />
          <Button
            label="Faire un don 🫶🏽"
            onClick={() => router.push("/adopt")}
            classes=""
          />
          <Button
            label="Devenir bénévole"
            onClick={() => router.push("/beVolunteer")}
            classes=""
          />
        </div>
      </section>
    </>
  );
}
