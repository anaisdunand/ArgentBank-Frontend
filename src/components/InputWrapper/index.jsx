import "./style.scss"

export default function InputWrapper({ children, role, type, id }) {
    return (
        <div className={role}>
            <label className={`${role}__label`} htmlFor={id}>
                {children}
            </label>
            <input className={`${role}__input`} type={type} id={id} />
        </div>
    )
}