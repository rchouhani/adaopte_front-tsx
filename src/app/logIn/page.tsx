// import { useEffect } from "react";
import Banner from "../components/Banner";

import { Amatic_SC } from "next/font/google";
import FormSignIn from "../components/FormSignIn";

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
    </>
  );
}
