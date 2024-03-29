import { useSearchParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import movieApi from '../../components/Api'
import SearchForm from 'components/SearchForm/SearchForm';

import MovieList from 'components/MovieList/MovieList';
import { MainDiv } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearhParams ]= useSearchParams();

  const query = searchParams.get('query');
 
  useEffect(() => {
    if (query) {
      movieApi.getFilm(query)
      .then(response => 
      setMovies([...response.results])
       );
    }
  }, [query])

  const formSubmitHendler =data=> {
    setSearhParams({query:data});
    
      }

    return (

<MainDiv>
<SearchForm onSubmit={formSubmitHendler}/>
{movies.length >0 &&
<Suspense> 
<MovieList data = {movies}/>
</Suspense>}
</MainDiv>
);
  };
 
export default Movies;