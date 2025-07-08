import { ReactNode } from "react";

export type ButtonProps = {
  type?: any;
  label: string;
  link: string;
  classes: string;
};

export default function Button(props: { type: any, label: string, classes: string, onClick?: () => void }) {
    return (
        <button className={"border-2 rounded-3xl px-1 h-15" + props.classes } onClick={props.onClick} type={props.type}>
            {props.label}
        </button>
    )
}
