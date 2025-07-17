import Button from "./UI/Button";

export default function SearchBar() {
    return (
        <div className="flex justify-center">
            <form action="submit" className="flex flex-row gap-5 justify-center items-center p-5 m-2 max-w-[950px] shadow-xl rounded-sm">
                <div className="flex flex-col gap-1 w-[230px]">
                    <label htmlFor="animal_type">Type d&apos;animal :</label>
                    <select name="animal_type" id="animal_type" className="border border-2 rounded-sm p-1.5 border-(--footer-text) hover:border-black">
                        <option value="all">Tous les animaux</option>
                        <option value="dog">Chien</option>
                        <option value="cat">Chat</option>
                        <option value="hamster">Hamster</option>
                        <option value="guinea pig">Cochon d&apos;inde</option>
                        <option value="rabbit">Lapin</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1 w-[250px]">
                    <label htmlFor="">Localisation :</label>
                    <input type="text" placeholder="Ville" className="border border-2 rounded-sm p-1 pl-1.5 border-(--footer-text) hover:border-black" />
                </div>
                <Button
                    type="submit"
                    label="Rechercher 🔎"
                    classes=" bg-[#333] hover:bg-[#8e8d8d] mt-[40px]" />
            </form>
        </div>
    )
}