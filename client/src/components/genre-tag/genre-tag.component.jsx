import { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';
import './genre-tag.component.scss';

const GenreTag = ({genre}) => {
    const [loading, setLoading] = useState(true); 
    const {name} = genre; 

    useEffect( () => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return(
       <div>
        {loading ? (
            <Skeleton sx={{ bgcolor:'grey.900'}} animation='wave'>
                <span className='genre-tag'>{name}</span>
            </Skeleton>
        ):(
            <span className='genre-tag'>{name}</span>
        )

        }
       </div>
    )
}

export default GenreTag; 