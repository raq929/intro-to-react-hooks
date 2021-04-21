import React,  {useState, useEffect} from 'react';
import GhibliApiService from '../services/ghibliApi';
import { Card, Button } from '@edx/paragon';


const GhibliMovieCard = () => {
  const [movieId, setMovieId] = useState("58611129-2dbc-4a81-a72f-77ddfc1b1b49");
  const [movie, setMovie] = useState({});

  useEffect(() => {
    let mounted = true
    GhibliApiService.getMovie(movieId).then((data) => {
      if(mounted) {
        setMovie(data)
        console.log(data)
      }
    })
    return () => mounted = false;
  },[movieId])

  const { title, director, release_date: releaseDate, original_title: originalTitle } = movie;
  return (
    <div className="mb-5">
      <h2>useEffect</h2>
      <h3 className="mt-4">Pick a movie</h3>
      <Button variant="link" onClick={() => setMovieId("58611129-2dbc-4a81-a72f-77ddfc1b1b49")}>My Neighbor Totoro</Button>
      <Button variant="link" onClick={() => setMovieId("0440483e-ca0e-4120-8c50-4c8cd9b965d6")}>Princess Mononoke</Button>
      <Button variant="link" onClick={() => setMovieId("ea660b10-85c4-4ae3-8a5f-41cea3648e3e")}>Kiki's Delivery Service</Button>

      <Card>
        <Card.Body>
          <dl>
            <dt>Title</dt><dd>{title} {originalTitle}</dd>
            <dt>Director</dt><dd>{director}</dd>
            <dt>Release Date</dt><dd>{releaseDate}</dd>
          </dl>
        </Card.Body>
      </Card>
    </div>
  )
};

export default GhibliMovieCard;
