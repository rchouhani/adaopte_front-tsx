export type QuestionsCardsProps = {
  title: string;
  subtitle: string;
  paragraph: string;
};

export default function QuestionsCard({
  title,
  subtitle,
  paragraph,
}: QuestionsCardsProps) {
  return (
    <article className="w-2/4 h-auto border border-white shadow-[0_5px_15px_rgba(0,0,0,0.1)] rounded-[20px]">
      <h4 className="p-[10px] text-[2em] text-center">{title}</h4>
      <p className="text-(--dark-color) text-center font-extrabold p-[10px] w-[90%]">
        {subtitle}
      </p>
      <p className="text-(--dark-color) p-[10px] text-center">{paragraph}</p>
    </article>
  );
}
