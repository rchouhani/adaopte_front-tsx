'use client'

import { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";

export default function AnimalGrid() {

    interface Pet {
        id: number,
        pet_name: string,
        status_id: string,
        birthyear: Date,
        breed: string,
        pet_type: string,
        city: string,
        zipcode: string,
        pet_description: string,
        image_url: string
    }

    const today = new Date();
    const thisYear: number = today.getFullYear();

    const [pets, setPets] = useState<Pet[]>([]);

    useEffect(() => {
        async function getPets() {
            const response = await fetch('https://adaopterofated.vercel.app/api/pets_available/');
            const data = await response.json();
            setPets(data);
            console.log(data);
        }
        getPets();
    }, []);

    return (
        <div className="flex flex-wrap gap-3 justify-evenly pt-5">
            {pets.map((pet) => {
                const birthYear = new Date(pet.birthyear)
                const petAge: number = thisYear - birthYear.getFullYear();
                return (
                    <AnimalCard
                        key={pet.id}
                        index={pet.id}
                        type={pet.pet_type}
                        name={pet.pet_name}
                        imageUrl={pet.image_url}
                        race={pet.breed}
                        age={petAge}
                        localisation={pet.city}
                        description={pet.pet_description}
                    />
                )
            })}
        </div>
    )
}