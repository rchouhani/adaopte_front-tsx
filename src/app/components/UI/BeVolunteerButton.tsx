import Button from "./Button";
import { useRouter } from "next/navigation";

export default function BeVolunteerButton() {
  const router = useRouter();
  return (
    <Button
      type
      label="Devenir bénévole"
      onClick={() => router.push("/beVolunteer")}
      classes="mt-[60px] mb-[20px] bg-[#00a652] text-white rounded-[20px] h-[45px] w-[30%] hover:bg-[#6fc59a]"
    />
  );
}
