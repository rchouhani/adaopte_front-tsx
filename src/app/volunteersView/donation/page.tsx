"use client";

import Banner from "@/app/components/Banner";
import Button from "@/app/components/UI/Button";
import Input from "@/app/components/UI/Input";
import { Amatic_SC } from "next/font/google";
import { useState } from "react";

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

export default function Donation() {
  const [amount, setAmount] = useState<number | string>("");
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true); // ouvrir la modale au submit
  };

  const handlePayment = () => {
    setMessage(
      `Adaopte vous remercie pour votre don de ${amount}€ et votre solidarité`
    );
    setIsModalOpen(false);
  };

  return (
    <>
      <Banner
        src="/assets/banniere-don.jpg"
        alt="image bannière"
        title="Offrez un avenir aux animaux sans famille"
        paragraph="Prise en charge des animaux abandonnés ou maltraités, lutte contre les souffrances animales, campagnes de sensibilisation, actions auprès des pouvoirs publics pour faire progresser la cause animale…"
      />
      <main className={`${amatic.variable} relative aspect-[16/9] flex flex-col items-center text-center p-[30px] bg-(--bg-homepage) -mt-[20px] pt-[30px]`}>
        <form
          className="p-8 border border-white rounded-md flex flex-col gap-4 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <h2>Je donne</h2>
          <Input
            type="number"
            name="donationAmount"
            placeholder="Votre montant ici"
            onChange={handleChange}
            value={amount}
          />

          <Button
            type="submit"
            label="Valider"
            classes="mt-[20px] bg-[#333] text-white rounded-[20px] h-[45px] w-full hover:bg-[#8e8d8d]"
          />
        </form>

        <p className="mt-4">{message}</p>

        {isModalOpen && (
          <div className="fixed flex justify-center items-center border-2 rounded-lg">
            <div className="bg-gray-200 fixed flex flex-col justify-center items-center rounded-xl p-8 w-[50%] h-[50%] text-center space-y-4 border">
              <h2>Informations bancaires</h2>
              <Input type="text" name="text" placeholder="Nom " />
              <Input
                type="text"
                name="cardNumber"
                placeholder="Numéro de carte"
              />
              <Input type="text" name="cvc" placeholder="CVC" />
              <div className="flex flex-row">
                <Button
                  type="submit"
                  label="Confirmer le don"
                  classes="mt-[20px] bg-green-700 text-white rounded-[20px] h-[45px] w-[200] hover:bg-green-900"
                  onClick={handlePayment}
                />
                <Button
                  type="button"
                  label="Annuler"
                  onClick={() => setIsModalOpen(false)}
                  classes="mt-[20px] bg-red-600 text-white rounded-[20px] h-[45px] w-[200] hover:bg-red-800"
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

// "use client";

// import Banner from "@/app/components/Banner";
// import Button from "@/app/components/UI/Button";
// import Input from "@/app/components/UI/Input";

// import { Amatic_SC } from "next/font/google";
// import { useState } from "react";
// const amatic = Amatic_SC({
//   weight: ["400", "700"],
//   subsets: ["latin"],
//   variable: "--font-amatic",
// });

// export default function Donation() {
//   const [amount, setAmount] = useState(0);
//   const [message, setMessage] = useState("");

//   const handleChange = (e: any) => {
//     setAmount(e.target.value);
//     console.log(e.target.value);
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     setMessage(`Adaopte vous remercie pour votre don et votre solidarité`);
//   };

//   return (
//     <>
//       <Banner
//         src="/assets/banniere-don.jpg"
//         alt="image bannière"
//         title="Offrez un avenir aux animaux sans famille"
//         paragraph="Prise en charge des animaux abandonnés ou maltraités, lutte contre les souffrances animales, campagnes de sensibilisation, actions auprès des pouvoirs publics pour faire progresser la cause animale…"
//       />
//       <main className="flex flex-col items-center text-center p-[30px] bg-(--bg-homepage) -mt-[20px] pt-[30px]">

//         <form className="p-8 border-1 p-5 rounded-md" onSubmit={handleSubmit}>
//         <h2>Je donne</h2>
//           <Input
//             type="number"
//             name="donationAmont"
//             placeholder="Votre montant ici"
//             onChange={handleSubmit}
//           />
//         </form>

//         <Button
//           type="submit"
//           label="Valider"
//           classes=" mt-[20px] bg-[#333] text-white rounded-[20px] h-[45px] w-[30%] hover:bg-[#8e8d8d]"
//         />
//         <p>{message}</p>
//       </main>
//     </>
//   );
// }
