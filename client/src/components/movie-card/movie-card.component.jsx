import { useNavigate } from "react-router-dom";
import { Card, CardMedia } from "@mui/material";
import './movie-card.styles.scss'
import { img_300 } from '../../config';
import missingPoster from '../../assets/missing_image.png';

const MovieCard = ({movie}) => {
	const {poster_path, title} = movie;
	const navigate = useNavigate(); 

  	const onCardClick = () => { 
		navigate(`/detail/${movie.id}`)
	}
    
    return(
      	<Card className='movie-card' onClick={onCardClick} sx={{ minWidth: 150 }}>
        	<CardMedia component='img' image={ poster_path ?  `${img_300}${poster_path}` : `${missingPoster}`} placeholder={missingPoster} alt='poster' />
			{/*<Card.Body className="card-body">{title}</Card.Body>*/}
		</Card>
    )
    
}

export default MovieCard; 