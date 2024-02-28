import { graphql } from "../generated/gql";

export const GetLanding = graphql(/*GraphQL*/ `
	query GetLanding {
		landingPages {
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
