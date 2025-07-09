import { Amatic_SC } from "next/font/google";

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

export default function ManageAdoptants() {
    return (
      <main className={`${amatic.variable}`}>
      
      <h2>Manage adoptants</h2>
      </main>
    )
};