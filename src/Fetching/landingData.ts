import { graphqlClient } from "@/graphql/client";
import {
	GetLandingDocument,
	GetModesFromLandingDocument,
	GetModesFromLandingQueryVariables,
} from "@/graphql/generated/graphql";

export const getModesFromLanding = async (
	variables: GetModesFromLandingQueryVariables
) => {
	const res = await graphqlClient.request(
		GetModesFromLandingDocument,
		variables
	);
	return res.landingPage;
};

export const getLanding = async () =>
	await graphqlClient.request(GetLandingDocument);
