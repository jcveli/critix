import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import MovieCard from "../../components/movie-card/movie-card.component";

import './search.styles.scss';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState([]); 
    const [pageNo, setPageNo] = useState(1); 


    const findMovieSearch = async (searchValue) => { 
        if(searchValue){
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.React_App_Tmdb_Key}&language=en-US&query=${searchValue}&page=${pageNo}&include_adult=false`
            await fetch(url)
                .then((response) => response.json())
                .then((data) => setResults(data.results))
                .catch(err => {
                    console.log("Error trying to search...\nError: ", err);
            })
        }
    }

    useEffect( () => {
        findMovieSearch(searchValue);
    },[searchValue])

    const onSearchChange = (event) => { 
        const searchInput = event.target.value.split(' ').join('%20'); 
        setSearchValue(searchInput);
    }

    return ( 
        <div className="Search">
            <div className="search-input-container">
            <h1>Search</h1>
                <Form className='search-box'> 
                    <Form.Control 
                        type="search"
                        placeholder="Search Movie"
                        arial-label="Search"
                        onChange={(event) => onSearchChange(event)}
                    />
                </Form>
            </div>
            
            <div className="search-result-container">
             
                {
                    results.map((result) => { 
                        const {id} = result;
                        return(
                            
                            <MovieCard key={id} movie={result} />
                            
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Search; 