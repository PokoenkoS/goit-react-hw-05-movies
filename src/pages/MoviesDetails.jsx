import { Link, Outlet, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import movieApi from '../components/Api'


export const MoviesDetails = () => {
 
  const { movieId } = useParams();
  const {filmInfo, setFilmInfo} = useState(null);
// console.log(filmInfo);

  useEffect(() => {
    movieApi.getInformationFilm(movieId).then(
     
      response => 
      // console.log(response)
      setFilmInfo([...response.title])
    );
}, [movieId, setFilmInfo]);

  return (
    <>
    <img src={""} alt="" />
      <h1>MoviesDetails: {""}</h1>
      <ul>
        <li>
          <Link to="cast">Акторський склад</Link>
        </li>
        <li>
          <Link to="review">Огляди</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

