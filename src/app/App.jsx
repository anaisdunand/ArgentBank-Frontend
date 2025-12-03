import { BrowserRouter, Routes, Route, NavLink } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import logo from "../assets/images/logo.png"

import Home from "../pages/Home"
import SignIn from "../pages/SignIn"
import User from "../pages/User"

import "./style.scss"

export default function App() {
	return (
		<BrowserRouter>
			<nav className="navbar">
				<NavLink className="navbar__link" aria-label="Argent Bank" to="/" end>
					<img
						className="navbar__logo"
						src={logo} alt="Back to homepage"
					/>
				</NavLink>
				<NavLink className="navbar__link navbar__link--user" to="/sign-in">
					<FontAwesomeIcon icon="user-circle" />
					Sign In
				</NavLink>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/user" element={<User />} />
			</Routes>
			<footer className="footer">
				<p className="footer__content">Copyright 2020 Argent Bank</p>
			</footer>
		</BrowserRouter>
	)
}