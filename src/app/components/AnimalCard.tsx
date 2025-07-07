import Link from "next/link";

export default function AnimalCard(props: {index: number, type: string, name: string, imageUrl: string, race: string, age: number, localisation: string, description: string}) {
    return (
        <Link href={`/animal/${props.index}`}>
            <img src={props.imageUrl} alt={`Photo de ${props.type}`} />
            <div>
                <p className="bold">{props.type}</p>
                <h3>{props.name}</h3>
                <div>
                    <p><strong>Race :</strong> {props.race}</p>
                    <p><strong>Âge :</strong> {props.age}</p>
                </div>
                <p><strong>Localisation :</strong> {props.localisation}</p>
                <p><strong>Description :</strong> {props.description}</p>
            </div>
        </Link>
    )
}