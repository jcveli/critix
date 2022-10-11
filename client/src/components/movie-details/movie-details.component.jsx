import { useEffect, useState } from 'react';
import { img_300, img_original} from '../../config';
import missingPoster from '../../assets/missing_image.png';
import './movie-details.styles.scss';
import GenreTag from '../genre-tag/genre-tag.component';

import DataSkeleton from '../data-skeleton/data-skeleton.component';

const MovieDetails = ({details}) => { 
    const [loading, setLoading] = useState(true); 
    const {title, tagline, overview, release_date, runtime, poster_path, backdrop_path, genres, revenue} = details; 
    let newRevenue = revenue?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    useEffect( () => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])


    
    return(
        <div className='details-container' style={{backgroundImage: `url(${img_original}${backdrop_path})`}}>
            <div className='poster-container'>
                {loading ? (
                        <DataSkeleton variant='rectangular' width={300} height={450}/>
                    ):(
                        <img src={poster_path ? `${img_300}${poster_path}` : `${missingPoster}`} alt='movie_poster'/>
                    )
                }
            </div>
            <div className='info-container'>
                {loading ? (
                    <DataSkeleton  width='100%' height='28'>
                        <h2>{title}</h2>
                    </DataSkeleton>
                ):(
                    <h2>{title}</h2>
                )}
                {loading ? (
                    <DataSkeleton width="100%" >
                        <span><i>{tagline}</i></span>
                    </DataSkeleton>
                ):(
                    <span><i>{tagline}</i></span>
                )}
                {loading ? (
                    <div className="info-table">
                        <DataSkeleton width='20%' height={40}/> 
                        <DataSkeleton width='20%' height={40}/> 
                        <DataSkeleton width='20%' height={40}/>
                    </div>
                ):(
                    <div className="info-table">
                        <p><b>Release:</b> {release_date}</p>
                        <p><b>Runtime:</b> {runtime} minutes</p>
                        <p><b>Revenue:</b> ${newRevenue} USD</p>
                    </div>
                )}
            
                {loading ? (
                    <div className='overview-container'>
                        <h3>Overview</h3>
                        <DataSkeleton width='80%' height={40}/>
                        <DataSkeleton width='70%' height={40}/>
                        <DataSkeleton width='60%' height={40}/>
                    </div>
                ):(
                    <div className='overview-container'>
                        <h3>Overview</h3>
                        <p>{overview}</p>
                    </div>
                )}
                <div className='genre-container'>
                    <span><b>Genre(s): </b></span>
                        {
                            genres?.map(genre =>{
                                return(
                                    <GenreTag key={genre.id} genre={genre}/>
                                )
                            }
                                
                            )
                        }
                </div>

                
            </div>
        </div>
    )
}


export default MovieDetails; 