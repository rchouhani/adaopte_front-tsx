import Button from "./Button";
import { useRouter } from "next/navigation";

export default function FaqButton() {
  const router = useRouter();
  return (
    <Button
      type
      label="Foire aux questions"
      onClick={() => router.push("/")}
      classes="mt-[60px] mb-[20px] bg-[#333] text-white rounded-[20px] h-[45px] w-[30%] hover:bg-[#8e8d8d]"
    />
  );
}
