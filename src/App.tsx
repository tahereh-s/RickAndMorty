import React, { useEffect, useState } from 'react';
import './App.css';
import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from './graphql/queries';
import Character from './components/character';
import { Grid, Pagination, TextField } from '@mui/material';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: 1 }
  })

  return (

    <Grid sx={{ m: 6 }}>
    <Grid container alignItems="center">
      <Grid item xs={12}>
        <TextField
          label="Search by name"
          value={searchTerm}
          // onChange={handleInputChange}
          fullWidth
        />
      </Grid>
    </Grid>
    <Character />
    {!loading && (
      <Pagination
      
        className="w-full flex justify-center items-center mb-8"
        count={data?.characters?.info?.count}
        page={data?.characters?.info?.page}
        // onChange={handlePageChange}
        variant="outlined"
        color="primary"
      />
    )}
  </Grid>
  )
}
export default App;

