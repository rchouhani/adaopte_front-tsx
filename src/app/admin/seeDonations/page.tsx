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
    availability: Availability
  }

  interface Donations {
    id: number,
    amount_euros: number,
    users: Users,
  }

  const [donations, setDonations] = useState<Donations[]>([])
  // const [users, setUsers] = useState<Users[]>([])

  useEffect(() => {
    async function getDonations() {
      const response = await fetch('http://127.0.0.1:8000/api/donations/');
      const data = await response.json();
      console.log(data)
      setDonations(data);
    }
    getDonations();
  }, [])

  return (
    <main className={`${amatic.variable}`}>
      <h2 className="font-amatic font-extrabold uppercase text-[2.3rem] text-center">Les dons effectués</h2>
      {donations.map((donation) => {
        return (
          <DonationAdminCard
            key={donation.id}
            id={donation.id}
            amountDonated={donation.amount_euros} />
        )
      })}
    </main>
  );
}
