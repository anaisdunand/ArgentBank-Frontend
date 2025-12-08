import { BrowserRouter, Routes, Route, NavLink } from "react-router"

import NavBar from "../components/NavBar"
import PrivateRoute from "../components/PrivateRoute"
import Footer from "../components/Footer"

import Home from "../pages/Home"
import SignIn from "../pages/SignIn"
import Profile from "../pages/Profile"

export default function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/profile" element={
					<PrivateRoute>
						<Profile />
					</PrivateRoute>
				} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}