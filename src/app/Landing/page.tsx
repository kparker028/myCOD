import { getLanding } from "@/Fetching/landingData";
import React from "react";
import "./styles.css";
import Link from "next/link";

const Landing = async () => {
	const data = await getLanding();
	const { landingPages } = data;
	return (
		<div className='modes-container'>
			{landingPages.map((landing, i) => {
				console.log(landing.slug, "data");
				return (
					<Link
						className='link-container'
						href='/Langing/[slug]'
						as={`/Landing/${landing.slug}`}
					>
						<div
							key={i}
							className='mode-container'
							style={{ backgroundImage: `url(${landing.heroImage.url})` }}
						>
							<div className='content-container'>
								<p className='title'>{landing.title}</p>
								<p className='description'>{landing.description}</p>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Landing;
