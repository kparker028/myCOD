import { graphql } from "../generated/gql";

export const GetModesFromLanding = graphql(/*GraphQL*/ `
	query GetModesFromLanding($slug: String!) {
		landingPage(where: { slug: $slug }) {
			description
			slug
			title
			heroImage {
				url
			}
			mode {
				title
				modeSlug
				modeImage {
					url
				}
			}
		}
	}
`);
