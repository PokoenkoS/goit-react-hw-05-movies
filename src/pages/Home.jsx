
import { useEffect, useState } from 'react';
import movieApi from '../components/Api'
import MovieList from 'components/MovieList/MovieList';


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
          <h2>Trending today</h2>
          <MovieList data={movies}/>
         </main>
      );
    };
   
     
  export default Home