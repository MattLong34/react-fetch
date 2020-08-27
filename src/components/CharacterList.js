import React from 'react'
import CharacterCard from './CharacterCard'

export default function CharacterList(props){
  
  const showCharacters = () => props.characters.map(character => <CharacterCard addFavorite={props.addFavorite} character={character}/>)
  return(
    <ul className='character-list'>
      {showCharacters()}
    </ul>
  )
}