export default function ManageVolunteersButton(props: {
  type?: "button" | "submit" | "reset";
  label: string;
  classes?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={"border-2 rounded-3xl px-1 h-7 w-20 " + props.classes}
      onClick={props.onClick}
      type={props.type}
    >
      {props.label}
    </button>
  );
}
