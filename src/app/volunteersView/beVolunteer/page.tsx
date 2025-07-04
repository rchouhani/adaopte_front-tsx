import Banner from "@/app/components/Banner";
import QuestionsArea from "@/app/components/QuestionsArea";
import LastQuestion from "@/app/components/LastQuestion";
import Button from "@/app/components/Button";

import { Amatic_SC } from "next/font/google";

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

export const cardsContent = [
  {
    title: "🌱",
    subtitle: "Agir concrètement pour le bien-être animal",
    paragraph:
    "Chaque geste compte : un regarde, une carsse"  
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
  }
];

export default function beVolunteer() {
  return (
    <>
      <div className="relative aspect-[16/9]">
        <Banner
          src="/assets/alin-luna-8LfPXM6abRk-unsplash.jpg"
          alt="image bannière"
          title="Devenir bénévole"
          paragraph="Offrez votre temps, changez des vies. Chez Adaopte, chaque bénévole contribue à redonner espoir aux animaux en attente d'un foyer."
        />

        <QuestionsArea />
        <LastQuestion
          title="Des questions ?"
          subtitle="Nous sommes là pour répondre à toutes vos interrogations concernant le bénévolat chez Adaopte. N'hésitez pas à nous contacter pour en savoir sur notre démarche."
        />
      </div>
    </>
  );
}
