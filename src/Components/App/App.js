import React, { Component } from 'react';
import './App.css';
import Form from '../../Containers/Form/Form';
import IntentionsContainer from '../IntentionsContainer/IntentionsContainer'

 class App extends Component {
  constructor() {
    super()
    
    this.state={}
  }  

  render() {
    return (
      <body>
        <Form />
        <IntentionsContainer />
      </body>
    );
  }
}

export default App;