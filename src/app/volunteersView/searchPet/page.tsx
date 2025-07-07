'use client'

import { useEffect, useState } from "react";

export default function SearchPet () {
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
      <p>coucou</p>
      
        {pets.map((pet) => (
          <p key={pet.id}>
            {pet.pet_name} {pet.breed}
          </p>  
        ))}
     
    </>
  );
}