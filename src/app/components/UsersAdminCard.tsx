type Availability = {
    frequency: string,
    id: number
}

type UsersAdminCardProps = {
    firstname: string,
    lastname: string,
    birthdate: string,
    email: string,
    phone: string,
    city: string,
    zipcode: string,
    motivation: string,
    volunteer: string,
    adoptant: string,
    availability: Availability
}

export default function UsersAdminCard({
    firstname,
    lastname,
    birthdate,
    email,
    phone,
    city,
    zipcode,
    motivation,
    volunteer,
    adoptant,
    availability
}: UsersAdminCardProps) {
    return (
        <div className="flex flex-col p-2 w-[400px] border border-1 rounded-sm m-2">
            <p><span className="underline">Nom</span> : {firstname}</p>
            <p><span className="underline">Prénom</span> : {lastname}</p>
            <p><span className="underline">Date de naissance</span> : {birthdate}</p>
            <p><span className="underline">Email</span> : {email}</p>
            <p><span className="underline">Téléphone</span> : {phone}</p>
            <p><span className="underline">Ville</span> : {city}</p>
            <p><span className="underline">Code postal</span> : {zipcode}</p>
            <p><span className="underline">Motivation</span> : {motivation}</p>
            <p><span className="underline">Adoptant</span> : {adoptant}</p>
            <p><span className="underline">Volunteer</span> : {volunteer}</p>
            <p><span className="underline">Disponibilité</span> : {availability.frequency}</p>
        </div>
    )
}