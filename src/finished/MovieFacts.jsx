import React,  {useState, useEffect} from 'react';
import GhibliApiService from '../services/ghibliApi';
import { Card} from '@edx/paragon';


const GhibliMovieCard = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    let mounted = true
    GhibliApiService.getMovie("12cfb892-aac0-4c5b-94af-521852e46d6a").then((data) => {
      if(mounted) {
        setMovie(data)
        console.log(data)
      }
      return () => mounted = false;
    })
  },[])
  const { title, director } = movie;
  return (
    <div className="mb-5">
      <h2>useEffect</h2>
      <Card>
        <Card.Body>
          <dl>
            <dd>Title</dd><dt>{title}</dt>
            <dd>Director</dd><dt>{director}</dt>
          </dl>
        </Card.Body>
      </Card>
    </div>
  )
};

export default GhibliMovieCard;
