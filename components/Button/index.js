export default function Button({
    title="test",
    color="green"
}) {
    return (
        <button style={{backgroundColor: color}}>{title}</button>
    )
}