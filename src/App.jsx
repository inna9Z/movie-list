

import { useState } from 'react';
import MovieList from './components/MovieList'
import Searchbar from './components/SearchBar'
import data from '../film.json'
import './App.css'

function App() {
  const [value, setValue] = useState('');

  const movieData = data.filter((movie) => {
    const lowercaseValue = value.toLowerCase();
    const lowercaseTitle = movie.Title.toLowerCase();
    return lowercaseTitle.includes(lowercaseValue);
  });


  return (
    <>
      <h1>Movies List</h1>
      <Searchbar setValue={setValue} />
      <MovieList data={movieData} />
    </>
  )
}

export default App;
