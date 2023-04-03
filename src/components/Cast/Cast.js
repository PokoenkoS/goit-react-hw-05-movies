import { useEffect, useState } from 'react';
import movieApi from '../Api'
import {useParams} from 'react-router-dom';
import { Img, Ul, Li, H3 } from "./Cast.styled";

export const Cast = () => {
    const {  movieId } = useParams();
const [actors, setActors] = useState([]);

    useEffect(() => {
        movieApi.getInformationActor( movieId)
        .then(response => { const actors = response.cast.map(actor => {
            return({name: actor.name, character: actor.character, id: actor.credit_id, photo: actor.profile_path})
          })
          setActors(actors)
        }
           
        
         );
    }, [ movieId])

return (
    <>
    <H3 className="isHidden">Actors</H3>
    {actors.length===0 ?
            <p>There is no information about actors</p>
            :
        <Ul>
        {actors.map(actor => {
            return (
            <Li key={actor.id}>
                <Img src={actor.photo ? (`https://www.themoviedb.org/t/p/original/${actor.photo}`) : ('https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg')} alt={actor.name}></Img>
                <p>Actor
         {actor.name}</p>
            </Li>
     
        )}
        )
        } 
    
        </Ul>
}
        </>
   )
} 
     
   


