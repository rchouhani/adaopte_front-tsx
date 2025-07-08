import Link from "next/link";

export default function AnimalCard(props: { index: number, type: string, name: string, imageUrl: string, race: string, age: number, localisation: string, description: string }) {
    return (
        <Link href={`/animal/${props.index}`} className="flex flex-col rounded-md overflow-hidden shadow-md w-[300px]">
            <div className="flex justify-center items-center h-[200px] overflow-hidden">
                <img
                    src={props.imageUrl}
                    alt={`Photo de ${props.type}`}
                    className="w-full h-full object-cover box-border"
                />
            </div>

            <div className="p-[20px]">
                <p className="font-bold m-[0]">{props.type}</p>
                <p className="mt-[5px] mb-[5px] p-0 font-bold text-xl">{props.name}</p>
                <div>
                    <p><strong>Race :</strong> {props.race}</p>
                    <p><strong>Âge :</strong> {props.age}</p>
                </div>
                <p><strong>Localisation :</strong> {props.localisation}</p>
                <p className="mt-[5px] mb-[5px]"><strong>Description :</strong> {props.description}</p>
            </div>
        </Link>
    )
}