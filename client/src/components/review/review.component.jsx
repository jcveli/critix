import { useEffect, useState } from 'react';
import ReviewForm from '../review-form/review-form.component';
import ReviewContent from '../review-content/review-content.component';
import { fetchReviewData } from '../../utils/APIConnection';
import './review.styles.scss'

const Review = ({movieId}) => {
    const [reviews, setReviews] = useState([]);

    

    useEffect(() => { 
        const getReviewData = async (id) => { 
            const reviewData = await fetchReviewData(id);
            setReviews(reviewData); 
        }
        getReviewData(movieId);
    },[movieId]);

    return(
        <div className='review-container'>
            <ReviewForm />
            <div className='reviews-list-container'>
                <h2>Reviews</h2>
                {
                    reviews.map((review) => {
                        return(
                            <ReviewContent key={review.id} review={review}/>
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default Review;