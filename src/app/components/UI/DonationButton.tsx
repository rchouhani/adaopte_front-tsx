import Button from "./Button";
import { useRouter } from "next/navigation";

export default function DonationButton() {
  const router = useRouter();
  return (
    <Button
      label="Faire un don 🫶🏽"
      onClick={() => router.push("/adopt")}
      classes="mt-[60px] mb-[20px] bg-[#e74c3c] text-white rounded-[20px] h-[45px] w-[30%] hover:bg-[#ff6d38]"
    />
  );
}
