
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
