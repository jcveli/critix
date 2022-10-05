import { useEffect, useState } from "react";
import Movie from "../../components/movie/movie.component";
import MovieCarousel from "../../components/movie-carousel/movie-carousel.component";

import './home.styles.scss'
import { fetchTrendingMovies } from "../../utils/APIConnection";

const Home = () => { 
    const [trendingMovies, setTrendMovies] = useState([]); 


    const fetchMovies = async () => { 
        const trendData = await fetchTrendingMovies();
        setTrendMovies(trendData);
        
    }

    useEffect( () => {
        fetchMovies(); 
    }, [])


    console.log(trendingMovies);
    return( 
        <div className="home-container">
            
            <MovieCarousel  movies={trendingMovies}/>
            <div className="trend-container">
                <h2>Trending</h2>
                <Movie movies={trendingMovies} header={'Trending'}/>
            </div>
            
        </div>
    )
}

export default Home; 