import {useState, useEffect } from 'react'; 
import { Card, CardContent, CardMedia, Typography} from '@mui/material';
import { img_300 } from '../../config';
import missingPoster from '../../assets/missing_image.png';
import DataSkeleton from '../data-skeleton/data-skeleton.component';


import './cast-card.styles.scss';

const CastCard = ({actor}) => {
    const [loading, setLoading] = useState(true); 
    const {id,name,character, profile_path} = actor;


    useEffect( () => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <Card className='cast-card' key={id}  sx={{ minWidth: 155 }} >
            {loading ? (
                <DataSkeleton  width={155} height={225} >
                    <CardMedia component="img" />
                </DataSkeleton>
            ):(
                <CardMedia 
                    component="img"
                    image={profile_path ? `${img_300}${profile_path}` : `${missingPoster}`}
                    alt='actor'
                    className='cast-image'
                />
            )
            }
            <CardContent>
                {loading ? (
                    <DataSkeleton width='100%' >
                        <Typography variant='h6' style={{fontWeight: 'bold'}}>.</Typography>
                    </DataSkeleton>
                ):(
                    <Typography variant='h6' style={{fontWeight: 'bold'}}>{name}</Typography>
                )
                }
                {loading ? (
                    <DataSkeleton width='100%' >
                        <Typography variant='span'>{character}</Typography>
                    </DataSkeleton>
                ):(
                    <Typography variant='span'>{character}</Typography>
                )
                    
                }
            </CardContent>

        </Card>
    )
}

export default CastCard; 