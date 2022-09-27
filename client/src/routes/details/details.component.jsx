import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../../components/movie-details/movie-details.component';
import Movie from '../../components/movie/movie.component';

import './details.styles.scss'

const Details = () => {
    let { id } = useParams(); 
    let [details, setDetails] = useState([]);
    let [actors, setActors] = useState([]);


    const getMovieDetails = async () => {
        await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.React_App_Tmdb_Key}&language=en-US`)
            .then((response) => response.json())
            .then((data) => setDetails(data))
            .catch(err => {
                console.log("Couldn't fetch movie details. Error: ", err);
            });

    }


    const getActors = async () => { 
        await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.React_App_Tmdb_Key}&language=en-US`)
            .then((response) => response.json())
            .then((data) => setActors(data))
            .catch(err => {
                console.log("Could not fetch cast details. Error: ", err);
            });
    }



    useEffect(() => {
        getMovieDetails();
    },[]);



    return (
        <div className='Details'>
           <MovieDetails key={details.id} details={details}/>
        </div>
    )

}

export default Details; 