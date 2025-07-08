// import { useEffect } from "react";
import Banner from "../components/Banner";

import { Amatic_SC } from "next/font/google";
import FormSignIn from "../components/FormSignIn";
import FormSignUp from "../components/FormSignUp";
import Button from "../components/UI/Button";

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

export default function LogIn() {
  // useEffect(() => {
  //   async function authentification() {

  //   }
  // })

  return (
    <>
      <Banner
        src="/assets/login_adoption.webp"
        alt="image bannière"
        title="Je me connecte"
        paragraph="Merci de bien entrer ton pseudo et ton mot de passe"
      />

      <FormSignIn />


      {/* <div className="flex flex-row gap-5 items-center justify-center">
        <Button
          type="submit"
          label="Se connecter"
          classes=" mt-[40px] bg-[#333] text-white rounded-[20px] h-[45px] w-[30%] hover:bg-[#8e8d8d]"
        />

        <Button
          type="submit"
          label="Créer un Compte"
          classes=" mt-[40px] bg-[#333] text-white rounded-[20px] h-[45px] w-[30%] hover:bg-[#8e8d8d]"
        />
      </div> */}

      {/* <div className="flex flex-row items-center gap-5 justify-evenly">
        <FormSignIn />
        <FormSignUp onChange={console.log("titi")} />
      </div> */}
    </>
  );
}
