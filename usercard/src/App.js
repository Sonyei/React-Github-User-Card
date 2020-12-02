
import React from 'react'
import './App.css';
import axios from 'axios'
import GitCards from './GitCards'


class App extends React.Component {

state = {
  user: {},
  followers: []
}

 componentDidMount() {
   axios
    .get('https://api.github.com/users/sonyei')
    .then(res =>
      this.setState({
      user: res.data
        }))
      .catch(err => console.log(err))
  axios
    .get('https://api.github.com/users/sonyei/followers')
    .then(res =>
      this.setState({
      followers: res.data
        }))
      .catch(err => console.log(err))
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
      <GitCards user={this.state.user}/>
            {this.state.followers.map(follower => (
              <div className='card' key={follower.id}>
              <img width={"45"} src={follower.avatar_url} alt={"follower profile image"}/>
                <h3>User:{follower.login}</h3>
              </div>
            ))}
      </div>
   )}
  }

export default App;
