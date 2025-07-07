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
    const thisYear = today.getFullYear();

    const [pets, setPets] = useState<Pet[]>([])

    useEffect(() => {
        async function getPets() {
            const response = await fetch('http://127.0.0.1:8000/api/pets/');
            const data = await response.json();
            setPets(data);
            console.log(data)
        }
        getPets();
    }, []);

    return (
        <div>
            {pets.map((pet) => {
                return (
                    <AnimalCard
                        key={pet.id}
                        index={pet.id}
                        type={pet.pet_type}
                        name={pet.pet_name}
                        imageUrl={pet.image_url}
                        race={pet.breed}
                        age={thisYear - pet.birthyear.getFullYear()}
                        localisation={pet.city}
                        description={pet.pet_description}
                    />
                )
            })}
        </div>
    )
}