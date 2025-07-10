export default function DonationAdminCard(props: {donator: string, amountDonated: number}) {
    return (
        <div className="flex flex-row gap-2 p-2 border border-1 rounded-sm m-2">
            <p>{props.donator} - {props.amountDonated} €</p>
        </div>
    )
}