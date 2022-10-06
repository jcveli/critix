import { useEffect, useState } from "react";
import Movie from "../../components/movie/movie.component";
import MovieCarousel from "../../components/movie-carousel/movie-carousel.component";

import './home.styles.scss'
import { fetchMovies } from "../../utils/APIConnection";

const Home = () => { 
    const API_KEY = process.env.React_App_Tmdb_Key;
    const [trendingMovies, setTrendMovies] = useState([]); 
    const [popularMovies, setPopularMovies] = useState([]); 
    const [nowMovies, setNowMovies] = useState([]);


    const getMovies = async () => { 
        const trendData = await fetchMovies(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&include_adult=false&region=US`);
        const latestMovieData = await fetchMovies(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&region=US`); 
        
        
        setTrendMovies(trendData);
        setNowMovies(latestMovieData);
    }

    useEffect( () => {
        getMovies(); 
    }, [])


    return( 
        <div className="home-container">
            
            <MovieCarousel  movies={trendingMovies}/>
            <div className="trend-container">
                <h2>Trending</h2>
                <Movie movies={trendingMovies}/>
            </div>
            <div className="now-container">
                <h2>Now Playing</h2>
                <Movie movies={nowMovies}/>
            </div>
            
        </div>
    )
}

export default Home; 