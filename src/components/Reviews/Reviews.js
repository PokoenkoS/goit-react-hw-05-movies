import { useEffect, useState } from 'react';
import movieApi from '../Api'
import {useParams} from 'react-router-dom';
import { Li, Ul, H3 } from "./Reviews.styled";

export const Reviews = () => {

    const {  movieId } = useParams();
    const [reviews, setReviews] = useState([]);
   
        useEffect(() => {
            movieApi.getReviews(movieId)
            .then(response => {
                const reviewsData = response.results.map(review => {return({author: review.author, review: review.content, id: review.id})})
                setReviews(reviewsData);
              })
        }, [ movieId])

        return (
            <>
                  {reviews.length ===0 ?
                <p> there are no reviews yet</p>
                :
                <>
                    <H3 className="isHidden">Reviews</H3> 
                    <Ul>
                        {reviews.map(review => {
                            return(
                                <Li key={review.id}>
                                    <h3>Author: {review.author}</h3>
                                    <p>{review.review}</p>
                                </Li>
                            )
                        })}
                    </Ul>
                </>
            }
            </>
        )
}