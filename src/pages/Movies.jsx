import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import movieApi from '../components/Api'
import SearchForm from 'components/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState('');
  console.log(movies)

  useEffect(() => {
    if (!value) {
      return;
  }
      movieApi.getFilm(value)
      .then(response => 
        
      setMovies([...response.results])
       );
  }, [value])

  const formSubmitHendler =data=> {
    setValue(data);
  
         
      }

    return (
      <main>
        <SearchForm onSubmit={formSubmitHendler}/>
       <div>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
           
          <Link to={`/movie/${movie.id}`}>
            {movie.title}
          </Link>
          </li>
        );
      })}
    </div>
      </main>
    );
  };
 


export default Movies;