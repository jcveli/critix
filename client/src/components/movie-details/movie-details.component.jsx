import { img_300, img_original} from '../../config';
import missingPoster from '../../assets/missing_image.png';
import './movie-details.styles.scss';

const MovieDetails = ({details}) => { 
    //console.log(details)
    const {title, tagline, overview, release_date, runtime, poster_path, backdrop_path, genres, revenue} = details; 
    let newRevenue = revenue?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    

    
    return(
        <div className='details-container' style={{backgroundImage: `url(${img_original}${backdrop_path})`}}>
            <div className='poster-container'>
                <img src={poster_path ? `${img_300}${poster_path}` : `${missingPoster}`} alt='movie_poster'/>
            </div>
            <div className='info-container'>
                <h1>{title}</h1>
                <p><i>{tagline}</i></p>
                <div className="info-table">
                    <p><b>Release:</b> {release_date}</p>
                    <p><b>Runtime:</b> {runtime} minutes</p>
                    <p><b>Revenue:</b> ${newRevenue} USD</p>
                </div>
            
                <div className='overview-container'>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                </div>
                <div className='genre-container'>
                    <span><b>Genre(s): </b></span>
                        {
                            genres?.map(genre => (
                                <span key={genre.id} className="genre-tag"> {genre.name} </span>
                            ))
                        }
                </div>

                
            </div>
        </div>
    )
}


export default MovieDetails; 