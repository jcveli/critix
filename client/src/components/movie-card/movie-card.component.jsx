import { useNavigate } from "react-router-dom";
import {Card} from 'react-bootstrap';
import './movie-card.styles.scss'
import { img_300 } from '../../config';


const MovieCard = ({movie}) => {
	const navigate = useNavigate(); 

    const onCardClick = () => { 
		navigate(`detail/${movie.id}`)
	}
    
    return(
      <Card className='card stretched-link' onClick={onCardClick}>
        <Card.Img variant="top" src={`${img_300}${movie.poster_path}`} />
      </Card>
    )
    
}

export default MovieCard; 