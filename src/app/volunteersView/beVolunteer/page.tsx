"use client";

import Banner from "@/app/components/Banner";
import QuestionsArea from "@/app/components/QuestionsArea";
import LastQuestion from "@/app/components/LastQuestion";
import Button from "@/app/components/UI/Button";

import { useRouter } from "next/navigation";

import { Amatic_SC } from "next/font/google";
import DonationButton from "@/app/components/UI/DonationButton";
import ContactButton from "@/app/components/UI/ContactButton";
import FaqButton from "@/app/components/UI/FaqButton";

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

const cardsContentVolunteer = [
  {
    title: "🌱",
    subtitle: "Agir concrètement pour le bien-être animal",
    paragraph:
      "Chaque geste compte : un regard, une caresse, une balade... Vous contribuez à redonner confiance aux animaux abandonnés et à leur offrir une seconde chance.",
  },
  {
    title: "🧠",
    subtitle: "Développer des compétences précieuses",
    paragraph:
      "Apprenez à mieux comprendre les comportements animaux, renforcez votre patience, votre sens de l'observation et votre capacité à en prendre soin.",
  },
  {
    title: "👥",
    subtitle: "Rejoindre une communauté engagée",
    paragraph:
      "Intégrez un réseau solidaire de passionné.é.s, participez à des actions collectives et partagez des moments",
  },
  {
    title: "🌟",
    subtitle: "Donner du sens à votre temps libre",
    paragraph:
      "En vous impliquant chez Adaopte, vous transformez votre temps en véritable acte d'amour, de respect les animaux",
  },
];

export default function BeVolunteer() {
  const router = useRouter();

  return (
    <>
      <main className="relative aspect-[16/9]">
        <Banner
          src="/assets/alin-luna-8LfPXM6abRk-unsplash.jpg"
          alt="image bannière"
          title="Devenir bénévole"
          paragraph="Offrez votre temps, changez des vies. Chez Adaopte, chaque bénévole contribue à redonner espoir aux animaux en attente d'un foyer."
        />

        <QuestionsArea
          title="Pourquoi devenir bénévole ?"
          subtitle="Être bénévole chez Adaopte, c'est bien plus qu'un coup de main : c'est un engagement du coeur, qui change des vies - humaines et animales. "
          cards={cardsContentVolunteer}
        />

        <section className="flex flex-col text-center">
          <LastQuestion
            title="Des questions ?"
            subtitle="Nous sommes là pour répondre à toutes vos interrogations concernant le bénévolat chez Adaopte. N'hésitez pas à nous contacter pour en savoir sur notre démarche."
          >
            <FaqButton />
            <ContactButton />
          </LastQuestion>
        </section>
      </main>
    </>
  );
}
