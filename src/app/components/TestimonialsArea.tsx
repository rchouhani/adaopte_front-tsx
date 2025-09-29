import TestimonialsCard from "./TestimonialsCard";

export default function TestimonialsArea() {
  return (
    <>
      <main className="flex flex-col items-center text-center p-[10px] bg-(--bg-homepage)">
        <h2>Témoignages de bénévoles</h2>
        <h3>
          Découvrez ce que nos bénévoles partagent de leur expérience avec
          Adaopte
        </h3>
         <TestimonialsCard
          image="/assets/d640719e-1ef6-4190-90b6-91169a14badc.jpg"
          title="Edwige S."
          subtitle="Bénévole depuis 2 ans"
          paragraph="La cause animal a toujours été une action qui m'anime. Être bénévole chez Adaopte me permet de faire quelque chose de concret. Que ça soit le bien-être
            des animaux ou le conseil auprès des nouveaux bénévoles et adoptants, j'adore être là et faire ce que je fais."
        />
        <TestimonialsCard
          image="/assets/fely.jpeg"
          title="Faty D."
          subtitle="Bénévole depuis 3 ans"
          paragraph="J'ai commencé à m'occuper d'Ely un petit chaton du refuge. Il m'a fait confiance puis m'a choisi. 
            Aujourd'hui, il vit avec moi car on s'est tous les deux adoptés, ça m'a donné encore plus envie de continuer mes missions de bénévole au sein d'Adaopte."
        />
        <TestimonialsCard
          image="/assets/omid-armin-yisZonvqh54-unsplash.jpg"
          title="Claire M."
          subtitle="Bénévole depuis 1 an"
          paragraph="J'ai commencé à m'occuper de Louna, une chienne timide arrivée au refuge. Petit à petit, elle m'a fait confiance. 
            Aujourd'hui, elle a été adoptée, mais je garde un souvenir inoubliable de notre complicité. 
            Être bénévole chez Adaopte, c'est offrir de l'amour... et en recevoir énormément."
        />
        <TestimonialsCard 
          image="/assets/christian-buehner-DItYlc26zVI-unsplash.jpg"
          title="Juan R."
          subtitle="Bénévole depuis 8 mois"
          paragraph="Je voulais m'investir concrètement pour une cause qui me tient à coeur. 
            Avec Adaopte, j'ai découvert le refuge, les histoires de chaque animal et une équipe soudée.
            Marcher avec les chiens, jouer avec les chats, les voir progresser... C'est profondément gratifiant."/>
      </main>
    </>
  );
}
