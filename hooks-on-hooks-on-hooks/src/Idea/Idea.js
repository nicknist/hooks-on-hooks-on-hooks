import React from 'react';

const Idea = ({ idea, character }) => {
  return (
    <article className="idea">
      <h1>{character}:</h1>
      <p>{idea}</p>
    </article>
  )
}

export default Idea;
