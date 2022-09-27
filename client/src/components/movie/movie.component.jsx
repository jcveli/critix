
import { useParams } from 'react-router';
import MovieCard from '../movie-card/movie-card.component';
import './movie.styles.scss'

const Movie = ({movies}) => {
 
    return(
        <div className='movie-container'>
            {movies.map((movie) => {
                return(
                    <MovieCard key={movie.id} movie={movie} />
                )
            })
            
            }
        </div>
    )
}

export default Movie;