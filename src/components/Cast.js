import { useEffect, useState } from 'react';
import movieApi from '../components/Api'
import {useParams} from 'react-router-dom';

export const Cast = () => {
    const {  movieId } = useParams();
const [actors, setActors] = useState();
// console.log( actors);
    useEffect(() => {
        movieApi.getInformationActor( movieId)
        .then(response => 
           
        setActors([...response.cast])
         );
    }, [ movieId])

return(
    <div>
        <ul>
        {actors.map((actor) => {return (
            <li key={actor.id}>
                <img src={actor.profile_path}></img>
                <p>Actor
         {actor.name}</p>
            </li>
     
        )}
        )
        } 
        
        </ul>
        </div>
   )
} 
     
   


