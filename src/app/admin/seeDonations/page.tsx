import { Amatic_SC } from "next/font/google";
const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

export default function SeeDonations() {
    return (
        <h2>See donations</h2>
    )
};