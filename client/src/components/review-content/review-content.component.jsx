import { Avatar, Rating} from '@mui/material';
import DataSkeleton from '../data-skeleton/data-skeleton.component';
import { useEffect, useState } from 'react';
import { DateFormat } from '../../utils/DateFormat';

import './review-content.styles.scss';
/**
 * 
 * @param review prop
 * @returns 
 */
const ReviewContent = ({review}) => { 
    const [loading, setLoading] = useState(true);
    const {author, content, created_at, updated_at} = review; 
    const {avatar_path, rating} = review.author_details; 
    let rate = <span className='user-rating'></span>;


    let createDate = DateFormat(created_at);
    let updateDate = DateFormat(updated_at);
    
    let userImage = avatar_path;
    const gravatarUrl = `https://www.gravatar.com/avatar/`;

    /*
    *  removes beginning '/' from user_image URL
    *  If URL does not include 'https', concat
    *  Returns a URL it can fetch properly  
    */
    if(userImage !== null){
        userImage = userImage.slice(1);
        if(!userImage.includes('https://')){
            userImage = gravatarUrl.concat('', userImage);
        }
    }

    

    
    useEffect( () => { 
        setTimeout(() =>{
            setLoading(false);
        }, 3000)
    },[])


    


    if(rating === null) {
        rate = <span className='user-rating'>Rating Not Available</span>
    }else{
        rate = <span className='user-rating'><Rating className='star-rating' defaultValue={rating} max={10} disabled/> <span className='text-rating'>{rating}/10</span></span>
    }

    return(
        <div className='review-contents'>
           {loading ? (
                <div className='author-details'>
                    <DataSkeleton variant='circular' width={100} height={100} />
                    <DataSkeleton width='80%' />
                    <DataSkeleton width='80%' />
                    <DataSkeleton width='80%' />
                </div>
           ):(
            <div className='author-details'>
                <Avatar src={userImage} sx={{minWidth:100, minHeight: 100}}/>
                <p><b>{author}</b></p>
                <p>Posted at {createDate}</p>
                <p>Edited at {updateDate}</p>
            </div>
           )}
            {loading ? (
                <div className='review-details'>
                <DataSkeleton width='35%' height={30} >
                    {rate}
                </DataSkeleton>
                    <div className='review-text'>
                        <DataSkeleton width='100%' />
                        <DataSkeleton width='80%' />
                        <DataSkeleton width='60%' />
                        <DataSkeleton width='40%' /> 
                    </div>
                </div>
            ):(
                <div className='review-details'>
                    <div className='user-rating'>{rate}</div>
                    <div className='review-text'>{content}</div>
                </div>
            )}
        </div>
    )
}


export default ReviewContent; 