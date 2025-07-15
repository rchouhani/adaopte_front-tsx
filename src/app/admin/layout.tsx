import Navbar from "@/app/components/Navbar";
import { House, Bone, Dog, PiggyBank, Home, LogOut } from "lucide-react";

const navBarItems = [
  {
    text: "Accueil",
    lucide: <Home />,
    link: "/",
  },
  {
    text: "Manage Adoptants",
    lucide: <Bone />,
    link: "/admin/manageAdoptants",
  },
  {
    text: "Manage Pets",
    lucide: <Dog />,
    link: "/admin/managePets",
  },
  {
    text: "Manage Volunteers",
    lucide: <House />,
    link: "admin/manageVolunteers",
  },
  {
    text: "See donations",
    lucide: <PiggyBank />,
    link: "/admin/seeDonations",
  },
  {
    text: "Je me déconnecte",
    lucide: <LogOut />,
    link: "/signIn",
  },
];


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar items={navBarItems} />
      <main>{children}</main>
    </>
  );
}
