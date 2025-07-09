// import "./globals.css";
import Navbar from "@/app/components/Navbar";
import type { ReactNode } from "react";
import { House, Bone, Dog, Squirrel, PiggyBank } from "lucide-react";

const navBarItems = [
  {
    text: "Manage Adoptants",
    lucide: <Bone/>,
    link: "/admin/manageAdoptants",
  },
  {
    text: "Manage Pets",
    lucide: <Dog />,
    link: "/admin/managePets",
  },
  {
    text: "Manage Volunteers",
    lucide: <House/>,
    link: "admin/manageVolunteers",
  },
  {
    text: "See donations",
    lucide: <PiggyBank />,
    link: "/admin/seeDonatios",
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
