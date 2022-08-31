import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'

import MovieCard from './components/movie-card/movie-card.component'


const BACK_URL = 'http://localhost:5000/'

const App = () => {

  return(
    <div className='container body'>
		<div className='row row-cols-4'>
			<MovieCard />
			<MovieCard />
			<MovieCard />
		</div>
    </div>
  )

}


export default App;
