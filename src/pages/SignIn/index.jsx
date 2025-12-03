import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import InputWrapper from "../../components/InputWrapper"
import Button from "../../components/Button"

import "./style.scss"

export default function SignIn() {
	return (
		<main className="bg-dark">
			<section className="sign-in">
				<FontAwesomeIcon className="sign-in__icon" icon="user-circle" />
				<h1>Sign In</h1>
				<form>
					<InputWrapper role="field" type="text" id="username">
						Username
					</InputWrapper>
					<InputWrapper role="field" type="password" id="password">
						Password
					</InputWrapper>
					<InputWrapper role="checkbox" type="checkbox" id="remember-me">
						Remember me
					</InputWrapper>
					<Link to="/user" className="sign-in-button">Sign In</Link>
					<Button type="submit" large>Sign In</Button>
				</form>
			</section>
		</main>
	)
}