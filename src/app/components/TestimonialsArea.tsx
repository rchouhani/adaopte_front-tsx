import TestimonialsCard from "./TestimonialsCard";

export default function TestimonialsArea() {
  return (
    <>
      <main className="flex flex-col items-center text-center p-[30px] bg-(--bg-homepage) -mt-[20px] pt-[30px]">
        <h2>Témoignages de bénévoles</h2>
        <h3>
          Découvrez ce que nos bénévoles partagent de leur expérience avec Adaopte
        </h3>
        <TestimonialsCard
            image="/assets/omid-armin-yisZonvqh54-unsplash.jpg"
            title="Claire M."
            subtitle="Bénévole depuis 1 an"
            paragraph="J'ai "/>
      </main>
    </>
  );
}
