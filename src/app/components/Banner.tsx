import Image from 'next/image';

type BannerProps = {
    src: string
  alt: string
  title: string
  paragraph: string
  width?: number 
  height?: number
}

export default function Banner({
  src,
  alt,
  title,
  paragraph,


}: BannerProps) {
  return (
    <div className={`relative w-full h-[400px]`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover brightness-70"
      />
      <h1 className="font-amatic font-extrabold uppercase text-[2.3rem] text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{title}</h1>
      <p className="font-roboto absolute top-[250px] w-full text-center text-white">{paragraph}</p>
    </div>
  );
}