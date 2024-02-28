import React from "react";
import "./styles.css";

const Loading = () => {
	return (
		<div
			className='loading'
			style={{
				backgroundImage:
					"url(https://i.ytimg.com/vi/-qZqpM-k7sY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGCIgLyh_MA8=&rs=AOn4CLAhpVkiPN1buQmnYqQsaNvSzU6rZg)",
			}}
		>
			<p className='loading-text'> ...Fetching Data</p>
		</div>
	);
};

export default Loading;
