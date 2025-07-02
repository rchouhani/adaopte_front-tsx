import Image from "next/image";
import Link from "next/link";

export default function AnimalsHomePage() {
  return (
    <>
      <main className="flex flex-col items-center text-center p-[30px] bg-(--bg-homepage) -mt-[70px] pt-[70px]">
        <h2 className="font-amatic text-[1.8rem] font-bold text-[#333] mt-[5%] uppercase">
          Nos animaux à adopter
        </h2>
        <p className="font-roboto p-[30px] w-[50%]">
          Découvrez en image tous nos animaux qui attendent une famille aimante.
          Chaque photo raconte une histoire et un espoir.
        </p>

        <section className="grid grid-cols-4 [grid-template-rows:repeat(3,200px)] shadow-md shadow-black/20 gap-2.5">
          <div className="relative col-start-1 row-span-2">
            <Image
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/assets/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg"
              alt="Chien à adopter"
              width={500}
              height={500}
            />
          </div>

          <div className="relative col-start-2 row-start-1">
            <Image
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/assets/chan-swan-NKyl19P5IHg-unsplash.jpg"
              alt="Chien à adopter"
              width={500}
              height={500}
            />
          </div>

          <div className="relative col-start-3 row-span-2">
            <Image
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/assets/jae-park-7GX5aICb5i4-unsplash.jpg"
              alt="Chien à adopter"
              width={500}
              height={500}
            />
          </div>

          <div className="relative col-start-4 row-start-1">
            <Image
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/assets/melanie-kreutz-IFnknR2Mv5o-unsplash.jpg"
              alt="Chien à adopter"
              width={500}
              height={500}
            />
          </div>

          <div className="relative col-start-1 row-start-3">
            <Image
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/assets/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg"
              alt="Chien à adopter"
              width={500}
              height={500}
            />
          </div>

          <div className="relative col-start-2 row-span-2">
            <Image
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/assets/alan-king-KZv7w34tluA-unsplash.jpg"
              alt="Chien à adopter"
              width={500}
              height={500}
            />
          </div>

          <div className="relative col-start-3 row-start-3">
            <Image
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/assets/yosei-g-OVgE3m4MHKM-unsplash.jpg"
              alt="Chien à adopter"
              width={500}
              height={500}
            />
          </div>

          <div className="relative col-start-4 row-span-2">
            <Image
              className="w-full h-full object-cover rounded cursor-pointer"
              src="/assets/peri-stojnic-5Vr_RVPfbMI-unsplash.jpg"
              alt="Chien à adopter"
              width={500}
              height={500}
            />
          </div>
        </section>
        <button className="mt-[40px] mb-[20px] bg-(--dark-color) text-white rounded-[20px] h-[45px] w-[30%] hover:bg-[#8d8c8c]">
          <Link href="/volunteersView/searchPet">Voir tous les animaux</Link>
        </button>
      </main>
    </>
  );
}
