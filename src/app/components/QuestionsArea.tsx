import QuestionsCard from "./QuestionsCard";

import { cardsContent } from "../volunteersView/beVolunteer/page";

export default function QuestionsArea() {
  return (
    <main className="flex flex-col items-center text-center p-[30px] bg-(--light-color) -mt-[70px] pt-[70px]">
      <h2>Comment ça marche ?</h2>
      <h3>
        Adopter un animal est un engagement sérieux et à long terme. Voici votre
        processus en quelques étapes simples.
      </h3>

      <section className="flex flex-row gap-4">
        {cardsContent.map((card, index) => 
        <QuestionsCard 
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          paragraph={card.paragraph}
        />
        )}
        
      </section>
    </main>
  );
}
