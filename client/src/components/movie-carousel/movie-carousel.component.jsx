import { Carousel } from 'react-bootstrap';
import {CarouselImage} from '../carousel-image/carousel-image.component';
import './movie-carousel.styles.scss'

const MovieCarousel = ({movies}) => { 
    

    
    return(
        <div className='carousel-container'>
            <Carousel className='carousel' variant="dark">
                {movies?.map((movie) => {
                    const {id} = movie;
                    return(
                        <Carousel.Item key={id}>
                            <CarouselImage key={id}  movie={movie}/>
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