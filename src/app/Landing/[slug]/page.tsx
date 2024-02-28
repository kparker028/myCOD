import { getModesFromLanding } from "@/Fetching/landingData";
import React from "react";
import "./styles.css";
import Link from "next/link";

const GameModes = async ({ params }: { params: { slug: string } }) => {
	const gameModes = await getModesFromLanding(params);
	console.log(params, "params");
	return (
		<div
			className='modes-container'
			style={{
				backgroundImage:
					"url(https://i.ytimg.com/vi/WSNZ7yKUVIM/maxresdefault.jpg)",
			}}
		>
			<div className='select-container'>
				<p className='tag'>[playlist]</p>
				{gameModes?.mode.map((m, i) => {
					console.log(m.modeSlug, "modeslug");
					return (
						<Link
							className='link-container'
							href='/Langing/[slug]'
							as={`/Landing/${params.slug}/${m.modeSlug}/`}
						>
							<div
								key={i}
								className='mode'
								style={{
									backgroundImage:
										"url(https://static.vecteezy.com/system/resources/thumbnails/016/828/142/small_2x/abstract-topographic-map-background-abstract-topographic-map-background-imitation-of-a-geographical-map-geographic-map-conceptual-design-elegant-background-for-presentations-free-vector.jpg)",
								}}
							>
								<p className='title'>{m.title}</p>
								<img alt='#' src={m.modeImage.url} />
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default GameModes;
