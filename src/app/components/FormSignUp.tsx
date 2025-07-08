import Button from "./UI/Button";
import Input from "./UI/Input";

export default function FormSignUp(props: { onChange: any }) {
  return (
    <>
      <main className="flex flex-col items-center gap-1 mt-[22px] border-1 p-5 rounded-md">
        <h2>Créer un compte</h2>
        <form className="flex flex-col gap-3 items-center">
          <div className="flex flex-row gap-1">
            <Input
              name="email"
              type="email"
              placeholder="email"
              onChange={props.onChange}
            />

            <Input
              name="username"
              type="username"
              placeholder="username"
              onChange={props.onChange}
            />

            <Input
              name="password"
              type="password"
              placeholder="password"
              onChange={props.onChange}
            />
          </div>
          <Button
            type="submit"
            label="Créer un Compte"
            classes=" mt-[20px] bg-[#333] text-white rounded-[20px] h-[45px] w-[30%] hover:bg-[#8e8d8d]"
          />
        </form>
      </main>
    </>
  );
}
