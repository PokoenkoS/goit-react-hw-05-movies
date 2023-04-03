import { Link, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import movieApi from '../components/Api'
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState('');
  const location = useLocation();
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
           <Suspense>
          <Link to={`/movies/${movie.id}`} state={location}>
            {movie.title}
          </Link>
          </Suspense>
          </li>
        );
      })}
    </div>
      </main>
    );
  };
 


export default Movies;