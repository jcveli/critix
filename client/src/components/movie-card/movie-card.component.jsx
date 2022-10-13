import {useState, useEffect } from 'react'; 
import { useNavigate} from "react-router-dom";
import { Card, CardContent, CardMedia, Typography} from "@mui/material";
import DataSkeleton from '../data-skeleton/data-skeleton.component';

import './movie-card.styles.scss';
import { img_300 } from '../../config';
import missingPoster from '../../assets/missing_image.png';
import StarIcon from '@mui/icons-material/Star';

const MovieCard = ({movie}) => {
	const [loading, setLoading] = useState(true); 
	const {poster_path, title, id, vote_average} = movie;
	const navigate = useNavigate(); 



	useEffect( () => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])



	
  	const onCardClick = () => { 
		navigate(`/detail/${id}`)
	}
    
    return(
		
      	<Card className='movie-card' onClick={onCardClick} sx={{ maxWidth: 250, minWidth: 250 }}>
        	{
				loading ? (
					<DataSkeleton variant="rectangular" width={250} height={375} >
						<CardMedia component='img' />
					</DataSkeleton>
				) : (
					<CardMedia className='poster-image' component='img' image={ poster_path ?  `${img_300}${poster_path}` : `${missingPoster}`} placeholder={missingPoster} alt='poster' />
				)
			}
			<CardContent  className="card-body">
				{loading ? (
					<DataSkeleton >
						<Typography className="title">{title}</Typography>
					</DataSkeleton>
				):(
					<Typography className="title">{title}</Typography>
				)}
				{loading ? (
					<DataSkeleton>
						<Typography className="rating">
							<span>Rating</span>{Math.round(vote_average * 10) / 10}/10
						</Typography>
					</DataSkeleton>
				): (
					<Typography className="rating">
							Rating
							<span className='rate-result'><StarIcon/>{Math.round(vote_average * 10) / 10}/10</span>
					</Typography>
					)} 
			</CardContent>
		</Card>
    )
    
}

export default MovieCard; 