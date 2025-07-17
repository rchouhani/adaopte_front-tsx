import Banner from "@/app/components/Banner";
import GuideCard from "@/app/components/GuideCard";

import { Amatic_SC } from "next/font/google";

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

export default function Guide() {
  return (
    <main className={`${amatic.variable}`}>
      <Banner
        src="/assets/guide-img.webp"
        alt="image bannière"
        title="Êtes vous réellement prêt à adopter un animal ?"
        paragraph="En adoptant un animal de compagnon dans un des refuges indépendants, vous lui offrez une nouvelle vie et une chance d'être enfin heureux."
      />
      <h2 className="flex justify-center">
        Quelques étapes à savoir avant d'adopter{" "}
      </h2>
      <section>
        <GuideCard
          step="1"
          title="🤔 Être prêt"
          paragraph="Adopter un animal n'est pas à prendre à la légère, c'est un acte réfléchi et responsable. 
        Si La loi confère à L'animal le statut d'être sensible, son bonheur et sa santé n'en dépendent pas moins de vous. 
        L'animal n'est pas un objet. Il vous apportera beaucoup de joie, mais aussi quelques contraintes, que vous devez anticiper."
        />
        <GuideCard
          step="2"
          title="💰 Les dépenses à prévoir"
          paragraph="Le montant demandé lors d'une adoption est une contribution aux frais conséquents liés à l'identification, la vaccination, la stérilisation. 
        Cette participation contribue aussi à la prise en charge des animaux de l'association, nous permettant ainsi de poursuivre nos missions et de sauver de 
        nombreux animaux en détresse."
        />
        <GuideCard
          step="3"
          title="🤗 L'accueil"
          paragraph="S'il y a souvent des coups de foudre lors de l'adoption, il se peut aussi que vous emmeniez un animal qui a connu beaucoup de peine.
        En tant qu'adoptants, vous devez être patients et ne pas négliger le temps d'adaptation. 
        Certains de nos pensionnaires n'ont en effet qu'une idée en tête : s'échapper pour retrouver leur ancienne maison et leurs anciens maîtres."
        />
        <GuideCard
          step="4"
          title="🩺 Prendre soin de sa santé"
          paragraph="Traitez votre animal régulièrement contre les parasites externes, c'est éviter de nombreux problèmes.  Parasites, vaccinations, hygiène, à vous de
        chouchouter votre nouvel animal en prenant soin de lui : oreilles, griffes, dents... à vous de veiller à ce que sa toilette soit nickel."
        />
        <GuideCard
          step="5"
          title="♥️ L'éducation"
          paragraph="Les premiers jours à la maison du chat, afin de lui faciliter son adoption, il est préférable de lui réserver une pièce. Il prendra ses marques sans avoir peur.
        S'il fait une bêtise, dites-lui 'NON' d'une voix ferme et s'il persiste, le vaporisateur d'eau est efficace pour le dissuader. Pour les chiens, surtout ceux ayant changé de foyers plusieurs
        fois, ils ont beaucoup de problèmes à résoudre : apprendre à aimer leur nouvelle famille, comprendre et apprendre les nouvelles règles, se remémorer les 'bonnes manières'. Leur donner un cadre clair 
        est indispensable pour retrouver bien-être est apaisement."
        />
        <p className="p-5">
          Pour en apprendre davantage, n'hésitez pas à vous rendre sur ce lien :{" "}
          <a
            href="https://www.defensedelanimal.fr/wp-content/uploads/2022/03/Guide-de-la-belle-adoption-WEB.pdf"
            target="blank"
            className="underline font-extrabold italic"
          >
            {" "}
            Le Guide complet de l'adoption.
          </a>{" "}
          <br />
          Toutes les étapes y sont détaillées et plus encore. Sinon, n'hésitez
          pas à nous contacter directement, nous prendrons le temps de bien tout
          vous expliquer.
        </p>
      </section>
   
      <section className="mt-[20px]">
        <h4 className="text-center underline p-[30px]">
          Je souhaite soumettre une demande d'adoption
        </h4>
      </section>
    </main>
  );
}
