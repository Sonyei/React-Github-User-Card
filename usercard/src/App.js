
import React from 'react'
import './App.css';
import axios from 'axios'


class App extends React.Component {

state = {
  user: {},
  followers: []
}

componentDidMount() {
  axios
    .get('https://api.github.com/users/Sonyei')
    .then((res) =>{
    console.log(res.data)
      this.setState({
      user: res.data
        })
      })
      .catch(err => console.log(`This is the error -->`, err))
  axios
    .get('https://api.github.com/users/Sonyei/followers')
    .then((res) => {
      return res
      })
      .catch(err => console.log(`This is the error -->`, err))
}

// parent component which controls everything
// fetch data, set to state
//props
// When your component mounts, you will also fetch the user's followers using
// this endpoint:
//https://api.github.com/users/< Your github name >/followers
// set the above to state as well and display in app

render(){

  return (
    <div className="App">
      <h1>{this.state.user.login}</h1>
      <img width={"60"} alt={"Profile Avatar"} src={this.state.user.avatar_url}/>
      <h3>Followers: {this.state.user.followers}</h3>
    </div>
   );
  }
}

export default App;
