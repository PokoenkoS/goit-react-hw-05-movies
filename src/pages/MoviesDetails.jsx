import { Link, Outlet, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import movieApi from '../components/Api'
import FilmCard from 'components/FilmCard/FilmCard';

export const MoviesDetails = () => {
 
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
          <Link to="cast">Акторський склад</Link>
        </li>
        <li>
          <Link to="reviews">Огляди</Link>
        </li>
      </ul>
      <Outlet />
      </div>

  );
};

