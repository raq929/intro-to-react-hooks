import { DataTable } from '@edx/paragon';
import React,  {useState, useEffect } from 'react';
import GhibliApiService from '../services/ghibliApi';
import { MovieTable } from '../helperComponents';

/* INSTRUCTIONS for useEffect

  Part 1
   Use the GhibliApiService.getMovieList with useEffect to fetch the movies.

   Notes:
    - getMovieList does not take any arguments and returns a list of movies

  Part 2
    WE WILL DO THIS TOGETHER
    Create a custom hook, `useMovies` that returns the movies and can be reused in any component

*/


const GhibliMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    GhibliApiService.getMovieList().then((data) => {
    setMovies(data);
    
    })
  }, [])
  return (
    <>
      <h1>useEffect</h1>
      <MovieTable movies={movies} />
      </>
  )
}

const usePictures = () => {
  const [pics, setPics] = useState([]);
  const [count, setCount] = useState(0);
  const [countInTimeout, setCountInTimeout] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 5 second!')
      setCountInTimeout(count); // count is 0 here
        GhibliApiService.getMovieList().then((data)=>{
        setPics(data)
            
    }, 5000);
    setCount(5);
    console.log("count: " +count)
    console.log("setTimeout count: " + countInTimeout)
    return () => clearTimeout(timer);
    
    })
  },[])
  return pics
}
const GhiblicustomHook = () => {
  

  return (
    <>
      <h1> useMovies - Custom Hook</h1>
      <MovieTable movies = {usePictures()} />

     
    </>
  )
}


export default GhiblicustomHook
