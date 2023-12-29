import { useState } from "react"
import { consultCharacter } from "../api/service"
import { type Character } from '../types'



export const useCharacters = () => {
    const [characters, setCharacters] = useState<Character[] | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const getCharacters = async () => {
        try {
            setLoading(true)
            setError(null)

            const CharacterList = await consultCharacter()
            setCharacters(CharacterList)
        }catch (e: any){
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }
        


    return {characters, getCharacters, loading, error}
}