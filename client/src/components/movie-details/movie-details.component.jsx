
import { img_300 } from '../../config';
import './movie-details.styles.scss';

const MovieDetails = ({details}) => { 
    //console.log(details)
    const {title, tagline, overview, release_date, runtime, poster_path, genres, revenue} = details; 

    let newRevenue = revenue?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return(
        <div className='details-container'>
            <div className='poster-container'>
                <img src={poster_path ? `${img_300}${poster_path}` : ''} alt='movie_poster'/>
                <p>Can watch here:</p>
            </div>
            <div className='info-container'>
                <h1>{title}</h1>
                <p><i>{tagline}</i></p>
                <div className="info-table">
                    <p><b>Release:</b> {release_date}</p>
                    <p><b>Runtime:</b> {runtime} minutes</p>
                    <p><b>Revenue:</b> ${newRevenue} USD</p>
                </div>
                
                <p>{overview}</p>
                <div>
                    <span><b>Genre(s): </b></span>
                        {
                            genres?.map(genre => (
                                <span key={genre.id}> {genre.name} </span>
                            ))
                        }
                </div>
                
            </div>
        </div>
    )
}


export default MovieDetails; 