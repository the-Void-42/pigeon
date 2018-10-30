import React, { Component } from 'react';
import '../styles/App.css';
import Header from '../components/Header.js'
import TweetForm from '../components/TweetForm.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "BigBird"
    }
  }

  render() {
    return (
      <div className="App">
        {/* <Header username="{this.state.username}"/> */}
        <Header username={this.state.username}/>
        <TweetForm/>
      </div>
    );
  }
}

export default App;
