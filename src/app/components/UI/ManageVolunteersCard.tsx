"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type MyComponentProps = {
  id: number;
  firstname: string;
  lastname: string;
};

export default function ManageVolunteersCard(props: MyComponentProps) {
  // id: number;
  // firstname: string;
  // lastname: string;
  // email: string;
  // phone: string;
  // city: string;
  // motivation: string;
  // class?: string;
  // })
const router = useRouter();

  const [firstname, setFirstname] = useState(props.firstname);
  const [lastname, setLastname] = useState(props.lastname);

  useEffect(() => {
    setFirstname(props.firstname);
    setLastname(props.lastname)
  }, [props.firstname, props.lastname]);

  // const handleSubmitUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(`http://localhost:3001/users/${props.id}`, {
  //       method: "PATCH",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         firstname,
  //         lastname,
  //       }),
  //     });
  //     console.log("firstname: ", firstname);
  //     console.log("lastname : ", lastname);
  //     console.log("Formulaire soumis");
  //   } catch (error: any) {
  //     alert("Erreur lors de la connexion : " + error.message);
  //   }
  // };

    const handleClickDetails = () => {
    router.push(`manageVolunteers/${props.id}`);
  };

  {
    return (
      <div>
        <input type="checkbox" />
      <button
        onClick={handleClickDetails}
        className="text-blue-600 underline bg-transparent border-none cursor-pointer"
      >
        {firstname} {lastname}
      </button>
        {/* <label>{props.email}</label>
      <label>{props.phone}</label>
      <label>{props.city}</label>
      <label>{props.motivation}</label> */}
        {/* <ManageVolunteersButton
          type="submit"
          label="Update"
          onClick={ handleSubmitUpdate }
        />
        <ManageVolunteersButton type="submit" label="Delete" classes="px-1" /> */}
      </div>
    );
  }
}
