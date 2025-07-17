import Image from "next/image";

type BannerProps = {
  src: string;
  alt: string;
  title: string;
  paragraph: string;
  width?: number;
  height?: number;
};

export default function Banner({ src, alt, title, paragraph }: BannerProps) {
  return (
    <div className={`relative w-full h-[400px]`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center brightness-50"
      />
      <h1 className="font-extrabold uppercase text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {title}
      </h1>
      <p className="font-roboto absolute top-[250px] w-full text-center text-white mt-[15px]">
        {paragraph}
      </p>
    </div>
  );
}
