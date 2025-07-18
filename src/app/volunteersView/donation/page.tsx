"use client";

import Banner from "@/app/components/Banner";
import Button from "@/app/components/UI/Button";
import Input from "@/app/components/UI/Input";
import { Amatic_SC } from "next/font/google";
import { useState } from "react";
import { FaLock, FaCheckCircle } from "react-icons/fa";

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

export default function Donation() {
  const [selectedAmount, setSelectedAmount] = useState<number | "other">(20);
  const [customAmount, setCustomAmount] = useState<number | "">("");
  const [showPaymentBlock, setShowPaymentBlock] = useState(false);
  const [message, setMessage] = useState("");

  const presetAmounts = [10, 20, 50];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let amountToDonate =
      selectedAmount === "other" ? customAmount : selectedAmount;
    if (!amountToDonate || amountToDonate <= 0) {
      alert("Veuillez entrer un montant valide.");
      return;
    }
    setShowPaymentBlock(true);
    setMessage("");
  };

  const handlePayment = () => {
    const amountToDonate =
      selectedAmount === "other" ? customAmount : selectedAmount;
    setMessage(
      `Merci pour votre don de ${amountToDonate}€. Votre soutien change des vies 🐾`
    );
    setShowPaymentBlock(false);
    setSelectedAmount(20);
    setCustomAmount("");
  };

  return (
    <>
      <Banner
        src="/assets/banniere-don.jpg"
        alt="Bannière don SPA"
        title="Soutenez la cause animale"
        paragraph="Chaque don contribue à soigner et protéger les animaux abandonnés, et leur offrir une seconde chance."
      />

      <main
        className={`${amatic.variable} flex flex-col items-center px-6 py-10 text-center bg-gray-50`}
      >
        <p className="max-w-lg">
          Votre don permet de sauver des animaux tout en vous donnant droit à
          une déduction fiscale de 66%*.
        </p>
        <h2 className="mb-5">Je fais un don</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-xl rounded-xl shadow-md p-6 flex flex-col gap-3 border"
        >
          <div className="flex justify-around flex-wrap gap-5">
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                className={`px-10 py-2 rounded-lg border transition ${
                  selectedAmount === amount
                    ? " bg-[#ff6d38] text-white border-#e74c3c"
                    : " border-[#ff6d38] hover:border-#e74c3c"
                }`}
                onClick={() => setSelectedAmount(amount)}
              >
                {amount}€
              </button>
            ))}
            <button
              type="button"
              className={`px-4 py-2 rounded-lg border transition ${
                selectedAmount === "other"
                  ? " bg-[#ff6d38] text-white border-#e74c3c"
                  : " border-[#ff6d38] hover:border-#e74c3c"
              }`}
              onClick={() => setSelectedAmount("other")}
            >
              Autre
            </button>
          </div>

          {selectedAmount === "other" && (
            <Input
              type="number"
              name="customAmount"
              placeholder="Montant libre"
              // value={customAmount || ""}
              onChange={(e) => setCustomAmount(Number(e.target.value))}
              min="1"
              classes=""
            />
          )}

          <Button
            type="submit"
            label="Je donne"
            classes=" rounded-full py-3 mt-4 w-full bg-green-700 text-white rounded-lg hover:bg-green-900"
          />

          <div className="flex items-center justify-center text-gray-500 text-sm mt-2 gap-2">
            <FaLock className="text-green-700" /> Paiement sécurisé
          </div>
        </form>

        {showPaymentBlock && (
          <div className="bg-white w-full max-w-xl rounded-xl shadow-md p-6 flex flex-col gap-4 mt-8 border">
            <h2 className="text-xl font-bold mb-2">
              Vos coordonnées bancaires
            </h2>
            <Input type="text" name="name" placeholder="Nom complet" />
            <Input
              type="text"
              name="cardNumber"
              placeholder="Numéro de carte"
            />
            <div className="flex justify-around">
              <Input type="text" name="expiry" placeholder="MM/AA" />
              <Input type="text" name="cvc" placeholder="CVC" />
            </div>

            <div className="flex  mt-4">
              <Button
                type="button"
                label="Confirmer le don"
                classes=" bg-green-700 hover:bg-green-800 w-full text-white rounded-full py-3 px-6"
                onClick={handlePayment}
              />
              <Button
                type="button"
                label="Annuler"
                classes=" bg-red-600 hover:bg-red-700 w-full text-white rounded-full py-3 px-6"
                onClick={() => setShowPaymentBlock(false)}
              />
            </div>
          </div>
        )}

        {message && (
          <div className="flex flex-col items-center mt-6 text-green-700 text-lg">
            <FaCheckCircle className="text-2xl mb-2" />
            {message}
          </div>
        )}
      </main>
      <section className="bg-gray-400 text-white w-full p-3">
        <h4 className="pt-5 text-center font-extrabold text-xl mb-5">Donner en toute sécurité</h4>

        <p className="font-semibold">Page de paiement 100% sécurisé par Fatos Security Group.</p>
        <br/>
        <p className="font-semibold">
          {" "}
          Plus de 13 700 animaux recueillis dans nos refuges en 2024 grâce à vos
          dons. Une question sur votre don ? Toutes les réponses sont dans notre
          FAQ
        </p>
        <br/>
        <p className="font-semibold">
          ADAOPTE est agréée par le Comité de la Charte - Don en Confiance et se
          soumet à son contrôle pour le respect des principes de la charte de
          déontologie.
        </p>
      </section>
    </>
  );
}
