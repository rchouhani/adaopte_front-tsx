import { LucideProps } from "lucide-react";
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
      className={"border-2 rounded-3xl px-1 h-15" + props.classes}
      onClick={props.onClick}
      type={props.type}
    >
      {props.lucide} {props.label}
    </button>
  );
}
