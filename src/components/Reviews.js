import { useEffect, useState } from 'react';
import movieApi from '../components/Api'
import {useParams} from 'react-router-dom';

export const Reviews = () => {

    const {  movieId } = useParams();
    const [reviews, setrReviews] = useState();
    console.log(reviews);

        useEffect(() => {
            movieApi.getReviews(movieId)
            .then(response => 
               
            setrReviews([...response.results])
             );
        }, [ movieId])

        return (
            <div>
                 <ul>
        {reviews.map((review) => {return (
            <li key={review.id}>
                
                <h2>
         {review.autor}</h2>
         <p>{review.content}</p>
            </li>
     
        )}
        )
        } 
        
        </ul> 
            </div>
        )
}