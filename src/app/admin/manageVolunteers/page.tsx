import { Amatic_SC } from "next/font/google";
const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

export default function ManageVolunteers() {
  return (
    <main className={`${amatic.variable}`}>
      <h2>Manage volunteers</h2>
    </main>
  );
}
