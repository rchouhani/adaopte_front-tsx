"use client";

import ManageVolunteersCard from "@/app/components/UI/ManageVolunteersCard";
import { Amatic_SC } from "next/font/google";
import { useEffect, useState } from "react";
import { backEndUrl } from "@/app/back-url";

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

export default function ManageVolunteers() {
  interface Users {
    id: number;
    firstname: string;
    lastname: string;
    // email: string;
    // phone: string;
    // city: string;
    // motivation: string;
  }

  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        `${backEndUrl}api/users/`
      );
      const data = await response.json();
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <main className={`${amatic.variable}`}>
      <h2>Manage volunteers</h2>
      {users.map((user) => {
        return (
          <ManageVolunteersCard
            key={user.id}
            id={user.id}
            firstname={user.firstname}
            lastname={user.lastname}
            // email={user.email}
            // phone={user.phone}
            // city={user.city}
            // motivation={user.motivation}
          />
        );
      })}
    </main>
  );
}
