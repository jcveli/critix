import { useEffect, useState } from "react";
import Movie from "../../components/movie/movie.component";
import MovieCard from "../../components/movie-card/movie-card.component";
import MovieCarousel from "../../components/movie-carousel/movie-carousel.component";


const Home = () => { 
    const [movies, setMovies] = useState([]); 


    const fetchMovies = async () => { 
        const data = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.React_App_Tmdb_Key}&include_adult=false`)
        const jsonData = await data.json(); 
        setMovies(jsonData.results); 
        
        
    }

    useEffect( () => {
        fetchMovies(); 
    }, [])



    return( 
        <div className="home-container">
            <MovieCarousel movies={movies}/>
            <h2>Trending</h2>
            <Movie movies={movies} />
            
        </div>
    )
}

export default Home; 