import React, { Component } from 'react';
import Menuarriba from './Components/menuarriba';
import Persona from  './Components/persona';

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Menuarriba/>
   <Persona/>
</React.Fragment>
    );
  }
}

export default App;
