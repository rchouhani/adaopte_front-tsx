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
