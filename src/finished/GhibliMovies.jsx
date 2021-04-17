import React,  {useState, useEffect} from 'react';
import GhibliApiService from '../services/ghibliApi';
import { MovieTable } from '../helperComponents';

// eslint-disable-next-line no-unused-vars
const GhibliMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    let mounted = true
    GhibliApiService.getMovieList().then((data) => {
      if(mounted) {
        setMovies(data)
        console.log(data)
      }
      return () => mounted = false;
    })
  },[])

  return (
    <>
      <h1>useEffect</h1>
      <MovieTable movies={movies} />
    </>
  )
};

// custom hook (takes the above code and creates a custom hook from it)
const useMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    let mounted = true
    GhibliApiService.getMovieList().then((data) => {
      if(mounted) {
        setMovies(data)
      }
      return () => mounted = false;
    })
  },[])
  return movies
}

const GhibliMoviesWithCustomHook = () => {
  const movies = useMovies();

  return (
    <>
      <h1>useEffect</h1>
      <MovieTable movies={movies} />
    </>
  )
}


export default GhibliMoviesWithCustomHook
