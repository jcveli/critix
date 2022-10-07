import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import './movie-card.styles.scss'
import { img_300 } from '../../config';
import missingPoster from '../../assets/missing_image.png';

const MovieCard = ({movie}) => {
	const {poster_path, title, id, vote_average} = movie;
	const navigate = useNavigate(); 

	

  	const onCardClick = () => { 
		navigate(`/detail/${id}`)
	}
    
    return(
      	<Card className='movie-card' onClick={onCardClick} sx={{ minWidth: 250 }}>
        	<CardMedia component='img' image={ poster_path ?  `${img_300}${poster_path}` : `${missingPoster}`} placeholder={missingPoster} alt='poster' />
			<CardContent  className="card-body">
				<Typography className="title">
					{title}
				</Typography>
				<Typography className="rating">
					<span>Rating</span>{Math.round(vote_average * 10) / 10}/10
				</Typography>
			</CardContent>
		</Card>
    )
    
}

export default MovieCard; 