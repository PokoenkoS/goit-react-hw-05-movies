import {useLocation } from "react-router-dom";
import { ImgTag, Item, List, StyledLink } from "./MovieList.styled";

function MovieList ({data}){
   const location = useLocation();
 
   return(
<List>
{data.map((movie)=>{
    return (
        <Item key={movie.id}>
        <StyledLink to={`/movies/${movie.id}` ?? '/'} state={{from: location}}>
        <h2>{movie.title} ({(movie.release_date && movie.release_date.slice(0,4))})</h2>
    <ImgTag 
    src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
    alt="" 
     />
   
    </StyledLink>
    </Item>
    )
  
})}
</List> 

   )

}

export default MovieList