import { useEffect } from "react"

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


import { useCharacters } from "./hooks/useCharacters";
import Characters from "./components/Characters";

function App() {
  
  const { characters, getCharacters } = useCharacters()

  useEffect( () => {
    getCharacters()
  }, [])

  return (
    <Box sx={{ width: '720px', textAlign: 'center'}}>
      <h1>Personajes Rick and Morty</h1>
      <Grid container spacing={2}>
        {
          characters && characters.map(({id, name, image}) => {
            return  <Characters
                      key={id}
                      name={name}
                      image={image}
                    />
          })
        }
      </Grid>
    </Box>
  )
}

export default App
