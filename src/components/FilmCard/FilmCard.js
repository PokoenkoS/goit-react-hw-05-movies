import { Link, useLocation } from "react-router-dom";
import { ImgTag, Div, InfoContainer } from "./FilmCard.styled";

function FilmCard ({data}){
   const location = useLocation();console.log(location);
   
return (<>

    <Link to={location.state ?? '/'} >back</Link>
    <Div>
        
    <ImgTag src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path}`} alt="" width={""} />
    <InfoContainer>
    <h2>{(data.title)} ({(data.release_date && data.release_date.slice(0,4))})</h2>
    <p>User score: {Math.round(data.vote_average*10)}%</p>
    <h3>Overview</h3>
    <p>{(data.overview)}</p>
    <h3>Genres</h3>
    <p>{(data.genres && data.genres.map(genre=>{return(<li key={genre.name}>{genre.name}</li>)}))}</p>
    </InfoContainer>
    </Div>
    </>
)
}

export default FilmCard