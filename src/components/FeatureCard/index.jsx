import "./style.scss"

export default function FeatureCard({ src, alt, title, content }) {
	return (
		<div className="feature-card">
			<img className="feature-card__icon" src={src} alt={`${alt} Icon`} />
			<h2 className="feature-card__title">{title}</h2>
			<p>{content}</p>
		</div>
	)
}