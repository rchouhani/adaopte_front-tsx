export default function Button(props: { label: string, lucide: string, classes: string, onClick: () => void }) {
    return (
        <button className={"border-2 rounded-xl px-30 h-20" + props.classes } onClick={props.onClick}>
            {props.label}
        </button>
    )
}

