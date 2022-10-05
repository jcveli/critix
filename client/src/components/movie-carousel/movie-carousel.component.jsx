import { Carousel } from 'react-bootstrap';
import {img_original} from '../../config'

import './movie-carousel.styles.scss'

const MovieCarousel = ({movies}) => { 
    return(
        <div className='carousel-container'>
            <Carousel className='carousel' variant="dark">
                {movies?.map((movie) => {
                    return(
                        <Carousel.Item key={movie.id}>
                            <img src={`${img_original}${movie.backdrop_path}`} />
                            <Carousel.Caption className='carousel-caption-container'>
                                <h2>{movie.title}</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default MovieCarousel;