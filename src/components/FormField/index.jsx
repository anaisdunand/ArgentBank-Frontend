import "./style.scss"

export default function FormField({ children, type, id, value, disabled = false, modifier }) {
    return (
        <div className={`field${modifier ? ` field--${modifier}` : ""}`}>
            <label className="field__label" htmlFor={id}>
                {children}
            </label>
            <input
                className="field__input"
                type={type}
                id={id}
                defaultValue={value}
                disabled={disabled}
            />
        </div>
    )
}