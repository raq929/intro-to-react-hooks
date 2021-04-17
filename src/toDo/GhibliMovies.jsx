import { DataTable } from '@edx/paragon';
import React,  {useState, useEffect} from 'react';
import GhibliApiService from '../services/ghibliApi';
import { MovieTable } from '../helperComponents';

/* INSTRUCTIONS for useEffect

  Part 1
   Use the GhibliApiService.getMovieList with useEffect to fetch the movies.

  Part 2
   Create a custom hook, `useMovies` that returns the movies and can be reused in any component

*/



const GhibliMovies = () => {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <h1>useEffect</h1>
      <MovieTable movies={movies} />
    </>
  )
};

export default GhibliMovies
