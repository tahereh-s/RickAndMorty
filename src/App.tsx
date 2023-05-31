import React, { useState } from 'react';
import Character from './components/character';
import { Route, Routes } from 'react-router';
import Home from './components/home';

function App() {


  return (
<div>
      <Routes>
        <Route path="" element={ <Home /> } />
        <Route path="/characters" element={ <Character /> } />    
        <Route path="*" element={
          <div className="container">
            <h1>Page not Found</h1><h1>Page not Found</h1><h1>Page not Found</h1>
          </div>
        } />
         
      </Routes>
    </div>






   
    // <BrowserRouter>
    //   <Layout>
    //     <Routes>
    //       <Route path="/" element={<Characters />} />
    //       <Route path="/character/:id" element={<CharacterDetails />} />
    //     </Routes>
    //   </Layout>
    // </BrowserRouter>
    // <>
    // <Home/> </>
  // <Grid sx={{ m: 6 }}>
  //   <Grid container alignItems="center">
  //     <Grid item xs={12}>
  //       <TextField
  //         label="Search by name"
  //         value={searchTerm}
  //         // onChange={handleInputChange}
  //         fullWidth
  //       />
  //     </Grid>
  //   </Grid>
  //   <Character />
  //   {!loading && (
  //     <Pagination
      
  //       className="w-full flex justify-center items-center mb-8"
  //       count={data?.characters?.info?.count}
  //       page={data?.characters?.info?.page}
  //       // onChange={handlePageChange}
  //       variant="outlined"
  //       color="primary"
  //     />
  //   )}
  // </Grid>
  )
}
export default App;

