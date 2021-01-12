import React from "react";

function GitCards(props) {
	return (
		<div>
			<h1>{props.user.login}</h1>
			<img
				className="pics"
				width={"60"}
				alt={`of ${props.user.login}'s profile avatar`}
				src={props.user.avatar_url}
			/>
			<h2>Currently Following {props.user.login}</h2>
		</div>
	);
}

export default GitCards;
