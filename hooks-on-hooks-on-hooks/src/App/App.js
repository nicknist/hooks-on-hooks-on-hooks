import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import IdeaForm from '../IdeaForm/IdeaForm';
import IdeaContainer from '../IdeaContainer/IdeaContainer';

const App = () => {
  const [ideas, setIdeas] = useState([]);

  const sendIt = (newIdea) => setIdeas([...ideas, newIdea])

  return (
    <div className="App">
      <Header />
      <IdeaForm sendIt={sendIt}/>
      <IdeaContainer ideas={ideas}/>
    </div>
  );
}

export default App;
