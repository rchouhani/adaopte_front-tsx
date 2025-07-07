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
      <article>
        <div>
          <div>
            <img src={image}></img>
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
