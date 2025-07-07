import Button from "./Button";
import { useRouter } from "next/navigation";

export default function ContactButton() {
  const router = useRouter();
  return (
    <Button
      label="Contactez-nous"
      onClick={() => router.push("/")}
      classes="mt-[60px] mb-[20px] bg-[#e74c3c] text-white rounded-[20px] h-[45px] w-[30%] hover:bg-[#ff6d38]"
    />
  );
}
