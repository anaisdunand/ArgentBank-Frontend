import "./style.scss"

export default function Button({ children, type, large = false }) {
    return (
        <button className={`button ${large && "button--large"}`} type={type}>
            {children}
        </button>
    )
}