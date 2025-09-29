type Availability = {
    frequency: string,
    id: number
}

type Users = {
    id: number,
    availability: Availability
    birthdate: string,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    city: string,
    zipcode: string,
    motivation: string,
    volunteer: string,
    adoptant: string,
}

type DonationAdminCardProps = {
    id: number,
    donator?: Users,
    amountDonated: number,
}

export default function DonationAdminCard({ id, amountDonated }: DonationAdminCardProps) {
    return (
        <div className="flex flex-row gap-2 p-2 border border-1 rounded-sm m-2">
            <p>Don n°{id}: {amountDonated} €</p>
        </div>
    )
}