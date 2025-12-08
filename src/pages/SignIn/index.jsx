import { Link, useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { useLoginMutation } from "../../features/api"
import { setCredentials } from "../../features/auth/authSlice"

import InputWrapper from "../../components/InputWrapper"
import Button from "../../components/Button"

import "./style.scss"

export default function SignIn() {
	const [login, { isLoading }] = useLoginMutation()
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSubmit = async (event) => {
		event.preventDefault()
	
		const email = event.target.email.value
		const password = event.target.password.value
		const rememberMe = event.target.remember.checked

		try {
			const response = await login({ email, password }).unwrap()
			const token = response.token

			if (rememberMe) localStorage.setItem("token", token)
			dispatch(setCredentials({ token }))
			navigate("/profile")
		} catch (error) {
			console.error("Erreur de connexion :", error)
		}
	}

	return (
		<main className="bg-dark">
			<section className="sign-in">
				<FontAwesomeIcon className="sign-in__icon" icon="user-circle" />
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit}>
					<InputWrapper role="field" type="email" id="email">
						Email
					</InputWrapper>
					<InputWrapper role="field" type="password" id="password">
						Password
					</InputWrapper>
					<InputWrapper role="checkbox" type="checkbox" id="remember">
						Remember me
					</InputWrapper>
					<Button type="submit" large disabled={isLoading}>Sign In</Button>
				</form>
			</section>
		</main>
	)
}