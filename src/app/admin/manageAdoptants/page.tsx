'use client'

import Button from "@/app/components/UI/Button";
import UsersAdminCard from "@/app/components/UsersAdminCard";
import { Pencil, Trash2 } from "lucide-react";
import { Amatic_SC } from "next/font/google";
import { useEffect, useState } from "react";
import { backEndUrl } from "@/app/back-url";

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

export default function ManageAdoptants() {
  interface Availability {
    frequency: string,
    id: number
  }

  interface Users {
    id: string,
    birthdate: string,
    firstname: string,
    lastname: string,
    password: string,
    email: string,
    phone: string,
    city: string,
    zipcode: string,
    motivation: string,
    volunteer: string,
    adoptant: string,
    availability_id: Availability
  }

  const [users, setUsers] = useState<Users[]>([])

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(`${backEndUrl}api/users/`);
      const data = await response.json();
      setUsers(data);
    }
    getUsers();
  }, [])

  return (
    <main className={`${amatic.variable}`}>
      <h2 className="font-amatic font-extrabold uppercase text-[2.3rem] text-center">Gestion des utilisateurs</h2>
      <div className="flex flex-wrap">
        {users.map((user) => {
          return (
            <div
              className="flex flex-col items-center"
              key={user.id}
            >
              <UsersAdminCard
                firstname={user.firstname}
                lastname={user.lastname}
                birthdate={user.birthdate}
                email={user.email}
                phone={user.phone}
                city={user.city}
                zipcode={user.zipcode}
                motivation={user.motivation}
                adoptant={user.adoptant}
                volunteer={user.volunteer}
                availability={user.availability_id}
              />
              <div className="flex flex-row gap-2">
                <Button
                  classes=" flex flex-row justify-center items-center gap-2 min-w-[160px] max-w-[200px] h-[35px] bg-[#e74c3c] text-white "
                  type="submit"
                  label="Supprimer"
                  lucide={<Trash2 />}
                />
                <Button
                  classes=" flex flex-row justify-center items-center gap-2 min-w-[160px] max-w-[200px] h-[35px] bg-(--secondary-color) text-white "
                  type="submit"
                  label="Modifier"
                  lucide={<Pencil />}
                />
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
};