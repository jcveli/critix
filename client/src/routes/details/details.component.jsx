import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { img_500 } from '../../config';
import MovieDetails from '../../components/movie-details/movie-details.component';
import Cast from '../../components/cast/cast.component';
import Review from '../../components/review/review.component';
//import Movie from '../../components/movie/movie.component';

import './details.styles.scss'

const Details = () => {
    let { id } = useParams(); 
    let [details, setDetails] = useState([]);
    let [cast, setCast] = useState([]);
    //let [crew, setCrew] = useState([]);

    const getMovieDetails = async () => {
        await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.React_App_Tmdb_Key}&language=en-US`)
            .then((response) => response.json())
            .then((data) => setDetails(data))
            .catch(err => {
                console.log("Couldn't fetch movie details. Error: ", err);
            });

    
    }


    const getCast = async () => { 
        await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.React_App_Tmdb_Key}&language=en-US`)
            .then((response) => response.json())
            .then((data) => setCast(data.cast))
            .catch(err => {
                console.log("Could not fetch cast details. Error: ", err);
            });

		
    }



    useEffect(() => {
        getMovieDetails();

		getCast();
    },[]);




    return (
        <div className='Details'>
           	<MovieDetails key={details.id} details={details}/>
			<h2>Cast</h2>
			<Cast actors={cast} />
			
			<h2>Reviews</h2>
            <Review />
        </div>
    )

}

export default Details; 