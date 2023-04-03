import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import movieApi from '../components/Api'


export const Home = () => {

    const [movies, setMovies] = useState([]);
    const location = useLocation();
console.log(location);
    useEffect(() => {
        movieApi.getMostPopular()
        .then(response => 
           
        setMovies([...response.results])
         );
    }, [])
  
      return (
        <main>
          <div>Trending today</div>
          <div>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
            <Link  to={`/movies/${movie.id}`} state={location}>
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