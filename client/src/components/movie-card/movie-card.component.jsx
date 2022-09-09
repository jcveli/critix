import {Card} from 'react-bootstrap';
//import Movie from '../movie/movie.component'

import './movie-card.styles.css'

const MovieCard = ({movie}) => {
    const {id, name} = movie
    console.log(name);
    return(
        <div className='movie-card-container'>
          <h2>{movie.title}</h2>  
        </div>
    )
}

export default MovieCard; 