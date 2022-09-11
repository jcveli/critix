import {Card} from 'react-bootstrap';
import './movie-card.styles.scss'
import { img_300 } from '../../config';


const MovieCard = ({movie}) => {
    const {title} = movie;
    return(
      <Card className='card'>
        <Card.Img variant="top" src={`${img_300}${movie.poster_path}`} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    )
    
}

export default MovieCard; 