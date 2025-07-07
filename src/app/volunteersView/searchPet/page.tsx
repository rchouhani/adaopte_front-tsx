'use client'

<<<<<<< HEAD
import { useEffect, useState } from "react";

export default function SearchPet () {
=======
import { Amatic_SC } from "next/font/google";
import { ReactNode, useEffect, useState } from "react";

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

export default function SearchPet (props: { width: number, height: number}) {
>>>>>>> 7810476415c13dbbb818397743548f3ddb97daeb
    interface Pet {
        id: number,
        pet_name: string,
        status_id: string,
        birthyear: ReactNode,
        breed: string,
        pet_type: string,
        city: string,
        zipcode: string,
        pet_description: string,
        image_url: string
    }

    const [pets, setPets] = useState<Pet[]>([])

    useEffect(() => {
        async function getPets() {
        const response = await fetch('http://127.0.0.1:8000/api/pets/');
        const data = await response.json();
        setPets(data);
        console.log('🍪🍪', data)
    };
        getPets();
    }, []);
    
    

  return (
    <>
    <div className="flex flex-row flex-wrap w-max">
        {pets.map((pet) => (
      <div key={pet.id} className="flex-col w-96" >
          
          {/* <p>{pet.pet_type}</p> */}
          <img src={pet.image_url} width={300} height={300}/>
          <p>{pet.pet_name}</p>
          <p>{pet.breed} ° {pet.birthyear}</p>
          <p>{pet.city}</p>
          <p>{pet.pet_description}</p>
      </div>
        ))}
    </div>
    </>
  );
}