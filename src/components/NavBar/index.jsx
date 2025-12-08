import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import logo from "../../assets/images/logo.png"
import { signOut } from "../../features/auth/authSlice"

import "./style.scss"

export default function NavBar() {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
	const dispatch = useDispatch()

    return (
        <nav className="navbar">
			<NavLink className="navbar__logo" aria-label="Argent Bank" to="/" end>
				<img src={logo} alt="Back to homepage" />
			</NavLink>
			{isAuthenticated ? (
				<div className="navbar__user">
					<NavLink className="navbar__link" to="/profile">
						<FontAwesomeIcon icon="user-circle" />
						Tony
					</NavLink>
					<div className="navbar__link" onClick={() => dispatch(signOut())}>
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