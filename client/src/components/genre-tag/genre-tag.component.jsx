import { useState, useEffect } from 'react';
import DataSkeleton from '../data-skeleton/data-skeleton.component';
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
            <DataSkeleton>
                <span className='genre-tag'>{name}</span>
            </DataSkeleton>
        ):(
            <span className='genre-tag'>{name}</span>
        )

        }
       </div>
    )
}

export default GenreTag; 