import QuestionsCard, { QuestionsCardsProps } from "./QuestionsCard";

type QuestionsAreaProps = {
  title: string;
  subtitle: string;
  cards: QuestionsCardsProps[];
};
export default function QuestionsArea({
  title,
  subtitle,
  cards,
}: QuestionsAreaProps) {
  return (
    <main className="flex flex-col items-center text-center p-[30px] bg-(--light-color)">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>

      <section className="flex flex-row gap-4">
        {cards.map((card, index) => (
          <QuestionsCard
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            paragraph={card.paragraph}
          />
        ))}
      </section>
    </main>
  );
}
