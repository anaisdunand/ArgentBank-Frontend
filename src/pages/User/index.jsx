import AccountCard from "../../components/AccountCard"
import Button from "../../components/Button"

import "./style.scss"

export default function User() {
	return (
		<main className="bg-dark">
			<header className="header">
				<h1>
					Welcome back<br/>
					Tony Jarvis!
				</h1>
				<Button type="button">Edit Name</Button>
			</header>
			<section aria-label="Accounts">
				<AccountCard
					account="Checking (x8349)"
					amount="$2,082.79"
					status="Available"
				/>
				<AccountCard
					account="Savings (x6712)"
					amount="$10,928.42"
					status="Available"
				/>
				<AccountCard
					account="Credit Card (x8349)"
					amount="$184.30"
					status="Current"
				/>
			</section>
		</main>
    )
}