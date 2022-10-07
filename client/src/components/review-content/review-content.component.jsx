import { Avatar, Rating } from '@mui/material';
import { DateFormat } from '../../utils/DateFormat';

import './review-content.styles.scss';

const ReviewContent = ({review}) => { 
    const {author, content, created_at, updated_at} = review; 
    const {avatar_path, rating} = review.author_details; 
    let rate = <span className='user-rating'></span>;


    let createDate = DateFormat(created_at);
    let updateDate = DateFormat(updated_at);
    
    


    // console.log(createTime);

    let userImage = avatar_path;
    const gravatarUrl = `https://www.gravatar.com/avatar/`;

   





    if(rating === null) {
        rate = <span className='user-rating'>Rating: N/A</span>
    }else{
        rate = <span className='user-rating'><Rating className='star-rating' defaultValue={rating} max={10} disabled/> <span className='text-rating'>{rating}/10</span></span>
    }

    return(
        <div className='review-contents'>
            <div className='author-details'>
                <Avatar src='https://www.w3schools.com/howto/img_avatar.png'/>
                <p><b>{author}</b></p>
                <p>Posted at {createDate}</p>
                <p>Edited at {updateDate}</p>
            </div>
            <div className='review-details'>
                {rate}
                <p className='review-text'>{content}</p>
            </div>
        </div>
    )
}


export default ReviewContent; 