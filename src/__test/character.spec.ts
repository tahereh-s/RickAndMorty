import {  configureStore } from '@reduxjs/toolkit';
import { getCharacters } from '../components/characterSlice';
import characterReducer from '../components/characterSlice'
import { request } from 'graphql-request';
const query = `
query($page:Int, $filter: FilterCharacter){
  characters(page:$page,filter:$filter){
  info {
      pages
      count
      next
      prev
  }
  results{
          id
          name
          image
          status
          gender
  }
}        
}
`

describe('character reducer', () => {
  const store = configureStore({
    reducer: {
        character: characterReducer,
    },
  });
//   it('Characters query', async () => {
   
//     const character = await request('https://rickandmortyapi.com/graphql', query)

 
// //  expect(data.characters.results.length).toBeGreaterThan(0);
//   })
  it('character is load', () => {
    store.dispatch(getCharacters({page:1,filter:{}}));
    const state = store.getState();   
    expect(state.character.characterInfo).toBeInstanceOf(Array);
  });
  it('character hasnt error', () => {
    store.dispatch(getCharacters({page:1,filter:{}}));
    const state = store.getState();   
    expect(state.character.error).toBeNull();
  });
  it('character api is loading', () => {
    store.dispatch(getCharacters({page:1,filter:{}}));
    const state = store.getState();   
    expect(state.character.loading).toBe(true);
  });
});