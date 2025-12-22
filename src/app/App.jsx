import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter, Routes, Route } from "react-router"

import { useLazyGetProfileQuery } from "../features/api"
import { signOut } from "../features/auth/authSlice"
import { setUserData } from "../features/user/userSlice"

import NavBar from "../components/NavBar"
import PrivateRoute from "../components/PrivateRoute"
import PublicRoute from "../components/PublicRoute"
import Footer from "../components/Footer"

import Home from "../pages/Home"
import SignIn from "../pages/SignIn"
import Profile from "../pages/Profile"

export default function App() {
	const token = useSelector((state) => state.auth.token)
	const dispatch = useDispatch()

	const [getProfile] = useLazyGetProfileQuery()

	useEffect(() => {
		const loadUser = async () => {
			try {
				const response = await getProfile(token).unwrap()
				dispatch(setUserData(response.body))
			} catch (error) {
				console.error("Failed to load user", error)
				dispatch(signOut())
			}
		}

		if (token) loadUser()
	}, [token, getProfile, dispatch])

	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route element={<PublicRoute token={token} />}>
					<Route path="/sign-in" element={<SignIn />} />
				</Route>
				<Route element={<PrivateRoute token={token} />}>
					<Route path="/profile" element={<Profile token={token} />} />
				</Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}