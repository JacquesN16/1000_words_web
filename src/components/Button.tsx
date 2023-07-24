
import './button.scss'
interface Props {
    title: string
    onClick: () => void
}

export default function Button (props: Props) {
    return (
        <button
            className="custom_btn"
            onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}