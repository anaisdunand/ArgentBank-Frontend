import Button from "../Button"
import "./style.scss"

export default function AccountCard({ account, amount, status }) {
    return (
        <article className="account-card">
			<div className="account-card__content">
				<h2 className="account-card__title">{`Argent Bank ${account}`}</h2>
                <p className="account-card__amount">
                    <span className="account-card__amount--bold">
                        {amount}
                    </span><br/>
                    {`${status} Balance`}
                </p>
			</div>
			<div className="account-card__content account-card__content--cta">
                <Button type="button" large>View transactions</Button>
			</div>
		</article>
    )
}