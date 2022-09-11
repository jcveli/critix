import { Carousel } from 'react-bootstrap';
import {img_original} from '../../config'

import './movie-carousel.styles.scss'

const MovieCarousel = ({movies}) => { 
    return(
        <div className='carousel-container'>
            <Carousel>
                {movies?.map((movie) => {
                    return(
                        <Carousel.Item key={movie.id}>
                            <img src={`${img_original}${movie.backdrop_path}`} />
                            <Carousel.Caption>
                                <h3>{movie.title}</h3>
                                <p>{movie.overview}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default MovieCarousel;