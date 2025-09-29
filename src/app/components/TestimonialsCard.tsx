import Image from "next/image";

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
      <article className="border border-white rounded-lg bg-white shadow-[0_5px_15px_rgba(0,0,0,0.1)] m-[10px] p-[20px]">
        <div className="flex items-center gap-4 mb-[20px]">
          <Image className="w-[50px] h-[50px] object-cover rounded-full" src={image} alt={image}></Image>
          <div className="flex flex-col items-start">
            <p className="font-bold">{title}</p>
            <p className="text-[#8e8d8d] text-sm">{subtitle}</p>
          </div>
        </div>
        <p className="italic">{paragraph}</p>
      </article>
    </>
  );
}
