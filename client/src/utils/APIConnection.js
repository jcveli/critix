
 /*
    TMDB APIs 
 */
export const fetchTrendingMovies = async () => { 
    let response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.React_App_Tmdb_Key}&include_adult=false&region=US`);
    response = await response.json(); 
    response = await response.results; 
    return response; 
}


export const fetchLatestMovies = async () => { 
    let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.React_App_Tmdb_Key}&include_adult=false&language=en-US&page=1&region=US`);
    response = await response.json(); 
    console.log(response);
    response = await response.results; 
    return response; 
}
    