export default function Button(props: { label: string, classes: string, onClick: () => void }) {
    return (
        <button className={"border-2 rounded-3xl px-10 h-10" + props.classes } onClick={props.onClick}>
            {props.label}
        </button>
    )
}
