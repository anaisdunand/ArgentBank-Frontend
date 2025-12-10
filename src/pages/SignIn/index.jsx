import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { usePostLoginMutation } from "../../features/api"
import { signIn } from "../../features/auth/authSlice"

import FormField from "../../components/FormField"
import Button from "../../components/Button"

import "./style.scss"

export default function SignIn() {
	const [postLogin, { isLoading }] = usePostLoginMutation()

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSubmit = async (event) => {
		event.preventDefault()
	
		const email = event.target.email.value
		const password = event.target.password.value
		const rememberMe = event.target.rememberme.checked

		try {
			const response = await postLogin({ email, password }).unwrap()
			const token = response.body.token

			if (rememberMe) localStorage.setItem("token", token)
			dispatch(signIn({ token }))

			navigate("/profile")
		} catch (error) {
			console.error("Login failed", error)
		}
	}

	return (
		<main className="bg-dark">
			<section className="sign-in">
				<FontAwesomeIcon className="sign-in__icon" icon="user-circle" />
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit}>
					<FormField type="email" id="email">
						Email
					</FormField>
					<FormField type="password" id="password">
						Password
					</FormField>
					<FormField type="checkbox" id="rememberme" modifier="checkbox">
						Remember me
					</FormField>
					<Button type="submit" large disabled={isLoading}>Sign In</Button>
				</form>
			</section>
		</main>
	)
}