import { useEffect, useState } from "react";
import Movie from "../../components/movie/movie.component";
import MovieCarousel from "../../components/movie-carousel/movie-carousel.component";

import './home.styles.scss'
import { fetchLatestMovies, fetchTrendingMovies } from "../../utils/APIConnection";

const Home = () => { 
    const [trendingMovies, setTrendMovies] = useState([]); 
    const [popularMovies, setPopularMovies] = useState([]); 
    const [nowMovies, setNowMovies] = useState([]);


    const fetchMovies = async () => { 
        const trendData = await fetchTrendingMovies();
        const latestMovieData = await fetchLatestMovies(); 
        
        
        setTrendMovies(trendData);
        setNowMovies(latestMovieData);
    }

    useEffect( () => {
        fetchMovies(); 
    }, [])

    //console.log(nowMovies)
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