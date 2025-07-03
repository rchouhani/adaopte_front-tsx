import QuestionsCard from "./QuestionsCard";

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
  //   {
  //     title: "",
  //     subtitle: "",
  //     paragraph: ""
  //   }
];

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
