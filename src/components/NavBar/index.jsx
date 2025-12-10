import { useDispatch } from "react-redux"
import { NavLink } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import logo from "../../assets/images/logo.png"
import { signOut } from "../../features/auth/authSlice"
import { clearUserData } from "../../features/user/userSlice"

import "./style.scss"

export default function NavBar({ user }) {
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(signOut())
		dispatch(clearUserData())
	}

    return (
        <nav className="navbar">
			<NavLink className="navbar__logo" aria-label="Argent Bank" to="/" end>
				<img src={logo} alt="Back to homepage" />
			</NavLink>
			{user ? (
				<div className="navbar__user">
					<NavLink className="navbar__link" to="/profile">
						<FontAwesomeIcon icon="user-circle" />
						{user.userName}
					</NavLink>
					<div className="navbar__link" onClick={() => handleClick()}>
						<FontAwesomeIcon icon="right-from-bracket" />
						Sign Out
					</div>
				</div>
			) : (
				<NavLink className="navbar__link" to="/sign-in">
					<FontAwesomeIcon icon="user-circle" />
					Sign In
				</NavLink>
			)}
		</nav>
    )
}