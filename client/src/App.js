import {useState, useEffect} from 'react';
import { Route, Routes} from 'react-router';
import './app.css'
import NavBar from './components/navbar/navbar.component';
import Home from './routes/home/home.component';
import Profile from './routes/profile/profile.component';
import Search from './routes/search/search.component';

//const BACK_URL = 'http://localhost:5000/'

const App = () => {
	const [nowPlayingMovies, setNowPlayingMovies] = useState([]); 

	useEffect( () => {
		fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=ee286269210313ba6837f031ee41efd2&include_adult=false`)
		.then((response) => response.json())
		.then((data) => setNowPlayingMovies(data))
		.catch((err) => {
			console.log(err); 
		})
	}, []);

	console.log(nowPlayingMovies);
  return(
    <Routes>
		<Route path='/' element={<NavBar />}>
			<Route index element={<Home />} />
			<Route path='search' element={<Search />} />
			<Route path='profile' element={<Profile />} />
		</Route>
	</Routes>
  )

}


export default App;
