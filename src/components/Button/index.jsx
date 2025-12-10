import "./style.scss"

export default function Button({ children, type, large = false, onClick }) {
    return (
        <button
            className={`button ${large && "button--large"}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}