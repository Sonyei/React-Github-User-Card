import React from "react";

export default function SearchForm() {
	const onChange = () => {};

	const onSubmit = () => {};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label>Username:</label>
				<input
					type="text"
					name="username"
					placeholder="username here"
					value={""}
					onChange={onChange}
				></input>
				<button type="submit">Check for User</button>
			</form>
		</div>
	);
}
