import { useSelector, useDispatch } from "react-redux"

import { toggleEditMode } from "../../features/user/userSlice"

import AccountCard from "../../components/AccountCard"
import Button from "../../components/Button"
import EditForm from "../../components/EditForm"

import "./style.scss"

export default function Profile({ token }) {
	const user = useSelector((state) => state.user.data)
	const isEditing = useSelector((state) => state.user.editing)
	const dispatch = useDispatch()

	return (
		<main className="bg-dark">
			<header className="header">
				<h1 className="header__title">
					{isEditing ? "Edit user info" : `Welcome back,\n${user?.userName} !`}
				</h1>
				{isEditing ? (
					<EditForm token={token} user={user} />
				) : (
					<Button type="button" onClick={() => dispatch(toggleEditMode())}>
						Edit Name
					</Button>
				)}
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