import React from 'react';
import './App.css';
import Form from '../../Containers/Form/Form';
import IntentionsContainer from '../IntentionsContainer/IntentionsContainer'

 const App = () => {
  return (
    <body>
      <h1>Intention Tracker</h1>
      <Form />
      <IntentionsContainer />
    </body>
  );
}

export default App;