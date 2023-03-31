import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import movieApi from '../components/Api'


export const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        movieApi.getMostPopular()
        .then(response => 
           
        setMovies([...response.results])
         );
    }, [])
  
      return (
        <main>
          <div>Домашня сторінка </div>
          <div>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
            <Link  to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
            </li>
          );
        })}
      </div>
        </main>
      );
    };
   
     
  export default Home