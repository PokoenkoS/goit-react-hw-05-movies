import { Link, Outlet, useParams} from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import movieApi from '../components/Api'
import FilmCard from 'components/FilmCard/FilmCard';

 const MoviesDetails = () => {
 
  const { movieId } = useParams();
  const [filmInfo, setFilmInfo] = useState([null]);


  useEffect(() => {
    movieApi.getInformationFilm(movieId).then(
     
      response => 
      
      setFilmInfo(response)
    );
}, [movieId, setFilmInfo]);

  return (
    <div>
      <FilmCard data={filmInfo}/>
   
      <ul>
        <li>
          <Suspense>
          <Link to="cast">Акторський склад</Link>
          </Suspense>
        </li>
        <li>
          <Suspense>
          <Link to="reviews">Огляди</Link>
          </Suspense>
        </li>
      </ul>
      <Outlet />
      </div>

  );
};

export default MoviesDetails