import { backEndUrl } from "@/app/back-url";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function VolunteerPage({ params }: Props) {
  const res = await fetch(`${backEndUrl}api/users/${params}`, {
  });

  if (!res.ok) {
    return <div>Utilisateur introuvable</div>;
  }

  const user = await res.json();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Fiche bénévole</h1>
      <p>Nom : {user.firstname} {user.lastname}</p>
      <p>Email : {user.email}</p>
      <p>Téléphone : {user.phone}</p>
      <p>Ville : {user.city}</p>
      <p>Motivation : {user.motivation}</p>
    </div>
  );
}