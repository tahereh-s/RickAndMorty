import React, { useEffect } from 'react';
import './App.css';
import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from './graphql/queries';
import { Grid, Pagination, TextField } from '@mui/material';
import CharacterItemList from './components/CharacterItemLists';

function App() {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: 1 }
  })

  return (
    <Grid container py={8} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {data?.characters?.results?.map((character:any) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
            <CharacterItemList  character={character} />
        </Grid>
    ))}
</Grid>
  )
     }
export default App;

