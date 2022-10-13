import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../../components/movie-details/movie-details.component';
import Cast from '../../components/cast/cast.component';
import Review from '../../components/review/review.component';
import Movie from '../../components/movie/movie.component';

import './details.styles.scss'
import { fetchMovies } from '../../utils/APIConnection';

const Details = () => {
    
    let { id } = useParams(); 
    let [details, setDetails] = useState([]);
    let [altMovies, setAltMovies] = useState([]); 
    let [cast, setCast] = useState([]);

    



    useEffect(() => {
        const API_KEY = process.env.React_App_Tmdb_Key;
        const getMovieDetails = async () => {
            await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
                .then((response) => response.json())
                .then((data) => setDetails(data))
                .catch(err => {
                    console.log("Couldn't fetch movie details. Error: ", err);
                });
        }
    
    
        const getCast = async () => { 
            await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
                .then((response) => response.json())
                .then((data) => setCast(data.cast))
                .catch(err => {
                    console.log("Could not fetch cast details. Error: ", err);
                });
    
            
        }

        const getAltMovies = async () => { 
            const altData = await fetchMovies(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
            setAltMovies(altData);
            console.log(altMovies)
        }

        getAltMovies();
        getMovieDetails();
		getCast();

        
    },[id]);




    return (
        <div className='Details'>
           	<MovieDetails key={details.id} details={details}/>
			<div className='cast-section'>
                <h2>Cast</h2>
			    <Cast actors={cast} />
            </div>
            <div className='recommend-section'>
                <h2>You May Like</h2>
                <Movie movies={altMovies} />
            </div>
			
            <div className='review-section'>
                <Review movieId={id}/>
            </div>
        </div>
    )

}

export default Details; 