import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import fbConnection from '../helpers/data/connection';


import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Auth />
        <h2>React Hoarder</h2>
        <button className="btn btn-info">Too Much</button>
      </div>
    );
  }
}


export default App;
