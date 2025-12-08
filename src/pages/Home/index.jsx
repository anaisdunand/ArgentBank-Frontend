import FeatureCard from "../../components/FeatureCard"

import featuresData from "../../assets/data/features.json"

import "./style.scss"

export default function Home() {
	return (
		<main>
			<section className="hero" aria-label="Promoted Content">
				<div className="hero__content">
					<h1 className="hero__title">
						No fees.<br/>
						No minimum deposit.<br/>
						High interest rates.
					</h1>
					<p className="hero__subtitle">
						Open a savings account with Argent Bank today!
					</p>
				</div>
			</section>
			<section className="features" aria-label="Features">
				{featuresData.map((item, index) => (
					<FeatureCard
						key={index}
						title={item.title}
						content={item.content}
						src={item.icon.src} alt={item.icon.alt}
					/>
				))}
			</section>
        </main>
    )
}