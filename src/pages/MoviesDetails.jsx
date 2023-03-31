import { Link, Outlet, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import movieApi from '../components/Api'


export const MoviesDetails = () => {
 
  const { movieId } = useParams();
  const [filmInfo, setFilmInfo] = useState([null]);
console.log(filmInfo);
  useEffect(() => {
    movieApi.getInformationFilm(movieId).then(
     
      response => 
      
      setFilmInfo(response)
    );
}, [movieId, setFilmInfo]);

  return (
    <div>
    <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${filmInfo.backdrop_path}`} alt="" width={300} />
    <h1>{(filmInfo.title)} ({(filmInfo.release_date && filmInfo.release_date.slice(0,4))})</h1>
    <p>User score: {Math.round(filmInfo.vote_average*10)}%</p>
    <h2>Overview</h2>
    <p>{(filmInfo.overview)}</p>
    <h3>Genres</h3>
    <p>{(filmInfo.genres && filmInfo.genres.map(genre=>{return(<li key={genre.name}>{genre.name}</li>)}))}</p>
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

