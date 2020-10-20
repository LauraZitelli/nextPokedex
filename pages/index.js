import React from 'react';

export async function getStaticProps(context) {

  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then((serverResponse) => {
      if(serverResponse.ok) {
        return serverResponse.json();
      }
    })
    .then((objectResponse) => {
      return objectResponse.pokemon_entries;
    })

  return {
    props: {
      pokemons
    }, // will be passed to the page component as props
  }
}

export default function Home(props) {
  const { pokemons } = props;

  return(
    <div>
      <h1>Pokedex</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.entry_number}>
            {pokemon.pokemon_species.name}
          </li>
        ))}
      </ul>
    </div>
  );
}