import NavbarButton from "@/app/components/NavbarButton"

type Navbar = {
    lucide: React.ReactNode;
    link: string;
    text: string;
}

type NavbarProps = {
    items: Navbar[];
}

const createNavbar: React.FC<NavbarProps> = ({ items }) => {

    return (
        <nav className="flex flex-row gap-10 justify-center p-2 text-xs border-(--border-color) shadow-lg">
            {items.map((item, index) => {
                return (
                    <NavbarButton key={index} {...item} />
                )
            })}
        </nav>
    )
}

export default createNavbar;
