import Button from "./UI/Button";

export default function SearchBar() {
    return (
<<<<<<< HEAD
        <div className="flex justify-center">
            <form action="submit" className="flex flex-row gap-5 justify-center items-end p-4 m-2 max-w-[950px] shadow-xl rounded-sm">
                <div className="flex flex-col gap-1 w-[230px]">
                    <label htmlFor="animal_type">Type d'animal :</label>
                    <select name="animal_type" id="animal_type" className="border border-1 rounded-sm p-1.5 border-(--footer-text) hover:border-black">
=======
        <div>
            <form action="submit">
                <div>
                    <label htmlFor="animal_type">Type d&apos;animal</label>
                    <select name="animal_type" id="">
>>>>>>> b55c8e58038e29213a9f9d61c0a4fb31917a03c5
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
                    <input type="text" placeholder="Ville" className="border border-1 rounded-sm p-1 pl-1.5 border-(--footer-text) hover:border-black" />
                </div>
                <Button
                    type="submit"
                    label="Rechercher 🔎"
                    classes=" bg-[#333] text-white rounded-[20px] h-[45px] w-[200px] hover:bg-[#8e8d8d]" />
            </form>
        </div>
    )
}