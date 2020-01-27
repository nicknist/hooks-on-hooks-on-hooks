import React from 'react';
import Idea from '../Idea/Idea';

const IdeaContainer = ({ ideas }) => {
  const mappedIdeas = ideas.map(idea => <Idea idea={idea.idea} character={idea.character}/>);

  return (
    <article>
      {mappedIdeas}
    </article>
  )
}

export default IdeaContainer;
