import React, { useState } from 'react';

const IdeaForm = ({ sendIt }) => {
  const [idea, setIdea] = useState("");
  const [character, setCharacter] = useState("");

  const handleChange = (value) => setIdea(value)
  const handleCharacter = (value) => setCharacter(value)

  const handleSubmit = () => {
    return sendIt({idea, character})
  }

  return (
    <form className="idea-form">
      <p>What's that idea?</p>
      <input onChange={(e) => handleChange(e.target.value)} type="text"/>
      <select onChange={(e) => handleCharacter(e.target.value)}>
        <option value="Character">--Please Choose a Character--</option>
        <option value="Jess">Jess</option>
        <option value="Nick">Nick</option>
        <option value="Winston">Winston</option>
        <option value="Cece">Cece</option>
        <option value="Schmidt">Schmidt</option>
      </select>
      <button onClick={handleSubmit} type="button">It's Jess</button>
    </form>
  )
}

export default IdeaForm;
