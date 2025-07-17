'use client'

import { Amatic_SC } from "next/font/google";
import { useEffect, useState } from "react";
const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});


export default function ManagePets() {
  interface Pets {
    id: string,
    pet_name: string,
    status_id: number,
    birthyear: Date,
    breed: string,
    pet_type: string,
    city: string,
    zipcode: string,
    pet_description: string,
    image_url: string,
  }

  const [pets, setPets] = useState<Pets[]>([]);

  const calculatePetAge = (petBirthday: Date) => {
    const today = new Date();
    const thisYear = today.getFullYear();
    if (today.getMonth() < petBirthday.getMonth()) {
      return thisYear - petBirthday.getFullYear() - 1
    }
    if (today.getMonth() > petBirthday.getMonth()) {
      return thisYear - petBirthday.getFullYear()
    }
    if (today.getMonth() === petBirthday.getMonth()) {
      if (today.getDate() < petBirthday.getDate()) {
        return thisYear - petBirthday.getFullYear() - 1
      } else {
        return thisYear - petBirthday.getFullYear()
      }
    }
  }

  useEffect(() => {
    async function getPets() {
      const response = await fetch('https://adaopterofated.vercel.app/api/pets/');
      const data = await response.json();
      setPets(data);
    }
    getPets();
  }, [])

  return (
    <main className={`${amatic.variable}`}>
      <h2>Manage Pets</h2>
      <div>
        {pets.map((pet) => {
          return (
            <div
              key={pet.id}>
              <h2>{pet.pet_name}</h2>
              <p>{calculatePetAge(pet.birthyear)}</p>

            </div>
          )
        })}
      </div>
    </main>
  )
};