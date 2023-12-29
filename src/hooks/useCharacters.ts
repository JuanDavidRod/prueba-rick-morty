import { useState } from "react"
import { consultCharacter } from "../api/service"
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

export const useCharacters = () => {
    const [characters, setCharacters] = useState<Character[] | null>(null)
    
    const getCharacters = async () => {
        const dataApi = await consultCharacter()
        const processedCharacters = processDataCharacter(dataApi)
        setCharacters(processedCharacters)
    }
        


    return {characters, getCharacters}
}