import React from "react";

const SelectedMode = async ({ params }: { params: { slug: string } }) => {
	console.log(params);
	return <div>SelectedMode</div>;
};

export default SelectedMode;
