import React from "react";
import "./App.css";
import axios from "axios";
import GitCards from "./GitCards";
import Footer from "./Footer";
import SearchForm from "./SearchForm";

class App extends React.Component {
	state = {
		user: {},
		followers: [],
		text: "",
	};

	componentDidMount() {
		axios
			.get("https://api.github.com/users/sonyei")
			.then((res) =>
				this.setState({
					user: res.data,
				})
			)
			.catch((err) => console.log(err));
		axios
			.get("https://api.github.com/users/sonyei/followers")
			.then((res) =>
				this.setState({
					followers: res.data,
				})
			)
			.catch((err) => console.log(err));
	}

	onChange = (e) => {
		this.setState({ text: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.text === "") {
			this.props.setAlert("Please enter a username");
		} else {
			this.props.searchUsers(this.state.text);
			this.setState({ text: "" });
		}
	};

	// parent component which controls everything
	// fetch data, set to state
	//props
	// When your component mounts, you will also fetch the user's followers using
	// this endpoint:
	//https://api.github.com/users/< Your github name >/followers
	// set the above to state as well and display in app

	render() {
		return (
			<div className="App">
				<GitCards className="card-wrapper" user={this.state.user} />
				<div className="card-container">
					{this.state.followers.map((follower) => (
						<div className="cards" key={follower.id}>
							<img
								width={"45"}
								src={follower.avatar_url}
								alt={`of ${follower.login}'s profile avatar`}
							/>
							<h3>User:{follower.login}</h3>
						</div>
					))}
				</div>
				<SearchForm onChange={this.onChange} />
				<Footer />
			</div>
		);
	}
}

export default App;
