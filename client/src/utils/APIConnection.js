
 
export const fetchTrendingMovies = async () => { 
    let response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.React_App_Tmdb_Key}&include_adult=false`);
    response = await response.json(); 
    response = await response.results; 
    return response; 
}
    