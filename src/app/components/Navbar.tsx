import NavbarButton from "@/app/components/NavbarButton"

  NavbarItem {
    lucide: React.ReactNode;
    link: string;
    text: string;
}

interface NavbarProps {
    items: NavbarItem[];
}

export default function Navbar({ items }: NavbarProps) {
    return (
        <nav className="flex flex-row gap-10 justify-center p-2 text-xs border-(--border-color) shadow-lg">
                {items.map((item, index) => {
                    return (
                        <NavbarButton key = {index} {...item} />
                    )
                })}
        </nav>
    )
}