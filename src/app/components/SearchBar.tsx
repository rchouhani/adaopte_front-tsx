import Button from "./UI/Button";

export default function SearchBar() {
    return (
        <div>
            <form action="submit">
                <div>
                    <label htmlFor="animal_type">Type d'animal</label>
                    <select name="animal_type" id="">
                        <option value="all">Tous les animaux</option>
                        <option value="dog">Chien</option>
                        <option value="cat">Chat</option>
                        <option value="hamster">Hamster</option>
                        <option value="guinea pig">Cochon d'inde</option>
                        <option value="rabbit">Lapin</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Localisation</label>
                    <input type="text" placeholder="Ville" />
                </div>
                <Button
                    type="submit"
                    label="Rechercher 🔎"
                    classes="" />
            </form>
        </div>
    )
}