import React from "react";

export default function Button(props: {
  type?: "button" | "submit" | "reset";
  label: string;
  classes?: string;
  onClick?: () => void;
  lucide?: React.ReactNode;
}) {

  return (
    <button
      className={"mt-[30px] mb-[20px] border-2 rounded-3xl px-1 h-15  text-white rounded-[20px] h-[45px] w-[30%]" + props.classes}
      onClick={props.onClick}
      type={props.type}
    >
      {props.lucide} {props.label}
    </button>
  );
}
