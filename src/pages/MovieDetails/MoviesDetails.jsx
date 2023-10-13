import { Link, Outlet, useParams, useLocation, useNavigate} from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import movieApi from '../../components/Api'
import { ImgTag, Div, Item, List, Btn, MainDiv } from "./MoviesDetails.styled";

 const MoviesDetails = () => {
 
  const { movieId } = useParams();
  const [filmInfo, setFilmInfo] = useState([null]);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || '/';
  const goBackPage = () => navigate(from);

  useEffect(() => {
    movieApi.getInformationFilm(movieId).then(
     response => setFilmInfo(response)
    );
}, [movieId, setFilmInfo]);

  return (<MainDiv>
    <Btn onClick={goBackPage}>back</Btn>
    <h2>{(filmInfo.title)} ({(filmInfo.release_date && filmInfo.release_date.slice(0,4))})</h2>
    <Div>
    
<ImgTag 
    src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${filmInfo.backdrop_path}`}
    alt="" width={""}
     />
    <Div>
    
    <p>User score: {Math.round(filmInfo.vote_average*10)}%</p>
    <h3>Overview</h3>
    <p>{(filmInfo.overview)}</p>
    <h3>Genres</h3>
    <List>{(filmInfo.genres && filmInfo.genres.map(genre=>{return(<li key={genre.name}>{genre.name}</li>)}))}</List>
    </Div>
    
<div>  
  <h3> Additional information</h3>
      <List>
        <Item>
          <Suspense>
          <Link to="cast" state={location.state}>Actors</Link>
          </Suspense>
        </Item>
        <Item>
          <Suspense>
          <Link to="reviews"  state={location.state}>Reviews</Link>
          </Suspense>
        </Item>
      </List>
      </div> 
      <Outlet />
      
      </Div>
      </MainDiv>
  );
};

export default MoviesDetails