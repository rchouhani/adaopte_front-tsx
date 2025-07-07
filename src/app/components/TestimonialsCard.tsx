type TestimonialsCardProps = {
  image: string;
  title: string;
  subtitle: string;
  paragraph: string;
};

export default function TestimonialsCard({
  image,
  title,
  subtitle,
  paragraph,
}: TestimonialsCardProps) {
  return (
    <>
      <article className="w-4/4 h-auto border border-white shadow-[0_5px_15px_rgba(0,0,0,0.1)] rounded-[20px]">
        <div className="flex flex-col">
          <div  >
            <img className="rounded-full" src={image}></img>
          </div>
          <div>
            <p>{title}</p>
            <p>{subtitle}</p>
          </div>
        </div>
        <p>{paragraph}</p>
      </article>
    </>
  );
}
