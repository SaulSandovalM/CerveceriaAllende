import React, {Component} from 'react';
import {firebaseAuth} from '../firebase/Firebase';
import {Spinner, Container} from 'native-base';
import Login from './Login';
import Inventario from '../principal/Inventario';
import Principal from '../principal/Principal';

class Inicio extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    });
  }

  render() {
    return (
      <Container>
      {
        this.state.loggedIn
          ? <Principal/>
          : <Login/>
      }
      </Container>
    );
  }
}

export default Inicio;
