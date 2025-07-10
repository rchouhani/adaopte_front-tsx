'use client'

import DonationAdminCard from "@/app/components/DonationAdminCard";
import { Amatic_SC } from "next/font/google";
import { useEffect, useState } from "react";
const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

export default function SeeDonations() {

  interface Donations {
    id: number,
    amount_euros: number,
    user_id: Users,
  }

  interface Users {
    id: string,
    birthdate: Date,
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
    availability_id: number
  }

  const [donations, setDonations] = useState<Donations[]>([])
  const [users, setUsers] = useState<Users[]>([])

  useEffect(() => {
    async function getDonations() {
      const response = await fetch('https://adaopterofated.vercel.app/api/donations/');
      const data = await response.json();
      setDonations(data);
    }
    getDonations();
  }, [])

  return (
    <main className={`${amatic.variable}`}>
      <h2 className="font-amatic font-extrabold uppercase text-[2.3rem] text-center">Les dons effectués</h2>
      {users && donations.map((donation) => {
        return (
          <DonationAdminCard
            key={donation.id}
            donator={`${donation.user_id.firstname} ${donation.user_id.lastname}`}
            amountDonated={donation.amount_euros} />
        )
      })}
    </main>
  );
}
