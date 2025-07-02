import Banner from "@/app/components/Banner"

export default function beVolunteer () {
    return(
        <>
        <div className="relative aspect-[16/9]">
           <Banner
            src="/assets/alin-luna-8LfPXM6abRk-unsplash.jpg"
            alt="image bannière"
            title="Devenir bénévole"
            paragraph="Offrez votre temps, changez des vies. Chez Adaopte, chaque bénévole contribue à redonner espoir aux animaux en attente d'un foyer."
          />
        </div>
        </>
    )
}