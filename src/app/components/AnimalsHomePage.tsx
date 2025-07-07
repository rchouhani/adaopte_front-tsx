import Image from "next/image";
import Link from "next/link";
import Button from "./UI/Button";

import { useRouter } from "next/navigation";

export default function AnimalsHomePage() {
  const router = useRouter();

  return (
    <>
      <main className="flex flex-col items-center text-center p-[30px] bg-(--bg-homepage) -mt-[70px] pt-[70px]">
        <h2>Nos animaux à adopter</h2>
        <h3>
          Découvrez en image tous nos animaux qui attendent une famille aimante.
          Chaque photo raconte une histoire et un espoir.
        </h3>

        <section className="grid grid-cols-4 [grid-template-rows:repeat(3,200px)] gap-2.5 mb-[40px]">
          <div className="relative col-start-1 row-span-2 shadow-xl shadow-black/20">
            <Image
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/assets/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg"
              alt="Chien à adopter"
              width={500}
              height={500}
            />
          </div>

          <div className="relative col-start-2 row-start-1 shadow-xl shadow-black/20">
            <Image
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/assets/chan-swan-NKyl19P5IHg-unsplash.jpg"
              alt="Chien à adopter"
              width={500}
              height={500}
            />
          </div>

          <div className="relative col-start-3 row-span-2 shadow-xl shadow-black/20">
            <Image
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/assets/jae-park-7GX5aICb5i4-unsplash.jpg"
              alt="Chien à adopter"
              width={500}
              height={500}
            />
          </div>

          <div className="relative col-start-4 row-start-1 shadow-xl shadow-black/20">
            <Image
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/assets/melanie-kreutz-IFnknR2Mv5o-unsplash.jpg"
              alt="Chien à adopter"
              width={500}
              height={500}
            />
          </div>

          <div className="relative col-start-1 row-start-3 shadow-xl shadow-black/20">
            <Image
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/assets/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg"
              alt="Chien à adopter"
              width={500}
              height={500}
            />
          </div>

          <div className="relative col-start-2 row-span-2 shadow-xl shadow-black/20">
            <Image
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/assets/alan-king-KZv7w34tluA-unsplash.jpg"
              alt="Chien à adopter"
              width={500}
              height={500}
            />
          </div>

          <div className="relative col-start-3 row-start-3 shadow-xl shadow-black/20">
            <Image
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/assets/yosei-g-OVgE3m4MHKM-unsplash.jpg"
              alt="Chien à adopter"
              width={500}
              height={500}
            />
          </div>

          <div className="relative col-start-4 row-span-2 shadow-xl shadow-black/20">
            <Image
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/assets/peri-stojnic-5Vr_RVPfbMI-unsplash.jpg"
              alt="Chien à adopter"
              width={500}
              height={500}
            />
          </div>
        </section>
        <Button
          label="Voir tous les animaux"
          onClick={() => router.push("/volunteersView/searchPet")}
          classes="mt-[60px] mb-[20px] bg-[#333] text-white rounded-[20px] h-[45px] w-[30%] hover:bg-[#8e8d8d]"
        />
      </main>
    </>
  );
}
