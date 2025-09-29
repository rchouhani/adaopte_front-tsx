
type Footer = {
    lucide: React.ReactNode;
    link: string;
    text: string;
}

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitch } from "lucide-react";

export default function Footer () {
    return (
        <>
            <div className="p-5 bg-[#333] text-white">
                <div className="grid gap-4 grid-cols-3">
                    <article className="w-full">
                        <h4 className="footer font-bold text-2xl text-[#ff6d38] mb-5">ADOPTE</h4>
                        <p className="font-semibold">Notre mission est de trouver des foyers aimants pour chaque animal abandonné et de promouvoir le bien-être animal.</p>

                        <div className="flex flex-row g-10 mb-15">
                            <p className="flex items-center justify-center g-20 w-10 h-10"><Facebook /></p>
                            <p className="flex items-center justify-center g-20 w-10 h-10"><Instagram /></p>
                            <p className="flex items-center justify-center g-20 w-10 h-10"><Linkedin /></p>
                            <p className="flex items-center justify-center g-20 w-10 h-10"><Twitch /></p>
                        </div>
                    </article>

                    <article className="w-full">
                        <h4 className="footer font-bold text-2xl text-[#ff6d38] mb-5">INFORMATIONS UTILES</h4>
                        <ul className="leading-8">
                            <li><Link href="#">FAQs</Link></li>
                            <li><Link href="/volunteersView/guide">Conseils d&apos;adoption</Link></li>
                            <li><Link href="#">Nous contacter</Link></li>
                            <li><Link href="#">Mentions légales</Link></li>
                        </ul>
                    </article>

                    <article className="w-full">
                        <h4 className="footer font-bold text-2xl text-[#ff6d38] mb-5">CONTACT</h4>
                        <p className="font-semibold">116 Rue du Faubourg Saint Martin</p>
                        <p className="font-semibold">75010 Paris, France</p>
                        <p className="font-semibold">Email: contact@adaopte.fr</p>
                        <p className="font-semibold">Tél: +33 1 23 45 67 89</p>
                    </article>
                </div>

                <div className="pt-10 text-center text-xs font-extralight">
                    <p className="text-(--footer-text)"> © 2025 Adaopte. Tous droits réservés.</p>
                    <p className="text-(--footer-text)">Ce site est développé dans le cadre d&apos;un projet ADA Tech School par Faty, Edwige et Romain.</p>
                </div>
            </div>
        </>
    )
}