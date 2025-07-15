import { ReactNode } from "react";

export default function UsersAdminCard(props: {firstname: string, lastname: string, birthdate: Date, email: string, phone: string, city: string, zipcode: string, motivation: string, volunteer: string, adoptant: string, availability: number}) {
    return (
        <div className="flex flex-col p-2 w-[400px] border border-1 rounded-sm m-2">
            <p><span className="underline">Nom</span> : {props.firstname}</p>
            <p><span className="underline">Prénom</span> : {props.lastname}</p>
            <p><span className="underline">Date de naissance</span> : {props.birthdate}</p>
            <p><span className="underline">Email</span> : {props.email}</p>
            <p><span className="underline">Téléphone</span> : {props.phone}</p>
            <p><span className="underline">Ville</span> : {props.city}</p>
            <p><span className="underline">Code postal</span> : {props.zipcode}</p>
            <p><span className="underline">Motivation</span> : {props.motivation}</p>
            <p><span className="underline">Adoptant</span> : {props.adoptant}</p>
            <p><span className="underline">Volunteer</span> : {props.volunteer}</p>
            <p><span className="underline">Disponibilité</span> : {props.availability}</p>
        </div>
    )
}