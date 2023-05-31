import {  configureStore } from '@reduxjs/toolkit';
import { getCharacters } from '../components/characterSlice';
import characterReducer from '../components/characterSlice'

describe('character reducer', () => {
  const store = configureStore({
    reducer: {
        character: characterReducer,
    },
  });

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