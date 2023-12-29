
export const consultCharacter = () => {
    return fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(json => {return json.results})
}