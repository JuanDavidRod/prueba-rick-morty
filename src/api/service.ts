import { type Character, type Result } from '../types'

const processDataCharacter = (data: Result[]): Character[] => {
  return data.map( (datach: Result) => {
      return {
              id: datach.id,
              name: datach.name,
              image: datach.image
          }
  })
}

export const consultCharacter = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const json = await response.json()

      const results = processDataCharacter(json.results)

      return results
    } catch (e){
      throw new Error('Error cargando datos de los personajes 😥')
    }
}