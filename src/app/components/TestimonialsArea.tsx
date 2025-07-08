import TestimonialsCard from "./TestimonialsCard";

export default function TestimonialsArea() {
  return (
    <>
      <main className="flex flex-col items-center text-center p-[30px] bg-(--bg-homepage) -mt-[20px] pt-[30px]">
        <h2>Témoignages de bénévoles</h2>
        <h3>
          Découvrez ce que nos bénévoles partagent de leur expérience avec
          Adaopte
        </h3>
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
