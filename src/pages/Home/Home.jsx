
import { useEffect, useState } from 'react';
import movieApi from '../../components/Api'
import MovieList from 'components/MovieList/MovieList';
import { Title } from './Home.styled';

export const Home = () => {

    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
        movieApi.getMostPopular()
        .then(response => 
         setMovies([...response.results])
         );
    }, []);
  
      return (
        <main>
          <Title>Trending today</Title>
          <MovieList data={movies}/>
         </main>
      );
    };
   
     
  export default Home;