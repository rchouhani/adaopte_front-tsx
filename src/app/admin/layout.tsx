import Navbar from "@/app/components/Navbar";
import { House, Bone, Dog, PiggyBank } from "lucide-react";
import ManageVolunteers from "./manageVolunteers/page";
import VolunteerPage from "./manageVolunteers/[id]/page";


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
    link: "/admin/seeDonations",
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
