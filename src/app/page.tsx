
import { Amatic_SC } from 'next/font/google'
import Banner from "./components/Banner";

const amatic = Amatic_SC({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-amatic',
});

export default function Home() {
  return (
    <div className="relative aspect-[16/9]">
       <Banner
        src="/assets/background.jpg"
        alt="image bannière"
        title="Donnons-leur autant qu'ils nous apportent"
        paragraph="Chaque jour, des milliers d'animaux attendent une famille aimante. Trouvez votre compagnon idéal parmi nos animaux disponibles à l'adoption."
        // containerClassName="w-full h-[400px]"
        // imageClassName="object-cover brightness-70"
        // titleClassName="font-amatic font-extrabold text-[2.3rem] text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        // paragraphClassName="font-roboto absolute top-[250px] w-full text-center text-white"
      />
    </div>
  );
}
