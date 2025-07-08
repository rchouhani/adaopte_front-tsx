export default function Input(props: {
  name: string;
  type: string;
  placeholder: string;
  onChange?: any;
}) {
  return (
    <>
      <input
        className="border border-1 border-black rounded-sm p-1"
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required
      />
    </>
  );
}
