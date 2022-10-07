
 /*
    TMDB APIs 
 */

const API_KEY = process.env.React_App_Tmdb_Key;


export const fetchMovies = async (Url) => { 
    let response = await fetch(`${Url}`);
    response = await response.json(); 
    response = await response.results; 
    return response; 
}


export const fetchReviewData = async(movieId) => {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    response = await response.json(); 
    response = await response.results; 
    return response; 
}