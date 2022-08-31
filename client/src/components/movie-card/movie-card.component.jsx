import {Card} from 'react-bootstrap';
import Movie from '../movie/movie.component'

import './movie-card.styles.css'

const MovieCard = () => {
    return(
        <Card className="movie-card">
            <Movie />
        </Card>
    )
}

export default MovieCard; 